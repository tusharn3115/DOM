// DOM Manipulation
// 1. What is DOM -----------------------------------------------------------
// DOM is basically Document Object Model
// Represent structure of web page (Using Tree like structure)
// Each element - node in tree 
// These nodes can be accessed, modified, and manipulated using programming languages like JavaScript


// 2. 4 Pillars of DOM-------------------------------------------------------
// (i) Selecting an element
// (ii) Changing HTML with JS
// (iii) Changing CSS with JS
// (iv) Event Listener


// (i) Selecting an element ---

// with the help or document.querySelector hm html ke element ko js mai access kr skte hai chahe with tag name, id or class 

// eg:
// var a = document.querySelector("h1"); // selecting using tag name
// document.querySelector("#h1"); // selecting using tag's id
// document.querySelector(".h1"); // selecting using tag's class
// console.log(a);

// we can also select an id by using getElementById(Yha id pass krna hai);
// same for class getElementByClassName(yah class pass krna hai);

// eg:
// document.getElementById("#bulb");
// document.getElementsByClassName(".box");


// (ii) Changing HTML ---

// with the help or document.querySelector hm html ke element ko js mai access kr skte hai chahe with tag name, id or class and we can change the data present in it by first putting document.querySelector in a variable then with the variable name put innerHTML i.e we can access the data of the selected tag and can change it(as shown below in the example)

// eg :
// var a = document.querySelector("h1");
// a.innerHTML = "Hello";


// (iii) Changing CSS ---

// with the help or document.querySelector hm html ke element ko js mai access kr skte hai chahe with tag name, id or class and we can change all the properties that we can use in css file like color, backgroundColor, font-size, height, width etc by first putting document.querySelector in a variable then with the variable name put style then the property you want to add to is followed by the value, like you entered color so style.color = "green"(as shown below in the example)

// eg:
// var a = document.querySelector("h1");
// a.style.color = "hotpink";
// a.style.backgroundColor = "grey";

// var a = document.querySelector("h1");
// a.style.color = "lightred";


// (iv) Event Listener ---

// using this property we can add any property at a particular event, ye hm use kr skte hai with the help of addeventListner("ismai event ayega ki konsa event perform hoga", "ismai ayega event perform hone pr kya ayega ya hoga")

// eg: 
// var a = document.querySelector(".h1");
// a.addEventListener("click", function(){
//     var b = document.querySelector(".h1");
//     b.innerHTML = "Click hogya bhai :O";
//     b.style.color = "lightgreen";
// });



// practice code (bulb lighting code)----------------------------------------

// var btn = document.querySelector("#btn");
// var bulb = document.querySelector("#bulb");
// var click = 0;

// btn.addEventListener("click", function(){

//     if(click == 0){
//         bulb.style.backgroundColor = "yellow";
//         click = 1;
//     }
//     else{
//         bulb.style.backgroundColor = "transparent";
//         click = 0;
//     }
// })



// selecting multiple element at the same time ------------------------------

// ye sirf first h1 ko select krega sabhi h1 ko select nhi krega
// eg:
// var h = document.querySelector("h1");
// console.log(h); 

// to select all h1 at same time we use document.querySelectorAll which selects all the h1 present in the html tag but it selects all the h1 in form of nodelist i.e i form of an array 

// eg:
// var h = document.querySelectorAll("h1");

// h.forEach(function(elem){
//     console.log(elem);
// });