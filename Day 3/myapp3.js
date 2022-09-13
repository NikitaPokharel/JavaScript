//DOM selection

// var h1 = document.getElementsByTagName("h1")[0];
// console.log(h1);

// var sel = document.getElementById("heading");
// console.log(sel);
// console.log(sel.innerText);

// var las = document.getElementsByClassName("myclass");
// console.log(las);

// var query = document.querySelector(".myclass"); //only first iteam is selected 
// console.log(query);
// console.log(query.id);
// console.log(query.className);
// console.log(query.innerText);
// console.log(query.innerHTML);


// var query = document.querySelectorAll(".myclass"); // all iteams are selected
// console.log(query);

//DOM Manipulation
var bold = document.getElementById("cool");
console.log(bold);
bold.style.color = "green";
bold.style.backgroundColor = "Orange";
bold.setAttribute("style","color:red; text-transform:capitalize;");
bold.removeAttribute("style");

bold.innerText ="My life my rules"; //change text inside of bold tag (from This is a bold tag to My life my rules)
bold.innerHTML = "New <i> A quick brown fox jumps over the lazy dog </i>"; 
//innerHtml is used when we have to use  html tags in a sentence.
 
//Remove tags
bold.remove();