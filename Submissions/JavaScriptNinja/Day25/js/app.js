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
//U-UPDATE - (modifying the existing resource)
//D-DELETE - (removing info)

(function() {
    const formElm = document.querySelector('form');
    const nameInputElm = document.querySelector(".product-name");
    const priceInputElm = document.querySelector(".product-price");
    const listGroupElm = document.querySelector(".list-group");
    const filterElm = document.querySelector("#filter");

    //tracking item
    let products = [];





    function showAllItemToUI(items) {
        listGroupElm.innerHTML = '';

        items.forEach(item => {
            const listElm = `<li class="list-group-item item-${item.id} collection-item">
                        <strong>${item.name}</strong>- <span class="price">$${item.price}</span>
                        <i class="fa fa-trash delete-item float-right"></i>
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
                        <i class="fa fa-trash delete-item float-right"></i>
                    </li>`;
        listGroupElm.insertAdjacentHTML('afterbegin', listElm);
    }

    function validateInput(name, price) {
        let isError = false;

        if(!name || name.length < 5) {
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

    //Single Resposibility Principle


    function init() {
        formElm.addEventListener("submit", (evt) => {
            //prevent default action(browser reloading)
            evt.preventDefault();
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
            if(evt.target.classList.contains("delete-item")) {
                const id = getItemID(evt.target);
                //delete item from UI
                removeItemFromUI(id);
                //delete item from object
                removeItemFromDataStore(id);

            }
        });
    }

    init();
})()
