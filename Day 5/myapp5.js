//keyboard event
//way 1
// const Firstname = document.getElementById("myField");
// Firstname.addEventListener("keypress",function(e){
//     console.log("Key is pressed.");
//     console.log(e);
//     console.log(e.key);
// });

//way 2
function keypressed(){  //function  will be executed when onkeyup is executed.
    console.log("Key has been pressed");
}

function Showbox(){
    alert("Box has appeared");
}

//way 3
// elem = document.getElementById("myName");
// elem.onclick = function(){
//     console.log("Mouse is clicked");
// }

//window event
// window.onload = function(){
//     console.log("Window is loaded");
// }

// window.onresize = function(){
//     console.log("Window is resized");
// }

// window.onscroll = function(){
//     console.log("Window is scrolled");
// }