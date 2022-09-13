// var myFunction = function abc(){
//     console.log("ABC")
// }
// myFunction();

// function printResult(value){
//     console.log(value);
// }

// function add (a,b,fxn){
//     let sum = a+b;
//     fxn(sum);
// }

// add(4,5,printResult); //function passed as argument

// function outer(c,d){
//     console.log(c,d);
//     function inner(a,b){
//         console.log("inner a:"+ a +" b:" +b);
//     }
//     console.log(c,d);
//     return inner;

// }

// outer(6,7)(1,2);

// function student(){
//     this.name = "Nikita";
// }
// console.log(typeof student); //function

// var s = new student();
// console.log(typeof s); //object
// console.log(s.name);


// function add(a,b){
//     return a+b;
// }
// add.message ="Hello";
// console.log(add.message);

//Higher order function
//function takes another function  as an argument
//or
//function takes another function as an argument and returns function return.

//way 1 
// function doSquare(arr){
//     let result = [];

//     for (let i=0; i<arr.length;i++){
//         result.push(arr[i]*arr[i]);
//     }
//     return result;
// }

// function doSquareroot(arr){
//     let result = [];

//     for (let i=0; i<arr.length;i++){
//         result.push(Math.sqrt(arr[i]));
//     }
//     return result;
// }

// function doCube(arr){
//     let result = [];

//     for (let i=0; i<arr.length;i++){
//         result.push(arr[i]*arr[i]*arr[i]);
//     }
//     return result;
// }

// const number =[1,2,3,4];
// console.log(doSquare(number));

// console.log(doCube(number));

//way 2
// function doSquare(data){
//     return data*data;
// }
// function doCube(data){
//     return data*data*data;
// }
// function doSquareRoot(data){
//     return Math.sqrt(data);
// }


// function calculate(arr,fxn){
//     let result = [];

//     for (let i=0; i<arr.length;i++){
//         result.push(fxn(arr[i]));
//     }
//     return result;
// }

// console.log(calculate([1,5.89,3,4],doSquare));
// console.log(calculate([1,2,3,4],doCube));
// console.log(calculate([1,2,3,4],doSquareRoot));


//exploring higher order functions in javascript

//foreach
// const fruits =["Apple", "mango","strawberry"];
// fruits.forEach(function(value,index,array){ //the three  parameters area builtin for the function
//     console.log(index +" "+ value +" "+ array);
// });

// const fruits =["Apple", "mango","strawberry"];
// fruits.forEach((value,index,array)=>{
//     console.log(index +" "+ value +" "+ array);
// });

//map()
// const colors =["Red", "Orange" ,"Green"]; //map is inbuilt higher order function
// const mappedList = colors.map(function(value){ // here value is returned and map changes the values to array which is placed in mappedlist.
//     return `<li>${value} </li>`;
// });
// console.log(mappedList);


// const numbers = [2,3,4];
// const doubledValue = numbers.map(function(value,index,array){
//     return value*2;
// }); 
// console.log(doubledValue);  


// const employee = [
//     {
//         name:"ABC",
//         post :"Developer"
//     },
//     {
//         name:"DEF",
//         post:"Tester"
//     }
// ];

// employee.map(function(value,index,array){ 
//     console.log(value);
//     console.log(value.post);
// });

// const mappedData = employee.map(function(value,index,array){ 
//     return "I have a job in " + value.post; 
// });

// console.log(mappedData);

//filter()
// const ages =[24,56,8,45,15];
// const canVote = ages.filter(function(value,index,array){
//     if(value >=18){
//         return true;
//     }

//     else{
//         return false;
//     }
// });

// console.log(canVote);

//using ternary operator
// const ages =[24,56,8,45,15];
// const canVote = ages.filter(function(value,index,array){
//     return value >=18 ? true : false
// });

// console.log(canVote);


// const employee = [
//     {
//         name:"ABC",
//         age :24,
//         post :"Frontend"
//     },
//     {
//         name:"DEF",
//         age : 12,
//         post :"Backend"
//     },
//     {
//         name:"GHI",
//         age : 56,
//         post :"Fullstack"
//     }

// ];

// const filteredEmployeeList= employee.filter(function(value){
//     if(value.age >=18 && value.post ==="Frontend"){
//         return true;
//     }
//     else{
//         return false;
//     }
// });

// console.log(filteredEmployeeList);

// const marks = [10,15,19,30,20];

// const sum = marks.reduce(function(previous,current,index,array){
//     console.log("prev :" + previous + " current :" +current);
//     return previous+current;
    
// });
// console.log(sum);
// console.log(sum/marks.length); //mean

// const employee = [
//     {
//         name:"ABC",
//         age :24,
//         post :"Frontend",
//         salary: 10000
//     },
//     {
//         name:"DEF",
//         age : 12,
//         post :"Backend",
//         salary : 20000
//     },
//     {
//         name:"GHI",
//         age : 56,
//         post :"Fullstack",
//         salary : 10000
//     }

// ];

// const totalSalary = employee.reduce(function(previous,current,index,array){
//     // return  previous.salary + current.salary; //this is incorrect because previous.salary + current.salary returns a single integer value i.e. previous = 30000.Now previous.salary doesnot make sense because 30000.salary doesnot make sense.
//     return {salary: previous.salary + current.salary};// This is correct. Here we return object so previous = {salary :30000}.Next time {salary: 30000+10000) is returned.Here previous.salary makes sense.

// });
// console.log(totalSalary);

//sort
// const fruits =["Apple","Strawberry","Mango","Orange "];
// console.log(fruits.sort());

// const numbers = [1,1000,56,34];
// console.log(numbers.sort()); //not correct as sorting is performed as per ASCII value.

// const sortedNumber = numbers.sort(function(a,b){
//     if (a>b){  //ascending order
//         return 1;
//     }
//     else{
//         return -1;
//     }
// });

// console.log(sortedNumber);


// const sortedNumber = numbers.sort(function(a,b){
//     if (a<b){  //descending order
//         return 1;
//     }
//     else{
//         return -1;
//     }
// });

// console.log(sortedNumber);


//milena 2 higer order function use garda tara garna milcha mero namileko
const employee = [
    {
        name:"ABC",
        age :24,
        post :"Frontend",
        salary: 10000
    },
    {
        name:"DEF",
        age : 12,
        post :"Frontend",
        salary : 20000
    },
    {
        name:"GHI",
        age : 56,
        post :"Frontend",
        salary : 10000
    }

];

const result = employee.sort(function(a,b){
        if (a.age<b.age){
            return 1;
        }
        else{
            return -1;
        }
})
.filter(function(value){
    value.salary > 10000;
});


console.log(result);



