//DOM

//selecting element
//Reading content from element
//update or edit existing element
//removing element

//selecting element
//id(#)
//class(.)
//element




//selecting element
const h1Elm = document.querySelector("h1");
const containerElm = document.querySelector(".container");
const navElm = document.querySelector("#nav");
const FirstNavElm = document.querySelector("#nav .first");

//id, element, class
//getElementsByTagName
//getElememtsByClassName


const navElemId = document.getElementById("nav");

console.log(h1Elm);







//reading content
//h1Elm.textContent = 'Our new Content';
h1Elm.innerHTML = 'Our new <em>Content</em>';
console.log(h1Elm.textContent);







//Traversing element
const firstNavElm = navElm.children[0];
//console.log(navElm.children[0].className);
console.log(
    firstNavElm.nextElementSibling.
    nextElementSibling.previousElementSibling
);







//parentElement (Immediate parent)
//closest() (write your target)
console.log(firstNavElm.closest('.body'));







//ForEach couldn't be apploed on HTMLCollection must be converted using (Array.From())
/* const arryElm = Array.from(navElm.children);
arryElm.forEach(elm => console.log(elm)); */




//Removing Element

//using Tarrget Element
//firstNavElm.remove();

//Using parent
//firstNavElm.parentElement.removeChild(firstNavElm);




//Creating element
//<li class="four">Four</li>
const liElm = document.createElement('li');

liElm.className = 'five';
liElm.textContent = 'Five';




//appendChild
//prepend

//navElm.prepend(liElm);
//navElm.appendChild(liElm);


//insertAdjacentHTML
//insertAdjacentElement

//navElm.insertAdjacentElement('beforeend', liElm);
//navElm.insertAdjacentElement('afterbegin', liElm);

//console.log(liElm);







/* const arryElm = Array.from(navElm.children);
arryElm.forEach(elm => {
    elm.addEventListener('click', (e) => {
        //console.log(e);
        console.log(e.target.textContent);
    })
}); */







//Event Delegation
//performance

navElm.addEventListener('click', e => {
    if(e.target.className === 'five') {
        console.log("You are clicking new added element");
    }
    
});



const liElmHTML = '<li class="five">Five</li>';
navElm.insertAdjacentHTML('beforeend', liElmHTML);




//Event capturing
//Event Bubbling
