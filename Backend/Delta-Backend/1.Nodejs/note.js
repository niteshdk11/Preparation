
//  !  Nodejs -
// ? Javascript run time environment
// * It is used for server side programming .
// * Nodejs is not a langugage , library or framework 

//  ? Nodejs 
// -Process : This object provides information  about , and control over ,the current Node.js process
//  process.argv : retruns an array containing the command line arguments passed when the Node.js process was launched 

// ? Process argv 
// console.log(process.argv);

// for( let i =  2 ; i< process.argv.length ; i++){

//     console.log(process.argv[i]);
// }


//  * require and module.exports 
// agar humne kisi file me module.export use nahi kiya hai but humner yus file ko require kiya hai to hume yak empty object return milta hai 

const  someval = require('./math')
console.log(someval)
// let res = someval.sum(200,3000);
// console.log(res)

// directory ke yander chote chote file sbana kar kar ayak file banan hai name as index.js , only then impprort all the files in that  file in index.js , and the use that folder name as module name which you wnat ro require 

// NPM : Node Package Manager -- but yiska such me ye nam nahi hai 
// it is a package manager for Nodejs , jese ki android ke liye playstore hai 
//  library of packages ,  

//  ? Intalling Packages 
// * node_modules The node_modules folder contains every installed dependency for your project.
// *  package-lock.json  It records the exact version of every installed dependency, including its sub-dependencies and their versions.

//?  package.json
//  ? The package. json file contains descriptive and functional metadata about a project, such as a name,version, and dependencies

// ? Local VIS Global
// * npm install -g <- package name ->
//  * npm link <- package name ->

// require VIS import
// -import { sum } from "./math.js"
// We cant selectively load only the pieces we need with require but with import. we can selectively load only
// the pieces we need, which can save memory.
// loading is synchronous for 'require' but can be a synchronous for 'import'.


//  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
