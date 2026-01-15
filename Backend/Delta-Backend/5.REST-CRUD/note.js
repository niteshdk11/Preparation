
// ? REST 
// * Representational State Transfer
// * REST is an architectural style that defines a set of constraints to be used for creating web services 

// *CRUD Operations
// ?GET retrieves resources.
// ? POST submits new data to the server
// ? PUT updates existing data
// ? PATCH update existing data partially
// ? DELETE removes data

//  * Resources are the data or that stuff on which we are applying crud operations


//  delete route ko delete nahi kahate hai hum destroy route kahate hai 

//  create post 

// To implement the feature where you can add a new post, we'll need to create two routes:
// 1. **GET `/posts/new`**: This route will serve a form where users can submit new posts (with a username and content).
// 2. **POST `/posts`**: This route will handle the form submission, adding a new post to the list, and then redirect the user to view all posts.

// res.redirect("/posts")  // by deafult ye 302 return karta hai yani ki reponse deta hai 

// const post = posts.filter((post) => post.id == id) ;
// const post = posts.find((post) => post.id == id) ;
// ?  the difference in the .find and .filter methods is that .find returns the first element that satisfies the condition while .filter returns an array of all elements that satisfy the condition.



// Create id for Posts
// UUID Package
// Universally uniotje identifier


//  ? with the help of html form we can only send get and post reqeust we cannot send put patch and delete reqeusts 
//  ? so for doing that we use some package called method-override
// npm i methodOverride
// import methodOverride from 'method-override';
// app.use(methodOverride('_method'));
//  <form method="post" action="/posts/<%= post.id %>?_method=PATCH" >
//  _method ye jo form aur app.use me likha hai ye query parameter hai aur dono same hone chhaiye

//  tum vo form ka use karke get post method bhej te ho na vo tum event listener par vhi laga satke ho aur fetch ya axios use kar satke ho  



{/* <button onclick="window.history.back()">Back</button> */}
