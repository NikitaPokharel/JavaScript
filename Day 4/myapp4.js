// for mouse event:click 
const button = document.getElementById("clickMe");
button.addEventListener("click",function(e){
    console.log("clicked");
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);
});
//     let myfield = document.getElementById("myfield");
//     // myfield.type = "password";  //When clicked tag with id = "myfield", having  type="text" changes to type = "password".
//     if(myfield.type == "text")
//         myfield.type = "password";
//     else if(myfield.type == "password")
//         myfield.type = "text";

// });

//for mouse event:mouseover
// const container = document.getElementsByClassName("container")[0];  
// container.addEventListener("mouseover",function(e){
//     container.innerText = "I love Nepal";
//     container.style.backgroundColor ="blue";
// });

// container.addEventListener("mouseout",function(e){
//     container.innerText = "Hello Nepal";
//     container.style.backgroundColor ="brown";
// });

