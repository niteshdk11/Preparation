
    //  ? how to send static files via express 
    
//   if you want to send static files from your server like js and css 
//  app.use(express.static('foldername'))
// shrif yitana likhne se deafult public wale folder me ejs wale files  ko find karega , if and only if we are running that server from the root directory agar kahi bhar se kaare ahai to we should change the name of the folder or we can keep public only 

// app.use(express.static(path.join(__dirname, 'public')))
// ! if youare using esm then use this setps to get the __dirname name  
//  import path from 'path';
// import { fileURLToPath } from 'url';
// const __dirname = path.dirname(fileURLToPath(import.meta.url));


// to use tha files we can 
{/* <link rel="stylesheet" href="/style.css"> // note that no need to write /public becuase in app we are  specifically using public or telling public */}
// app.use(express.static(path.join(__dirname, 'public')))
//  if there are subdir in public folder supoose you have style.css in sub folder in paren public folder  , so there are two  methods that you can use 
// 1. app.use(express.static(path.join(__dirname, 'public/css')))
{/*  2. <link rel="stylesheet" href="/css/style.css"></link> */}



//  ! INCLUDES 
//  use to crate a sub templates 
// <%- include("includes/header.ejs") %> // first you need to crete that hear.ejs in that includes forlder 