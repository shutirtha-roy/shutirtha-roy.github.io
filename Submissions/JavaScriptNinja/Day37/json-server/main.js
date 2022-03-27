http
.getAll('http://localhost:3000/posts')
.then(posts => {
    const ulElm = document.querySelector("ul");
    let liElm = "";

    posts.forEach(post => {
        liElm += `<li>${post.title}</li>
        <li>${post.author}</li>`;
    });

    ulElm.insertAdjacentElement('afterbegin', liElm);

    console.log('posts', posts);
})
.catch(err => console.log(err));