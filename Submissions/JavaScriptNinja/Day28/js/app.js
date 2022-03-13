//Project Development primer

//1. Have clear idea about your projects
//2. Get assets ready
//3. Follow the flow (reading story)
//-putting input
//-submit content
//-adding item to the UI
//-delete item
//-remove item from the UI
//-putting input on search box
//-show item based on search input



//CRUD(heart of every application)
//C-CREATE - (storing data to remove source)
//R-READ - (data source - UI (visual))
//U-UPDATE - (modifying the existing resource) - Edit + update
//D-DELETE - (removing info)


//entry point
//product search
//Delete product
//input -> product add


//


//selector
const formElm = document.querySelector('form');
const nameInputElm = document.querySelector(".product-name");
const priceInputElm = document.querySelector(".product-price");
const listGroupElm = document.querySelector(".list-group");
const filterElm = document.querySelector("#filter");
const formButton = formElm.children[1];
let selectedId;
//tracking item
let products = [];

function showAllItemToUI(items) {
    listGroupElm.innerHTML = '';

    items.forEach(item => {
        const listElm = `<li class="list-group-item item-${item.id} collection-item">
                    <strong>${item.name}</strong>- <span class="price">$${item.price}</span>
                    <i class="fa fa-trash delete-item float-right"></i><i class="fa fa-pencil edit-item float-right"></i>
                </li>`;

        listGroupElm.insertAdjacentHTML('afterbegin', listElm);
    });
}


function removeItemFromDataStore(id) {
    const productsAfterDelete = products.filter(product => product.id !== id);
    products = productsAfterDelete;
    console.log(products);
}

function removeItemFromUI(id) {
    document.querySelector(`.item-${id}`).remove();
}

function getItemID(elm) {
    const liElm = elm.parentElement;
    return Number(liElm.classList[1].split("-")[1]);
}

function resetInput() {
    nameInputElm.value = "";
    priceInputElm.value = "";
}

function addItemToUI(id, name, price) {
    //generate id
    
    const listElm = `<li class="list-group-item item-${id} collection-item">
                    <strong>${name}</strong>- <span class="price">$${price}</span>
                    <i class="fa fa-trash delete-item float-right"></i><i class="fa fa-pencil edit-item float-right"></i>
                </li>`;
    listGroupElm.insertAdjacentHTML('afterbegin', listElm);
}

function showValuesToUIInput(id) {
    nameInputElm.value = products[id].name;
    priceInputElm.value = products[id].price;
}

function validateInput(name, price) {
    let isError = false;

    if(!name || name.length < 3) {
        isError = true;
        //console.log("invalid input");
    }
    if(!price || Number(price) < 0) {
        isError = true;
        //console.log("invalid price input");
    }

    return isError;
}

function receiveInputs() {
    const nameInput = nameInputElm.value;
    const priceInput = priceInputElm.value;

    return {
        nameInput,
        priceInput
    }
};

function removeSubmitButton() {
    formElm.children[1].remove();
}

function removeUpdateButton() {
    formElm.children[1].remove();
}

function addSubmitButton() {
    console.log("It is here", formElm.children.length);
    if(formElm.children.length === 1) {
        formElm.insertAdjacentHTML('beforeend', `<button class="btn mt-3 btn-block btn-primary add-product">Submit</button>`);
    }
}

function addUpdateButton() {
    if(formElm.children.length === 1) {
        formElm.insertAdjacentHTML('beforeend', `<button class="btn mt-3 btn-block btn-primary update-product">Update</button>`);
    }
}


//Single Resposibility Principle
function init() {
    formElm.addEventListener("submit", (evt) => {
        //prevent default action(browser reloading)
        evt.preventDefault();

        if(Array.from(evt.target.children[1].classList).includes('add-product')) {
            //receiving input
            const {nameInput, priceInput} = receiveInputs();
        
            //validate input
            const isError = validateInput(nameInput, priceInput);
            if(isError) {
                alert("Please provide valid input");
                return;
            }
        
            if(!isError) {
                //add item to data store
                //generate item
                const id = products.length;
                products.push({
                    id: id,
                    name: nameInput,
                    price: priceInput
                });
        
                //add item to the UI
                addItemToUI(id, nameInput, priceInput);
                //console.log(products);
                //reset the input
                resetInput();
            }
        } else if(Array.from(evt.target.children[1].classList).includes('update-product')) {
            //receiving input
            const {nameInput, priceInput} = receiveInputs();

            //validate input
            const isError = validateInput(nameInput, priceInput);
            if(isError) {
                alert("Please provide valid input");
                return;
            }

            if(!isError) {
                products[selectedId] = {
                    id: selectedId,
                    name: nameInput,
                    price: priceInput
                };
                //show changes to the UI
                showAllItemToUI(products);
                //remove update button
                removeUpdateButton();
                //add submit button
                addSubmitButton();


                //reset the input
                resetInput();
            }
        }
    });
    
    
    filterElm.addEventListener("keyup", evt => {
        //filter depend on this value
        const filterValue = evt.target.value;
        const filteredArr = products.filter(product => product.name.includes(filterValue));
        showAllItemToUI(filteredArr);
        //show Item to UI
    
    });


        //deleting item (event delegation) //->Make parent as event listener for dynamic changes
    listGroupElm.addEventListener("click", evt => {
        const id = getItemID(evt.target);

        if(evt.target.classList.contains("delete-item")) {
            //delete item from UI
            removeItemFromUI(id);
            //delete item from object
            removeItemFromDataStore(id);
        } else if(evt.target.classList.contains("edit-item")) {
            //console.log("EDIT", id);
            //show products in UI input
            showValuesToUIInput(id);
            //remove Submit button
            removeSubmitButton();
            //add Update button
            addUpdateButton();

            selectedId = id;
        }
    });
}

init();
