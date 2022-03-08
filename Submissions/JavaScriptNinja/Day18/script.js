//1. What is DOM(Document Object Model)?





//2. DOM in practice
let val = document;
console.dir(val);

val = document.head;
val = document.body;
val = document.all;
val = document.all[5];
val = document.title;
val = document.links[0];
val = document.characterSet;
val = document.forms[0];


console.log(val);




//3. Window object




//4. Selecting element
val = document.getElementById("container");
val = document.getElementsByClassName("container")[0];
val = document.getElementsByTagName("body")[0];
val = document.querySelector(".product-collection-item");
val = document.querySelector("#container");
val = document.querySelectorAll(".product-collection-item")[1];

console.log(val);






//5. HTML collection vs Node List
val = document.getElementsByClassName("product-collection-item");

val = Array(val);

val = document.querySelectorAll(".product-collection-item");

val.forEach(node => console.log(node));

/* for(let i = 0; i < val.length; i++) {
    console.log(val[i]);
} */

for(let node of val) {
    console.log(node);
}




//6. Manipulating element
val = document.querySelector(".product-collection-item");

//manipulation
val.style.color = "red";
val.style.backgroundColor = "Green";
val.textContent = "Microphone";
val.innerText = "Shirt";
val.innerHTML = "<em>Shirt</em>";
console.log(val.textContent);
console.log(val);


val = document.querySelector("a");
val = document.querySelector("a").getAttribute("href");
val = document.querySelector("href", "https://facebook.com");
val = val.classList;
val.classList.add("MyClass");
console.log(val);






//7. Traversing DOM

val = document.querySelector(".product-collection");
val = val.children[0].nextElementsSibling.parentElement.parentElement;
console.log(val);




//8. Interacting and child Nodes

//1 - Element
//2 - Attribute (deprecated)
//3 - Text node
//8 - Comment
//9 - Document itself
//10 - Doctype
val = val.childNodes[1].nodeName;
if(val.childNodes[1].nodeType !== 3) {
    val.childNodes[1].classList.add("MyClass");
}


console.log(val);