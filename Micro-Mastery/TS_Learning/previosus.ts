// Basic Types
// •Primitive types (number,
// string,
// boolean)
// •Arrays
// •Tuples
// •Enums
// •Any, Unknbwn,
// Void,
// Null,
// Undefined,
// Never

// let a =12;
// a=""

// *  array
// ? let arr = [1,2,3, {name:"kushwaha"}]
//? let arr: number[] = [1, 2, 3, 4 , "hello"]

// * tuple

// let arr: [number, string] = [1, "hello"];
let arr: [number, string] = [1, "hello"];

// ? Enums enumerations

enum UserRole {
    ADMIN = 1,
    READ_ONLY = 2,
    AUTHOR = 3
}

// predefined  values likhne ke liye pahala  se data set 


// ? TYpe define karna 

//  ? Any , type ke ssat typescript off ho jata hai
// let a : number ; // --> here  type isnumber
//  let a ; // --> here  type is any

let a ;
a= 12 
a = "hello"

// if(typeof a === 'string'){
//     a.// all string method 
// }

//  ? Unknown 


//  unknown me variable me number sstring kuch vhi define to kar sakte ho but , jab yus variable ko use karna hai to pahale yuska type check karna padata hai 
let b: unknown;
b = 12;
b = "hello";

// if(typeof b === 'string'){
//     b.endsWith("l")// all string method 
// }

//  ? Void
// agar function kuch return nahi karra hai to function ko void batayo 

// function abcd() : void{
//     console.log("hello");
// }

// function abcd() : number{
//     console.log("hello");
//     return 1
// }

// function abcd() : string{
//     console.log("hello");
//     return "hello";
// }

//  ? NUll
// let bs :null ;
// bs = 12; // error dedega so we can use unions 
// let bs :string | null = null;
// bs = "hello";
// bs =34;

// ? undefined 

// ?Never ; yese kcuh code jo age ka code nahi chalane dege ya infinite loops to hum yunka retrun type bolte hai never 

// function abcd2() : never{
//     while(true){
//         console.log("hello");
//     }
// }
// abcd2()
// console.log(23)

// +  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Type Inference
// •Understanding type inference
// •Type annotations

// ? Type Inference
//  like app jab varible decelare  aur initilize karte ho to type script ko pata chal jata hai kii yus varible ka type kya hai 

//  ? Type annotations
// let a32 : number | string ;
// a32 = "hello";
// a32 = 12;

//  ? function ke liye 
// function abcd23( a : number | string  , bc:boolean | number):number {
//     return 1
// }

//  +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Interfaces and Type Aliases

// •Defining interfaces
// •Extending interfaces
// •Using interfaces to define object shapes , object ka format 

// •Type aliases
// •Intersection types

// ?  Interfaces and Type Aliases
// •Defining interfaces

// function a2z(a:number , b:string){
// // a. // you will see method releated with numberss 
// // b. // you will see method releated with string
// }

// function userdata(obj){
//     obj. // abb yaha to pata nahi hai na obje ke yander kya kya hoga so yiske liye hum uses karefge Interface 
// }

interface User {
    name:string ,
    age: number ,
    password:string ,
    // for making optional we can use ? 
    gender?:string
}

function userdata(obj:User){    
    obj
}
// ?  default value 
// function userdata(obj:User ={name:"kushwaha" , age:12 , password:"123"}){    
//     obj
// }
// userdata({name:"kushwaha" , age:12 , password:"123"});


//? Extending interfaces
interface Admin extends User {
    admin:boolean ;
}
function userdata2(obj:Admin){    
    
}

// ?  merging same Interface 

interface ads {
    name:string;
}
interface ads {
    age:number
}
//  so now both the ads are merges not replaced by one another
// function afs(obj : ads){    
//        obj. // you can access name as well as age 
// }


// •Type aliases
// •Intersection types

//  to create a coustom type type aliases is used 

// let k: number | string | boolean ;
//  insstead 

// type val = number | string | boolean ;
// let  k : val ;

//  union types

type Users ={
    name:string ,
    age:number
}

type Admin23 = Users & {
    admin:boolean
} 
// intersection types
// type val = number | string | boolean ; // -> here you are using | this is called as intersetion lly to or gate 

//  here we are confused like interface and alias are 80% similarr ,and we can use them in therri place of each other

//  but there is the key difference in inteface and aliases 

// type zkj = number | string | boolean ;
// type zkj = number | string | boolean ;
// //  now type will give error 

// // but in  interface they get merge 
// interface Users2 {
//     name:string
// }
// interface Users2 {
//     age:number
// }

// 2  difference 
//  type ka kam type create karna ,string number ;
//    interface is ued to crate the format or shape of the obejct 

//  ++++++++++++++++++++++++++++++++++



// Classes and Objects

// •Class definition
// •Constructors
// •Access modifiers (public,
// protected,
// private)

// •Readonly properties

// •Optional properties
// •Parameter properties
// •Getters and setters
// •Static members
// •Abstract classes and methods


// •Constructors
// method -1 

// class User {
//      name:string
//     age: number
//     constructor(  name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
// }


interface User2 {
    name:string
    age:number
}
class User {
    constructor(public name: string, public age: number,public detls:User2) {
    } 
}
let user1 = new User("John", 30,{name:"hello", age:23});
// console.log(user1.detls);
// let user2 = new User("Nitesh", 19);
// console.log(user2);


//  ? this 

// ! M -1
// class Dog{
// public name:string ;
//     constructor(name:string){
//        this.name= name ;
//     }
// }
// M-2
// class Dog{
//     constructor(public name:string ){
//     }
// }

// let dog = new Dog("hello");
// console.log(dog.name);

// ?  •Access modifiers (public,
// ?  protected,
// ?  private)


// ? public 
//  if your class is public you can access it from anywhere , in class , out side the class in classs  methods and also in in inheritance class 
// class Dog{
//     public name:string ;
//     constructor(name:string ){
//           this.name= name ;
//     }
// }

// class Cat extends Dog{
//     constructor(name:string){
//         super(name);
//     }
// }

// let dog = new Dog("hello");
// console.log(dog.name);

// let cat = new Cat("kitty");
// console.log(cat.name);

// ? private 
//  ts me error  dega but but js me vo convert hoga execute hoga  
//  the attributes that are defined ussisng this  private keyword , we can aceest that varible in the class but not outside the class or in class instace or classs childs 
// class Dog{
//     private name:string ;
//     constructor(name:string ){
//           this.name= name ;
//     }
// }

// class Cat extends Dog{
//     constructor(name:string){
//         super(name);
//     }
// }

// let dog = new Dog("hello");
// console.log(dog.name);

// let cat = new Cat("kitty");
// console.log(cat.name);

// Property 'name' is private and only accessible within class 'Dog'.
// 107 console.log(dog.name);


// ? proctected , yisme class me hii access kar sakte ho , aur yiske sub claeed me vhi access kar sakte ho but , bhar use nahi kar sakte with any insstance of parent class or instance of inhertied class 

// Readonly  properties
// agar appko class me agar koi attribute me value ko change hone  nahi dena hai to app readonly uses kar ssakte ho 

class Rakesh {
    constructor(public readonly name: string,) {
    }
    //  1. access modifier
    //  2. readonly

    //  changeName(){
    //     this.name = "kushwaha";
    //  }
    // constructor( readonly public  name: string,) {
    // } // gives error 
    //  tum change kar sakte ho tum ts error dega and js run kar dega 
}

let r1 = new Rakesh("hello");
// r1.changeName();
// console.log(r1.name);


//?  •Optional properties

// class Tree{
// constructor(public name?:string ,public gender?:string){
// }

// //  ? by using ? you can do optional properties 
// }
// let t1 = new Tree();
// let t2 = new Tree( , "male");
// console.log(t2);

// class Tree {
//     constructor({ name, gender }: { name?: string; gender?: string } = {}) {
//       this.name = name;
//       this.gender = gender;
//     }
  
//     public name?: string;
//     public gender?: string;
//   }
  
//   let t1 = new Tree();
//   let t2 = new Tree({ gender: "male" }); // Only passing gender
//   console.log(t2);
  
//  

// •Getters and setters
// •Static members
// private,
// protected)
// •Abstract classes and methods

// ? •Parameter properties
// class uCK {
//     constructor(public name: string, public age: number) {
//     }
//     // public name: string, public age: number ye chiz ko hum parameter properties kahte hai , qkii hum yusko acces modoier ko paramete me hii defince karre with name and also with dtype 
// }


//?  •Getters and setters

// getter yak yaise method vo varable ko access karke dedega 
//  setter yaise method vo variable ko change kar dega 

class UK{
    constructor(public _name:string , public age:number){
        //  _name : it is specialy that it means it is getter 
    }

    
    get name(){
        return this._name;
    }
//  agar apane setter nahi banaya hai but insstace value ko change karr hai to error dega ki the property is readonly property 

    set name(name:string){
        this._name = name;
    }
}

let uk1 = new UK("hello",12);
// console.log(uk1.name); 
// uk1.name="kushwaha";
// console.log(uk1.name);



//  static members

// class Sherry{
//     static version:string ="1.0.0";
//     constructor ( public versionins:string){
//         // Sherry.version=this.version;
//         this.versionins=Sherry.version;
//     }
// }
// let s1 = new Sherry("1.0.1");
// console.log(s1.versionins);



// •Abstract classes and methods
class Payment{
    constructor(protected amount:number, protected accountNo:number){     
    }
    isPaymentValid(){

        if(this.amount >0 && this.accountNo >0){
            return this.amount >0 ;
        }
    }
}
//  abstract class is essential  for creating clases , that is like the abstract  class has the base attributres and method , the abstract classes 
//  abstact class sse kavi hum insstance nahi banate hai 




//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Functions
// Function types
// Optional and default parameters
// Rest parameters
// Overloads

// function abcd( name:string , callback:function){} // un cannot usse function here so here function types comes in 

// ? function types 
function abcd( name:string , cb:(a:string)=>void){
    cb("heello");
}
// abcd("hellosse", (val)=>{
    //     console.log(val);});
    // abcd("hellosse", (val:string)=>{
        //     console.log(val);});
        // abcd("hellosse", function (val:string){
            //     console.log(val);
            // });
            
            // Optional and default parameters

            // function abcd2( name:string , age:number, gender:string  ){}
            // abcd2("nitessh", 12); // will give error her if gneder is not passed 
            
            // ?  Optional // by using ?
            function abcd2( name:string , age:number, gender?:string  ){}
            // abcd2("nitessh", 12); 
            
            // ? default parameters
            // function abcd3( name:string , age:number, gender:string = "male"  ){}
            // abcd3("nitessh", 12);
            
            
            //  ? default parameters and optional
            // function abcd3( name:string , age:number, gender?:string = "male"  ){}
            // abcd3("nitessh", 12, "female"); // you cannot do this like using deafult parameter as well as optional parameter at  same time
            
            
// Rest parameters

// ? Rest parameters
// function abcd4( ...nums:number[]){}    
function abcd4( ...name:string[]){}    


// Overloads
// ts signature
function abcd(a: string): void;
function abcd(a: string, b: number): void;

// Implementation
function abcd(a: any, b?: any): void {
    if (typeof a === "string" && b === undefined) {
        console.log("hey");
    } else if (typeof a === "string" && typeof b === "number") {
        console.log("hey with number:", b);
    } else {
        throw new Error("something is wrong");
    }
}

// Example usages
abcd("hey"); // Logs: hey
abcd("hey", 123); // Logs: hey with number: 123
abcd("hey", "test"); // Throws error
