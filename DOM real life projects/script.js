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
// var main = document.querySelector("#main");
// var cursor = document.querySelector("#cursor");

// main.addEventListener("mousemove", function(details){
//     cursor.style.left = details.x+"px";
//     cursor.style.top = details.y+"px";
// });



// multiple image hovering animation 
// var elem = document.querySelectorAll("#elem");

// elem.forEach(function(val){
//     val.addEventListener("mouseenter", function(){
//         val.childNodes[3].style.opacity = 1;
//     })

//     val.addEventListener("mouseleave", function(){
//         val.childNodes[3].style.opacity = 0;
//     })


//     val.addEventListener("mousemove", function(details){
//         val.childNodes[3].style.left = details.x+"px";
//     })
// })




// insta story feature
var stories = document.querySelector("#stories");
var arr = [
    {
        dp: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        story: "https://images.unsplash.com/photo-1669494920898-14cbf6802f1c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
        dp: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        
        story: "https://images.unsplash.com/photo-1662452212475-025f1bd71510?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
        dp: "https://images.unsplash.com/photo-1526510747491-58f928ec870f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        
        story: "https://images.unsplash.com/photo-1678565544019-572cc0752d3a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    
    {
        dp: "https://plus.unsplash.com/premium_photo-1668896122605-debd3fed81a4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        
        story: "https://images.unsplash.com/photo-1697326021390-17a4906ffc7f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

var clutter = "";
arr.forEach(function(elem,indx){
    clutter += `<div class="story">
                <img id="${indx}" src="${elem.dp}" alt="">
                </div>`;
});

stories.innerHTML = clutter;

stories.addEventListener("click", function(details){
    document.querySelector("#fullscreen").style.display = "block";
    document.querySelector("#fullscreen").style.backgroundImage = `url(${arr[details.target.id].story})`;

    setTimeout(function(){
        document.querySelector("#fullscreen").style.display = "none";
    },2000);
})
