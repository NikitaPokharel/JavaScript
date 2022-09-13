
// var num = 10;
//way  1
// function printer(number){
// for (var i=0; i<=number; i++){
//     console.log("i : " + i);
// }
// }
// printer(num);
// printer(50);

//way 2
// var myprinter =function printer(number){
//     for (var i=0; i<=number; i++){
//         console.log("i : " + i);
//     }
//     }
// myprinter(num);

//arrow funct
// const displayHello = ()=> {
//     console.log("Hello World");
// }
// displayHello();

// const displayHello = (name)=> {
//     console.log("Hello World " + name);
// }

// displayHello("ram");
// displayHello("sita");

//array 
// var marksList = [2,3,4,5];
// console.log(marksList);
// console.log(marksList.length);

// marksList.push(6); //add element to array at last or append element
// console.log(marksList); 

// marksList.pop(); // remove element from last in an array
// console.log(marksList);

// marksList.shift(); //remove  element from first in an array
// console.log(marksList);

// marksList.unshift(1); // add element from first in an array
// console.log(marksList);

// var marksList = [2,3.0, 35893.666,"Nikita"];
// console.log(marksList);
// console.log(marksList[0]);

// marksList[0]= 100;
// console.log(marksList[0]);


//object
// var marksList2 = new Array(2,3,4,5); //Array is a existing class
// console.log(marksList2);
// console.log(marksList2.length);

// class student{
//     constructor(name){
//         this.name = name;
//         console.log("You have been called from constructor.");
//     }
//     printStudentName(){
//         console.log("student name is : " + this.name );
//     }
//  }

// var std1 = new student("Nikita Pokharel");
// std1.printStudentName();

// var std2 = new student("Shyam Pokharel");
// std2.printStudentName();

//making object without class
var student = {
    name : "Nikita",
    age : 21,
    hobbies :["reading","listening to music"],
    printStudentName :function(){
        console.log(this.name, this.age);
    }
};

// console.log(student);
// console.log(student.name,student.age);
console.log(student.hobbies);
student.printStudentName();
