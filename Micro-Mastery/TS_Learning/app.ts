
//Generics
// Generic functions
// Generic interfaces
// Generic classes

// ? generics 

// ? generics fucntions 
// function abcs(a:any){

// }

//  we cannot use any in ts please use generics
//  we can also use this also 

// function abcs(a:string|number|boolean){
// } // but this is not effieicinet way 

// so  we can use generics

function abcs<T>(a:T){
    console.log(a);
    console.log(typeof a);
    
    
}
//  T --> Template classes /variable not necceary to use T 


// abcs<string>("hello")
// abcs<number>(23)
// // abcs(23)
// abcs("hello")


// ? Generic interfaces

interface Users2<T>{
    name:string;
    age:number;
    key:T;
}

// let u1:Users<string> = {name:"kushwaha" , age:12 , key:"hello"};
// let u2:Users<number> = {name:"kushwaha" , age:12 , key:23};
// console.log(u1,u2);
//  ai is mila hume 

// function logs(obj:Users2<string>){
//     console.log(obj);
// }
// logs({name:"kushwaha" , age:12 , key:"hello"});

function logs(obj:Users2<number>){
    console.log(obj);
}
// logs({name:"kushwaha" , age:12 , key:12});



//*  Generic Classes 

// class BottleMaker<T>{
//     constructor(public name:T){
// }
// }

// let b1 = new BottleMaker<string>("hello");
// let b2 = new BottleMaker<number>(12);
// console.log(b1,b2);



// catch  more about generics

function acbd<T>(a:T ,b:T):T{
    // return a;
    // return b;
    // return "Heyy";  // --> error 
    
    //  to resolve 
    // method 1
    // return "Heyy" as T;  
    // method 2 
    // return  <T>"Heyy" ;   
    
    // ?  intellience tavi kam karta hai jab aoane check lagta hai jese ki 
    if (typeof a === "number") {
        a.toFixed() // you will get to see all suggestions for numbers 
    }
    return  <T>"Heyy" ;   


}
//  " HEllo " in ts is called as string literal 
// aur yaha par T is generic 
// acbd<string>("hello" , "Gello")
// acbd(true, false)// jo hum pahale likhte hai yuska pure ka data type vo hhii jo jat a hai 

// MODULES 
//  Exporting and import using named export 
//  Exporting and import using default export



// Type Assertion
// Type casting
// Non-null assertion operator

//  * Type  Assertion 

let bns : any  = 12 ;

// (bns as string).concat()
// <number>bns.toFixed()

// let kht :string = "hello"
// (kht as number).toFixed() // error dedega

//  Type casting
// let stre= "hello"
// let num = Number(stre)
// console.log(num); // NaN
let num = Number("223452")
// console.log(num);

//? Non-null assertion operator

let v :null | number|string ;

// v = "2134";
// v = 2134;
// v! // granted to not be null
// v!.toFixed()



// Type Guards and TypeScript Utility Types
// Partial, Required, Readonly

// Type Guards 
// Using typeof and instanceof

//  type narrowing 
//  type of opearteor ka use karke 
function abcd234(arg: number | string | any) {
    if (typeof arg === "number") {
        console.log("number");
        
    } else if (typeof arg === "string") {
        arg.toLocaleUpperCase()
        console.log("string");
    } else{
        throw new Error("unknown type");
    }
}
// abcd234(false);

//  instance narrowing 
class Remote{
    switchOffTv(){
        console.log("off");
        
    }
}


class Car {
    switchOffCar(){
        console.log("off car ");
        
    }
}

const tv = new Remote();
const car = new Car();

function switchOnDevice(device: Remote | Car){
    if (device instanceof Remote){
        device.switchOffTv;
    }else{
        device.switchOffCar();
    }
}
switchOnDevice(car);


