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

//callback pattern
//promise pattern


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
function one() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve(1);
            reject(new Error(1));
        }, 2000);
    })
}



function two() {
    return 2;
}

function three(fn) {
    setTimeout(() => {
        return fn(3);
    }, 2000);
}



one()
.then((value) => {
    console.log(value);
})
.catch(err => console.log(err));


/* const callBackFn = (value) => {
    console.log(value);
}

one(callBackFn); */


//console.log(two());


three((value) => {
    console.log(value);
});