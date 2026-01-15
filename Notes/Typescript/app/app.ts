// function add(a:number , b:number):number{
// return a +b ;

// }
// console.log(add(3,5));

interface User{
    profile:number,
    name:string,
    age?:number,
}


interface Admin extends User {
    admin:boolean
}

interface Admin {
    isAdmin:boolean
}

function user(user:Admin):void{
    console.log(user.profile);
    console.log(user.name);
    console.log(user.age);
    console.log(user.admin);
}

// user({profile:12 , name:"siddhant",age:23,admin:true,isAdmin:true});



//  type ali.. custom data type
let x :number = 1;
type akshay = number |string |boolean|User; 

let y:akshay ={
   name:"string",
   age:30,
   profile:34
};
