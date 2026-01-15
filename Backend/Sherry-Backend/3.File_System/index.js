
// 46  // File System 

//  coding with fs module 

// To use the callback and sync APIs:
// cjs 
// const fs = require('node:fs');

// ? esm 
import * as fs from 'fs';

// fs module is used to deal with files and folders.

// ? Files
//  write files 
//  read file 
//  append file 
//  rename file
//  delete file 

//  ? Folders 
//   creating folder 
//   reading folder
//   delete folder

// ?+ +++++++++++++++++++++++++++++++++++++++++++++++++++++


//  ? write files 

// fs.writeFile('test.txt', 'hello world', (err) => {
//      if(err) console.log(err) ;
//      else console.log('file created');
//     })
    
// ./ = current directory
//  / = root directory
//  direct name = current directory

    // fs.writeFile('./test2.txt', 'hello world',()=>{
        // }) // this will also work if you dont want to handle error and any reponse mesage , but callabck is neccessary to pass
        
        // ?+ +++++++++++++++++++++++++++++++++++++++++++++++++++++

// ?  read files 

// fs.readFile('./test.txt'  ,"utf-8" , (err, data) => {
//     if (err) console.log(err);
//     // else console.log(data.toString());
//     else console.log(data);
// });
{/* <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>  hello wrold is written in hexadecimal , you can convert it to string by using toString()  [data.toString()]*/}
//  or you can pass in options as utf-8 after writing the file name that youwant to read 

// ? append file 
// existing file me kuch aur data add karna

// fs.appendFile('./test.txt', '  --- hello Nitesh', (err) => {
//     if (err) console.log(err);
//     else console.log('file updated');
// })
// agar file exist nahi karti hogi to vo create kar deta hai 


//  ? rename file 

// fs.rename('./test.txt', './test1.txt', (err) => {
//     if (err) console.log(err);
//     else console.log('file renamed');
// }) // * agar file exist nahi karti hai to vo error  deta hai

//  ? delte file , there is no .delete file method in nodejs there is method called unlink 

// fs.unlink('test.txt',(err)=>{
//     if(err) console.log(err);
//     else console.log('file deleted');
// }) // * agar file exist nahi karti hai to vo error  deta hai


// ?+ +++++++++++++++++++++++++++++++++++++++++++++++++++++

//  ? Folders

// ?  creating folder 


// fs.mkdir('lolo',(err)=>{
//     if(err) console.log(err);
//     else console.log('folder created');
// })

//  ? reading folder

// fs.readdir("lolo",(err,files)=>{
//     if(err) console.log(err);
//     else console.log(files);
// }) // * agar folder exist nahi karti hai to vo error  deta hai

//  hum yese nahi keh sakte hai kii agar .extension hai to vo file hai or extension nahi hai to vo folder hai
//  so hum withFilesTypes options ka use karege  to get the type of files or it is a folder 

// fs.readdir("lolo",{withFileTypes:true},(err,files)=>{
//     if(err) console.log(err);
//     else console.log(files);
// }) // symboltype ka val agar 1 hai to vo file hai and 2 hai to vo folder hai

//? deleteing folder 

// fs.rmdir("lolo",(err)=>{
//     if(err) console.log(err);
//     else console.log('folder deleted');
// }) // gives an error directory not empty 

// app direct folder ko delete nahi kar sakte qkii yuske yander vhi folder ya files hai so ye karne ke liye appko folder ke yander folder me jana padegaa aur yus files ko delete karte huya bhar ke taraf ana hai  ,just like recursion 

// fs.rmdir("lolo",{recursive:true},(err)=>{
//     if(err) console.log(err);
//     else console.log('folder deleted');
// })

// DeprecationWarning: In future versions of Node.js, fs.rmdir(path, { recursive: true }) will be removed. Use fs.rm(path, { recursive: true })

// fs.rm("lolo",{recursive:true},(err)=>{
//     if(err) console.log(err);
//     else console.log('folder deleted');
// })
//  now using this .rm no deprecation error


//  ? ASync 

//  this kind of funciton we will use rearly in nodejs 
//  because this caues blocking of the code that is it is blocking nature 
//  that means jab tak ye complete nahi hoge age ka code nahi chalega  


// fs.writeFileSync('test.txt','hello world kese ho ');
// console.log("created") // ye tab chalga jab writewithSync complete ho kayega 


// read files 
let data =fs.readFileSync("test.txt","utf-8");// simple sa rule jab tab complete nahi hota tab tak age kii koi vhi code excutte chahite yism error keuu na ho 
console.log(data);
