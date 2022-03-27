//Synchronous vs asunchronous

//Asynchronous(Not Instant)
//Sending API request
//saving data to database
//reading data from database
//reading file, writing file


//javascript is single threaded
    //send task to the browser
    //send result from the browser to javascript engine
//Asynchronous programming


//browser + javascript V8 engine
//window, alert



//way of dealing asynchronous task
//callback pattern
//promise pattern
//async await pattern (promise)


//callback
/* function one(fn) {
    setTimeout(() => {
        return fn(1)
    }, 2000);
} */


//promise pattern
//resolve
//reject
//pending state
/* function one() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
            //reject(new Error(1));
        }, 2000);
    })
} */



/* function two(num) {
    return num;
} */


//promise pattern
/* function three() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(3);
        }, 2000);
    })
} */


/* function three(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num);
        }, 2000);
    })
} */



/* one()
    .then((value) => {
        /* console.log(two(value + 1)); */
        //result available
/*         return three(value + 3)
    }) */
/*     .then((data) => {
        console.log(data);
    })
    .catch(err => console.log(err)); */


/* const callBackFn = (value) => {
    console.log(value);
}

one(callBackFn); */


//console.log(two());


/* three((value) => {
    console.log(value);
}); */


/* three()
.then((value) => {
    console.log(value);
})
.catch(err => console.log(err)); */



//one
//two
//three
//four





/* function one(fn) {
    setTimeout(() => {
        return fn(1)
    }, 2000);
} */


//callback
/* function three(fn, num) {
    setTimeout(() => {
        return fn(num)
    }, 2000);
} */


//callback hell //nested architecture
/* one((value) => {
    console.log(value);

    const callBackFnThree = (value) => {
        console.log(value);
    };

    three(callBackFnThree, value + 2)
}) */




//Axios, fetch
//asynchronous

//GET Request(Getting data)
/* function getTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => {
        return res.json()
    })
    .then(data => console.log(data))
    .catch((err) => console.log(err));
}

//getTodos();


function getTodo() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => {
        return res.json()
    })
    .then(data => console.log(data))
    .catch((err) => console.log(err));
}

//getTodo();



//POST (adding new Data to server)
function addTodo() {
    fetch('https://jsonplaceholder.typicode.com/todos/', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            title: "Hello world",
            completed: false
        })
    })
    .then((res) => {
        return res.json()
    })
    .then(data => console.log(data))
    .catch((err) => console.log(err));
}


addTodo();




//PUT/PATCH(updating data to server)

function updateTodo() {
    fetch('https://jsonplaceholder.typicode.com/todos/1', {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            title: "updated data",
            completed: true,
        })
    })
    .then((res) => {
        return res.json()
    })
    .then(data => console.log(data))
    .catch((err) => console.log(err));
}

updateTodo();



//DELETE(delete data from server)

function deleteTodo() {
    fetch('https://jsonplaceholder.typicode.com/todos/1', {
        method: 'DELETE',
    })
    .then((res) => {
        return res.json()
    })
    .then(data => console.log(data))
    .catch((err) => console.log(err));
}

deleteTodo(); */



async function getTodos() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await res.json();
        return data;
    } catch(err) {
        console.log(err);
    }
}

//IIFE
;(async function() {
    const data = await getTodos();
    console.log(data);
})();