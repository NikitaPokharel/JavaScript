let container = document.getElementById("container");
const inputfield = document.getElementById("screenfield");
const resultfield = document.getElementById("resultfield");
var num1, num2;

function add() {
    if(num1 != null){
        num2 = inputfield.value;
        inputfield.value = "";
        inputfield.focus();
        console.log(num2); 
        
    }
    else{
        num1 = inputfield.value;
        inputfield.value = "";
        inputfield.focus();
        console.log(num1); 
    }  
    console.log("num1 :" + num1 + " num2 : " + num2);
}
function showResult(){
    if(num1 != undefined && num2 != undefined){
        let result = parseInt(num1) +parseInt(num2);
        // console.log(`sum : ${result}`);
        resultfield.value = num1 + "+" + num2 + "=" + result ;
    }
    else {
        alert("Enter number to add");
    }
}


for ( let i = 0; i <= 9; i++){
    let button = document.createElement("button"); //<button></button>
    button.innerText = i;
    button.value = i;
    button.addEventListener("click",setnumber);
    container.appendChild(button);
}

function setnumber(e) {
    // inputfield.value = e.target.value; // this only gives only one number
    inputfield.value += e.target.value; //this appends the new number
    // console.log(e.target);
    // console.log(e.target.value);
}
