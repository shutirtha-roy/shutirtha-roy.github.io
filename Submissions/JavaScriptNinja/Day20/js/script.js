//9. Creating Element

const ul = document.querySelector("ul");
const li = document.createElement("li");
li.className = "product-collection-item";
li.appendChild(document.createTextNode("MyItem"));
//ul.appendChild(li);
ul.prepend(li);
console.log(ul);



//10. Replacing and removing element
const oldHeading = document.querySelector(".h1");
const newHeading = document.createElement("h1");
newHeading.appendChild(document.createTextNode("My Updated Product List"));
const container = document.querySelector(".container");
//container.replaceChild(newHeading, oldHeading);
//oldHeading.replaceWith(newHeading);

const list = document.querySelectorAll("ul.product-collection");
//list.lastElementChild.remove();
list.removeChild(list.lastElementChild);
//console.log(ul);
//console.log(list.lastChild);
//console.log(list.lastElementChild);
console.log(list);



//11. Event Introduction
const h1 = document.querySelector("h1");
const li = document.querySelector("li");
const lis = document.querySelectorAll("li");
const form = document.forms[0];
const input = document.getElementById('productName');

function evtInformation() {
    evt.preventDefault();
    //console.log(evt);
    console.log('Type: ', evt.type);
    console.log('Target: ', evt.target);
    console.log('Input value: ', input.value);
    //console.log('Target value', evt.target.innerText);
    //console.log('Offset-x', evt.offsetX);
    //console.log('Offset-y', evt.offsetY);
    //console.log('Client-x', evt.clientX);
    //console.log('Client-y', evt.clientY);
    //console.log("Clicked H1");
}



/* h1.addEventListener("click", evtInformation);
li.addEventListener("click", evtInformation);

lis.forEach(li => {
    li.addEventListener("click", 
    evtInformation);
}); */


form.addEventListener("submit", evtInformation);






//13. It's your time to practice

//Event bubbling
/* const li = document.querySelector("li");
const ul = document.querySelector("ul");
const container = document.querySelector(".container");

/* li.addEventListener('click', () => {
    console.log('You clicked li');
});

ul.addEventListener('click', () => {
    console.log('You clicked ul');
}); */

/* container.addEventListener('click', evt => {
    if(evt.target.id === 'sample') {
        evt.target.classList.add("custom");
    }
}) */ 





//14. Event bubbling and delegation

/* //Event bubbling
const li = document.querySelector("li");
const ul = document.querySelector("ul");
const container = document.querySelector(".container");

/* li.addEventListener('click', () => {
    console.log('You clicked li');
});

ul.addEventListener('click', () => {
    console.log('You clicked ul');
}); */
/*
container.addEventListener('click', evt => {
    if(evt.target.id === 'sample') {
        evt.target.classList.add("custom");
    }
})
 */


//15. Event delegation in practice












//16. Excercises

/* Exercise-1(Try to create following structure by i=using Dom properties and method)
======================================================================
<div class="container" id="container">
  <h1 class="h1">Product List</h1>
  <ul class="product-collection  mb-3">
    <li class="product-collection-item" id="sample">Shoes</li>
  </ul>
</div> 
 */


const newContainer = document.createElement("div");

const newh1g = document.createElement("h1");
const newul = document.createElement("ul");
const newli = document.createElement("li");


newli.appendChild(document.createTextNode("Shoes"));
newul.appendChild(newli);
newContainer.appendChild(newul);



/* Exercise-2(Try to Examine the common event 
like mouse Event and Keyboard event found in 
MDN DOCS "https://developer.mozilla.org/en-US/docs/Web/Events") */



//Animation
//Asynchronous data fetching
//Clipboard
//Composition
//CSS transition	
//Database
//DOM mutation	
//Drag'n'drop, Wheel
//Focus
//Form
//Fullscreen
//Gamepad
//Gestures
//History
//HTML element content display management
//Inputs
//Keyboard	
//Loading/unloading documents
//Manifests
//Media
//Messaging
//Mouse
//Network/Connection	
//Payments	
//Performance
//Pointer
//Print
//Promise rejection	
//Sockets
//SVG
//Text selection	
//Touch
//Virtual reality	
//RTC (real time communication)	
//Server-sent events	
//Speech
//Workers






/* Exercise-3:
(Recap Event bubbling and event delegation by dummy example of your own) */


document.querySelector('#content').addEventListener('click', () => {
    console.log('Vlick');
});
  
document.querySelector('#container').addEventListener('click', () => {
console.log('Click');
});


document.addEventListener('click', function(evt) {
    evt.target.value;

});


/* Exercise-4:(Bonus: Try to use insertAdjacentElement, 
insertAdjacentHTML, insertBefore from 
searching and reading MDN docs ) */

btn.addEventListener('click', () => {
    var tempDiv = document.createElement('div');
    tempDiv.style.backgroundColor = randomColor();
    if (activeElem) {
      activeElem.insertAdjacentElement('afterend', tempDiv);
    }
    setListener(tempDiv);
});


btn.addEventListener('click', () => {
    var tempDiv = document.createElement('div');
    tempDiv.style.backgroundColor = randomColor();
    if (activeElem) {
      activeElem.insertBefore('afterend', tempDiv);
    }
    setListener(tempDiv);
});