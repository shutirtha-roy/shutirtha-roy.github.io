const postForm = document.querySelector(".post-form");
const inputPost = document.querySelector(".input-post");
const showPost = document.querySelector(".show-post");
const listGroupElm = document.querySelector(".list-group");
const searchValue = document.querySelector(".search-value");
let selectedId;


let generateTime = (time) => {
    return dateFns.distanceInWords(
        new Date(),
        time,
        { addSuffix: true }
    );
};

let posts = [
];


let showPostsToUI = (posts) => {
    showPost.innerHTML = "";
    let htmlPost = "";

    posts.forEach((item) => {
        htmlPost += `<a href="#" class="list-group-item item-${item.id} list-group-item-action">
        <p class="mb-1 post-content">${item.id}. ${item.post} <i class="fa fa-trash delete-item float-right"></i><i class="fa fa-pencil edit-item float-right"></i></p>
          <small class="float-right time-view">${generateTime(item.time)} ago</small>
      </a>`;
    });

    showPost.insertAdjacentHTML("beforeend", htmlPost);
}

let savePostToLocalStorage = () => localStorage.setItem("posts", JSON.stringify(posts));

let getPostsFromLocalStorage = () => posts = JSON.parse(localStorage.getItem("posts"));

let wordCountofPost = contentOfPost => contentOfPost.split(" ").length;

let wordLimit = wordLength => wordLength < 250;

let submitPostIfValid = contentPost => contentPost !== "" && wordLimit(wordCountofPost(contentPost));

let checkIfSubmit = evt => Array.from(evt.target.children[1].classList).includes('submit-tweet');

let checkIfUpdate = evt => Array.from(evt.target.children[1].classList).includes('update-product');

let addNewPost = postContent => {
    let pid;

    if(posts === null) {
        pid = 1;
    } else {
        pid = posts.length + 1;
    }

    let post = {
        id: pid,
        post: postContent,
        time: new Date()
    }

    posts.push(post);
}

let resetInput = () => inputPost.value = "";

let submitOrUpdatePostContent = (evt) => {
    evt.preventDefault();
    console.log();
    console.log();

    if(checkIfSubmit(evt) && submitPostIfValid(inputPost.value)) {
        addNewPost(inputPost.value);

        showPostsToUI(posts);

        savePostToLocalStorage();

        resetInput();
    } else if(checkIfUpdate(evt) && submitPostIfValid(inputPost.value)) {

        posts[selectedId - 1] = {
            id: selectedId,
            post: inputPost.value,
            time: new Date()
        };
        //add item to the LocalStorage
        addToStorage();
        //show changes to the UI
        showPostsToUI(posts);
        //remove update button
        removeUpdateButton();
        //add submit button
        addSubmitButton();

        resetInput();
    }
}

let checkPostsWhenLoaded = (evt) => {
    let postsFetch = getPostsFromLocalStorage();

    if(postsFetch) {
        posts = postsFetch;
        showPostsToUI(posts);
    } else {
        posts = [];
    }
}



let getSeachedValue = (evt) => {
    const searchedValue = searchValue.value;
    let filteredPosts = posts.filter(post => post.post.includes(searchedValue));
    return filteredPosts;
}

let removeItemFromUI = (id) => {
    document.querySelector(`.item-${id}`).remove();
}

let removeItemFromDataStore = (id) => {
    const postsAfterDelete = posts.filter(post => post.id !== id);
    posts = postsAfterDelete;
}

let addToStorage = () => {
    localStorage.setItem("posts", JSON.stringify(posts));
}

let showValuesToUIInput = (id) => {
    inputPost.value = posts[id-1].post;
}

let removeSubmitButton = () => {
    postForm.children[1].remove();
}

let removeUpdateButton = () => {
    postForm.children[1].remove();
}

let addUpdateButton = () => {
    if(postForm.children.length === 1) {
        postForm.insertAdjacentHTML('beforeend', `<button class="btn bg-dark text-light border-white mx-auto update-product">Update</button>`);
    }
}

let addSubmitButton = () =>  {
    if(postForm.children.length === 1) {
        postForm.insertAdjacentHTML('beforeend', `<input type="submit" class="btn bg-dark text-light border-white mx-auto submit-tweet" value="Submit Tweet">`);
    }
}


document.addEventListener("DOMContentLoaded", checkPostsWhenLoaded);
postForm.addEventListener("submit", submitOrUpdatePostContent);
searchValue.addEventListener("keyup", (evt) => {
    showPostsToUI(getSeachedValue(evt));
})



function getItemID(elm) {
    const liElm = elm.parentElement.parentElement;
    return Number(liElm.classList[1].split("-")[1]);
}





listGroupElm.addEventListener("click", evt => {
    const id = getItemID(evt.target);
    console.log(id);

    if(evt.target.classList.contains("delete-item")) {
        //delete item from UI
        removeItemFromUI(id);
        //delete item from object
        removeItemFromDataStore(id);
        //changes to the LocalStorage
        addToStorage();
    } else if(evt.target.classList.contains("edit-item")) {
        //console.log("EDIT", id);
        //show posts in UI input
        showValuesToUIInput(id);
        //remove Submit button
        removeSubmitButton();
        //add Update button
        addUpdateButton();

        selectedId = id;
    }
});