// module 5 http module anad methods and status coedes 
// 56 to 70 

//  jo hum node se hii  import karte hai vo module kahalate hai 
//  aur vo hum npm se download karte hai yuse package kahate hai 


//  if there issue in using nodemon then ucan use npx nodemon app.js

import http from 'http';

// ? Creating Server 
// let server = http.createServer((req,res)=>{
    
//  res.end("server is wroking")

// })

// req.url we getting this two thing
// /
// /favicon.ico -- this for that icon that is used in browser like earth shape 

//  ? Routing
let server = http.createServer((req,res)=>{
    
    console.log(req.url)
    if(req.url == '/'){
    res.end("you are on root")
}
if(req.url == '/read'){
    res.end("you are reading now")

}
})


//  ? Http Methods
// GET & POST & PUT & PATCH & DELETE

// Http status code 

//  ? 1XX
// * 100 ==> request bheji hai aur request pahuch chuki hai 
//  * 101 ==> request pahcuh chuki hai aur reqest ko dusare protocol par redirect kar diya hai 
//  like apne request bheji thi in http but vo server ko reueqest chhciye as web socket to request ko redirect kar diya jaeyga and you will get a reponse of 101 

//  ? 2XX ( 1 -6)
// * 200 ==> okstatus rquest aure reposnse cycle theek se perfom huya hai  no issue 
// * 201 ==> created status (server par kuch create huya hai request ke bajese )
// *  202 ==> accepted status  , apane jo request bheji hai vo procees ho rahi hai server par then you will get a reponse of 202
//  * 203 ==> your request is forwarded to differnt server then you get a reponse of 203


// ? 3XX 
// * 301 ==> the thing you ar looking for it is not available here it is shifted or  moved  then you will get a reponse of 301 ,  can you can search on different url 
// * 307 ==> the thing you ar looking for it is not available here it is shifted or  moved "TEMPORARYLY Redirect"  then you will get a reponse of 307
// * 308 ==>  the thing you ar looking for it is not available here it is shifted or  moved "PERMENANT Redirect"  then you will get a reponse of 308 


// ? 4XX
// * 400 ==> bad request  then you will get a reponse of 400
// * 401 ==> unauthorized request  then you will get a reponse of 401
// * 403 ==> forbidden request  then you will get a reponse of 403 --> app kuch yeses chize mang rahe ho and app ko access nahi kar sakte
// * 404 ==> not found  then you will get a reponse of 404

//  ? 5XX
// * 500 ==> internal server error  then you will get a reponse of 500
// * 501 ==> not implemented  then you will get a reponse of 501
// * 502 ==> bad gateway  then you will get a reponse of 502 ( ye server ka upstream server fail ho gaya hai )
// * 503 ==> service unavailable  then you will get a reponse of 503


server.listen(3000)
