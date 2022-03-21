/*
API(Application programming Interface) and communication
=======================================================
specialization and communication
Medium of communication
You - Me (knowledge-javascript)
communication (Between 2 Application) -API (Application programming Interface)
Data Exchange
    1) XML (xtensible Markup Language)
    2) JSON (Javascript Object Notation)
        - Looks like object, string
        - really is String

*/

//Regular Object
const me = {
    name: 'samin',
    age: 28
};


//JSON Object
const meAsJSON = JSON.stringify(me);



/*

Procedure of communication
=======================================================
CRUD and Request Feature
(Structuring - REST API)

(3rd party application server) - Book list

facebook.com/samin
path- /samin
API Development - Server side (javascript/python/java)

Full structure:
=======================================================
R-READ      GET        /books
R-READ      GET        /books/:id
C-CREATE    POST       /books
U-UPDATE    PUT/PATCH  /books/:id
D-DELETE    DELETE     /books/:id





How to communicate
=======================================================
XMLHTTPRequest(old)
FETCH(MORE MODERN)
Axios

//SENDING REQUEST
//RECEIVING RESPONSE
//Requires time
//Asynchronous programming
*/


/* const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState && this.status == 200) {
        document.getElementById("demo").innerHTML = xhttp.responseText;
    }
};

xhttp.open("GET", "www.facebook.com", true);
xhttp.send(); */

fetch('https://covid-api.mmediagroup.fr/v1/cases')
    .then(response => response.json())
    .then(data => console.log(data));



/*
How to Deal with the data
=======================================================
Asynchronous programming pattern
callback
promise
Async wait







*/