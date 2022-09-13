//setTimeout
// function add(){
//     console.log("add function");
//     setTimeout(function(){
//         console.log("From settimeout"); 
//     },2000);//This results after 2 sec
//     }

// function add(a,b,callback){ //add function call passes control here.
// console.log("add function");
// setTimeout(function(){
//     callback(a+b); // Control is passed to result function and this a+b = data
// },2000);
// }

// function result(data) {
//     console.log("result :" + data);
// }

// console.log("Hello 1");
// console.log("Hello 2");
// add();
// add(1, 2, result); //result is a function
// console.log("Hello 3");

//Promise
function doSomething(){
    return new Promise((resolve,reject) =>{
    // let error = false;
    let error = true;

    if (!error) {
        resolve("Sucessfully done");
    }
    else{
        reject("Error  while doing some task");
    }
});
}

// doSomething()
// .then((response)=>console.log(response));

doSomething()
.then((response)=>console.log(response))
.catch((err)=>console.log(err));


