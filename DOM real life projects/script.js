// add remove friend 

// var istatus = document.querySelector("h5");
// var btn = document.querySelector("#add");
// var click = 0;


// btn.addEventListener("click", function(){
//     if(click == 0){
//         istatus.innerHTML = "Friends";
//         istatus.style.color = "green";
//         btn.innerHTML = "Remove Friend";
//         btn.style.backgroundColor = "grey";
//         click = 1;
//     }
//     else{
//         istatus.innerHTML = "Stranger";
//         istatus.style.color = "red";
//         btn.innerHTML = "Add Friend";
//         btn.style.backgroundColor = "cadetblue";
//         click = 0;
//     }
// })



// double tap like animation
// var con = document.querySelector("#container");
// var like = document.querySelector("i");

// con.addEventListener("dblclick", function(){
//     like.style.transform = "translate(-50%, -50%) scale(1)";
//     like.style.opacity = 0.8;

//     setTimeout(function(){
//         like.style.opacity = 0;
//     },800);
//     setTimeout(function(){
//         like.style.transform = "translate(-50%, -50%) scale(0)";
//     },1000);
// })



// custom cursor
var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");

main.addEventListener("mousemove", function(details){
    cursor.style.left = details.x+"px";
    cursor.style.top = details.y+"px";
});