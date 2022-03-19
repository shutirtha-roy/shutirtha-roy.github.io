//1. Introduction to Synchronous Programming


//Synchronous programming example, after one completes then it goes to another one
//javascript is single threaded
/* console.log(1);
console.log(2);
console.log(3); */



//2. Introduction to Asynchronous Programming 

//javascript single threaded and asynchronous in nature

/* console.log(1);
setTimeout(() => {
    console.log('calling after 2 sec');
    console.log(2);
}, 2000);
console.log(3); */



//3. Asynchronous code with callback


//callback function
//Promise API
//async wait - behind the scene works with Promise


//callback function
/* let getNumber = (num, callback) => {
    setTimeout(() => {
        console.log('calling after 2 sec');
        callback(num);
    }, 2000);
}


getNumber(2, (num) => {
    console.log(num);
}); */




//4. callback and callback hell

//1. Getting user - 2s
//2. course enrollment - 2s
//3. price of the course - 2s
//callback hell/christmas tree

/* let getUser = (id, callback) => {
    setTimeout(() => {
        callback({
            id: 1,
            name: 'Adnan',
            profession: 'Web developer'
        })
    }, 2000);
}

let enrolledCourse = (firstName, callback) => {
    setTimeout(() => {
        callback(['javascript', 'React', 'Node.JS'])
    }, 2000)
}

let getPrice = (courseName, callback) => {
    setTimeout(()=> {
        callback('course price is 4000')
    }, 2000)
}

getUser(1, (user) => {
    console.log(user);
    enrolledCourse(user.name, (courses) => {
        console.log(courses);
        getPrice(courses[0], (price) => {
            console.log('JavaScript course price is 4000');
        });
    });
}); */




//5. Introduction to Promise

//Working with Promise
//pending, resolved, reject

/* const result = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("I will be done after 2 sec");
    }, 2000);
}); */

/* result.then((text) => {
    console.log(text);
}); */


/* const result = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("I will be done after 2 sec");
    }, 2000);
});


result
.then((text) => {
    console.log(text);
})
.catch((err) => {
    console.log(err);
}); */


/* const result = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve("I will be done after 2 sec");
        reject(new Error("Some Error occured"))
    }, 2000);
});


result
.then((text) => {
    console.log(text);
})
.catch((err) => {
    console.log(err.message);
}); */






//6. Using Promise

//Using promise
//====================================================================


/* let getUser = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: 'Adnan',
                profession: 'Web developer'
            });
        }, 2000);
    })
}


let enrolledCourse = (firstName) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['javascript', 'React', 'Node.JS'])
        }, 2000);
    }); 
}


let getPrice = (courseName) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve('course price is 4000')
            //reject(new Error('Some error occured'));
        }, 2000);
    })
}


getUser(1)
  .then(user => {
      console.log(user);
      return enrolledCourse(user.firstName) 
  })
  .then(courses => {
    console.log(courses);
    return getPrice(courses[0]);
  })
  .then(price => {
      console.log(price);
  })
  .catch(err => console.log(err.message)); */





//7. promise resolve, reject, all, race

/* const p1 =  Promise.resolve('step1');
const p2 =  Promise.resolve('step2');
const p3 =  Promise.resolve('step3');
 */
/* Promise.all([p1, p2, p3])
  .then((result) => {
    console.log(result);
  })
  .catch(err => {
      console.log(err.message);
  }); */


/* Promise.race([p1, p2, p3]).then(result => {
    console.log(result);
}); */




//8. Using Async await



//async await



/* let getUser = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: 'Adnan',
                profession: 'Web developer'
            });
        }, 2000);
    })
}


let enrolledCourse = (firstName) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['javascript', 'React', 'Node.JS'])
        }, 2000);
    }); 
}


let getPrice = (courseName) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve('course price is 4000')
            //reject(new Error('Some error occured'));
        }, 2000);
    })
} */



/*  let getResult = async () => {
    const user = await getUser(1);
    console.log(user);
    const courses = await enrolledCourse(user.name);
    console.log(courses);
    const price = await getPrice(courses[0]);
    console.log(price);
}

getResult(); */



//9. try catch

let getUser = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: 'Adnan',
                profession: 'Web developer'
            });
        }, 2000);
    })
}


let enrolledCourse = (firstName) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['javascript', 'React', 'Node.JS'])
        }, 2000);
    }); 
}


let getPrice = (courseName) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            //resolve('course price is 4000')
            reject(new Error('Some error occured'));
        }, 2000);
    })
}


try {
    let getResult = async () => {
        const user = await getUser(1);
        console.log(user);
        const courses = await enrolledCourse(user.name);
        console.log(courses);
        await getPrice(courses[0]);
        console.log('price 4000');
    }

    getResult();
} catch(err) {
    console.log(err);
}



