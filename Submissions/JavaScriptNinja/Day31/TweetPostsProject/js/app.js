//input must not have 250 words
//0/250 (More professional and little challenging)
// on Submit (validation)


//2nd feature (1:30pm)
//generate time during adding tweet
//date-fns


const postForm = document.querySelector(".post-form");
const inputPost = document.querySelector(".input-post");
const showPost = document.querySelector(".show-post");




let generateTime = () => {
    return dateFns;
};

const posts = [
    {
        id: 1,
        post: "Today is a bright day.",
        time: dateFns.formatDistance(
            new Date(1986, 3, 4, 11, 32, 0),
            new Date(1986, 3, 4, 10, 32, 0),
            { addSuffix: true }
        )
    }
];



/* console.log(dateFns.formatDistance(
    new Date(1986, 3, 4, 11, 32, 0),
    new Date(1986, 3, 4, 10, 32, 0),
    { addSuffix: true }
)); */





let showAllPostsToUI = () => {
    showPost.innerHTML = "";
    let htmlPost = "";

    posts.forEach((item) => {
        htmlPost += `<a href="#" class="list-group-item list-group-item-action">
        <p class="mb-1 post-content">${item.id}. ${item.post}</p>
          <small class="float-right time-view">3 days ago</small>
      </a>`;
    });

    showPost.insertAdjacentHTML("beforeend", htmlPost);
}

showAllPostsToUI();


let submitPostContent = (evt) => {
    evt.preventDefault();

    if(inputPost.value !== "") {
        let post = {
            id: posts.length + 1,
            post: inputPost.value,
            time: dateFns.formatDistance(
                new Date(1986, 3, 4, 11, 32, 0),
                new Date(1986, 3, 4, 10, 32, 0),
                { addSuffix: true }
            )
        }

        posts.push(post);

        showAllPostsToUI();

        inputPost.value = "";
    }
    
}


postForm.addEventListener("submit", submitPostContent);