let elements = document.getElementsByName("cssproperty");
let divs = document.getElementById("modify");
function set(){
    
    for(let index = 0; index < elements.length; index++){
        let cssid = elements[index].getAttribute("id");
        let cssvalue = elements[index].value;
        divs.style[cssid] = cssvalue;
    }
}
document.getElementById("set").addEventListener("click", set);  