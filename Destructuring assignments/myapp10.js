//Destructuring object
// const user = {
//     id : 1,
//     name : {
//         first :"Nikita",
//         last:"Pokharel"
//     },
//     message : "Hello"  // if message  exists here this will be executed, otherwise default value of message in line 10  message = "Namaste will be executed"
// }

// const id = user.id ;
// const name = user.name;

// const {id,name} = user;  //alternative way of executing line 11 and 12
// console.log(id,name);


// const {id,name,message = "Namaste"} = user; 
// console.log(id, name, message);

// const {id:userID} = user; //Giving another name to id 
// console.log(userID);


// const {name} = user;
// console.log(name);
// const {name :{first}} = user;
// console.log(first);

// const user = {
//     id : 1,
//     name : {
//         last:"Pokharel"
//     },
//     message : "Hello"
// }
// const {name :{first="Ram"}}= user
// console.log(first);


//Destructuring array

// const date = ["2022","01","01"];

// const year = date[0];
// const month = date [1];
// const day = date[2];

// console.log(year, month , day);

// const[year, month, day, tithi="ekadashi"] = date; //line 51 is same as line 45, 46, 47
// console.log(year, month , day, tithi);


//Spread operators
//Array
// const planets =["Venus","Mercury"];
// const shadowPlanets = ["Rahu","Ketu"];

// const allPlanets =[...planets,...shadowPlanets];
// console.log(allPlanets);

// const allPlanets =[...planets,"Saturn",...shadowPlanets,"Jupiter"];
// console.log(allPlanets);

// const [a,...b] =[6,2,3,4,5];
// console.log(a,b);

//Object
const user = {
        id : 1,
        name :"Nikita Pokharel"
}

// const updateUser = {...user};
// console.log(updateUser);

const updateUser = {...user, address:"Kathmandu", hobby:"music"};
console.log(updateUser);

function add(a,...rest){
    console.log(a);
    console.log(rest);
    var sum = a;
    for(i=0; i<rest.length; i++){
        sum+=rest[i];
    }
    return sum;
}

 console.log(add(1,2,3,4));