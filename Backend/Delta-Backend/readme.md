
# Node.js

## Overview
- **Node.js** is a **JavaScript runtime environment**.
- It is used for **server-side programming**.
- Node.js is **not** a language, library, or framework.

## Process Object
- The **Process** object provides information and control over the current Node.js process.
  
### process.argv
- `process.argv`: Returns an array containing the command-line arguments passed when the Node.js process was launched.

#### Example:
```javascript
console.log(process.argv);

for (let i = 2; i < process.argv.length; i++) {
    console.log(process.argv[i]);
}
```

## require and module.exports
- If `module.exports` is not used in a file but that file is **required**, an empty object is returned.

### Example:
```javascript
const someval = require('./Nodejs/math');
console.log(someval);
// let res = someval.sum(200, 3000);
// console.log(res);
```

- Best practice: Break down your code into smaller files, use `module.exports` to export them, and then import all files in `index.js`. The folder name can be used as the module name for requiring.

## NPM (Node Package Manager)
- **NPM**: It's a package manager for Node.js, just like the Play Store is for Android.
- It hosts a large library of Node.js packages.

### Installing Packages
- **node_modules**: This folder contains all installed dependencies for your project.
- **package-lock.json**: It records the exact version of every installed dependency, including sub-dependencies and their versions.

### package.json
- The `package.json` file contains descriptive and functional metadata about a project, such as its name, version, and dependencies.

### Local vs Global Installation
- **Local Installation**: Installs a package locally for the project.
- **Global Installation**: 
    - `npm install -g <package-name>`: Installs a package globally.
    - `npm link <package-name>`: Links a global package.

## require vs import
- **require**: 
  - Loads the entire module.
  - Loading is **synchronous**.
- **import**:
  - Can selectively load only the pieces we need, saving memory.
  - Loading can be **asynchronous**.

### Example of import:
```javascript
import { sum } from "./math.js";
```

---


# Express.js

## Library vs Framework

### Library
- A **library** is a collection of pre-written code that helps perform specific tasks. It gives developers more control over how the code is used.
- Example: `axios`.

### Framework
- A **framework** is a set of pre-written code that provides a structure for developing software applications. The framework itself holds more control over how your application is structured and functions.
- Example: `express`.

## What is Express?
- **Express** is a **Node.js web application framework** that simplifies creating web applications.
- It is used for **server-side programming**.
- Key functionalities:
  1. Listens for incoming requests.
  2. Parses the request.
  3. Matches responses with routes.
  4. Provides suitable responses for requests.

### Ports
- **Ports** are the logical endpoints of a network connection that exchange information between a web server and a web client.

- If the server is not running or listening, you may see: 
  - `Hmm… can't reach this page, localhost refused to connect.`
- If the server is running but no route is defined, you get:
  - `Cannot GET /`.

## Express Setup

### Using `require`
```javascript
const express = require('express');
const app = express();
```

### Using `import`
```javascript
import express from 'express';
const app = express();
```

## Example Routes

### Basic Route with `GET`
```javascript
app.get('/', (req, res) => {
    res.send("Hello Express");
});
```

### Using `app.use`
- `app.use()` is used for handling **any type of request**: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`.
```javascript
app.use("/", (req, res) => {
    res.send("Hello Express kese ho universally");
});
```

### Starting the Server
```javascript
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
```

## Routes
- **Routing** is the process of selecting a path for traffic in a network or across multiple networks.

### Example Route
```javascript
app.get('/', (req, res) => {
    res.send("Hello, kese ho!");
    res.send("<h1>Hello Express</h1>");
});
```

### Path Parameters
- You can capture dynamic values in the URL using **path parameters**.
```javascript
app.get("/:username", (req, res) => {
    let { username } = req.params;
    res.send(username);
});
```

### Query Strings
- You can capture **query string** values passed in the URL.
```javascript
app.get("/search", (req, res) => {
    console.log(req.query);
    res.send(req.query);
});
```
- Example URL: `http://localhost:3000/search?username=apple&color=green`

### Default Route
- If no other route matches, this default route handles the request.
- Note that yisko last me likha hai sare routes ke bad qkii pahale rakha to vo path apane code me rakhne ke bad vhi vo does not exist batayega 
```javascript
app.get("*", (req, res) => {
    res.send("The path does not exist");
});
```
---
---
 
 # EJS (Embedded JavaScript Templates)


### EJS is a simple templating language that allows you to generate HTML markup with plain JavaScript.

# Setting Up EJS as the View Engine
To set EJS as your view engine in an Express application, you can use the following code:
```javascript
app.set("view engine", "ejs");
```
## Explanation
- By default, Express automatically requires EJS as the view engine when you set it using `app.set("view engine", "ejs")`.
- The term **view** refers to the template files that will be rendered.
- Instead of sending a response directly, you **render** the response using EJS templates.

### Default Views Folder
- By default, Express looks for EJS files in a folder named `views` located in the root directory of your project.
- When the server is running, Express tries to find the EJS files (e.g., `index.ejs`) in the `views` folder. If the server is run from a different directory, you may encounter errors.

### Customizing the Views Directory
To avoid errors when running the server from different directories, you can customize the views folder path using the `__dirname` variable. 

#### Example with CommonJS Syntax
```javascript
const path = require('path');
app.set("views", path.join(__dirname, "views"));
```

#### Example with ES Module Syntax
```javascript
import path from 'path';
import { fileURLToPath } from 'url';

// Create __dirname in ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.set("views", path.join(__dirname, "views"));
```

### Explanation of ES Module Code
- `import.meta.url`: This provides the URL of the current ES module, indicating its location.
- `fileURLToPath()`: This function converts the URL to a usable file path format for Node.js.
- `path.dirname()`: This extracts the directory name from the file path, allowing access to files relative to the module's location.

---
# Syntax of EJS

Here’s a table that summarizes the EJS syntax for outputting values and control flow, including conditionals and loops:

| EJS Syntax          | Description                                      | Example                                 |
|---------------------|--------------------------------------------------|-----------------------------------------|
| `<%= ... %>`        | Outputs the value into the template (HTML escaped) | `<h1><%= title %></h1>`                |
| `<%- ... %>`        | Outputs the unescaped value into the template    | `<h1><%- rawHTML %></h1>`               |
| `<% if (condition) { %>` | Starts an if statement                     | `<% if (isLoggedIn) { %><h1>Welcome!</h1><% } %>` |
| `<% } else { %>`    | Starts the else block                            | `<% if (isLoggedIn) { %> ... <% } else { %> <h1>Please Log In</h1> <% } %>` |
| `<% for (let item of array) { %>` | Starts a for loop                | `<% for (let follower of followers) { %><li><%= follower %></li><% } %>` |
| `<% } %>`           | Ends the if or loop block                        | `... <% for (let i = 0; i < 5; i++) { %> ... <% } %>` |

### Notes
- Use `<%= ... %>` when you want to display a value that should be escaped for HTML (to prevent XSS attacks).
- Use `<%- ... %>` if you need to include raw HTML content that should not be escaped.
- Control flow statements like `if` and `for` allow for dynamic rendering of content based on conditions or iterations.

 ---
# Sending Data to EJS Templates

Example of sending data from your server to the EJS template:

```javascript
app.get("/", (req, res) => {
    let rolldice = Math.floor(Math.random() * 6) + 1;
    let followers = ["alice", "bob", "charlie", "dan"];
    res.render("index", { rolldice, followers });
});
```

#### EJS Example

```html
<!-- index.ejs -->
<% if (rolldice == 6) { %>
    <h2>Nice! You have rolled a 6</h2>
<% } %>

<ul>
<% for (let follower of followers) { %>
    <li><%= follower %></li>
<% } %>
</ul>
```
---
# Serving Static Files in Express

In Express, you can serve static files such as JavaScript, CSS, and images by using the built-in `express.static` middleware. This allows your application to easily serve files from a specified directory.

## Setting Up Static File Serving

To serve static files from your server, you can use the following syntax:

```javascript
app.use(express.static('foldername'));
```

### Default Behavior
- By default, if you set the static folder to `public`, Express will look for static files in a folder named `public` in the root directory of your project.
- If your server is running from the root directory, it will automatically find and serve files from the `public` folder.
- If your server is run from a different directory, you may need to specify the path explicitly.

### Example with CommonJS Syntax
To set up static file serving with a specified folder:

```javascript
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
```

### Example with ES Module Syntax
When using ES modules, ensure you define `__dirname` correctly:

```javascript
import path from 'path';
import { fileURLToPath } from 'url';

// Create __dirname in ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, 'public')));
```

### Explanation of the Code
- The `express.static` middleware serves files from the specified directory (in this case, the `public` folder).
- You do not need to include `/public` in the URL when referencing static files in your HTML.

### Using Static Files in EJS Templates

You can include static files such as CSS in your EJS templates like this:

```html
<link rel="stylesheet" href="/style.css">
```

### Handling Subdirectories in the Public Folder
If you have subdirectories within the `public` folder, you can serve files from these subdirectories using two methods:

1. **Using `express.static` with a Subdirectory:**
   ```javascript
   app.use(express.static(path.join(__dirname, 'public/css')));
   ```

2. **Referencing the Subdirectory in Your HTML:**
   ```html
   <link rel="stylesheet" href="/css/style.css">
   ```

   
---
# Including Sub-Templates in EJS
EJS allows you to include reusable sub-templates using the `include` tag, which is useful for components like headers and footers.

## Example Project Structure
```
/project-root
│
├── /views
│   ├── index.ejs          // Main template
│   └── /includes
│       ├── header.ejs     // Header sub-template
│       └── footer.ejs     // Footer sub-template
```

## Sub-Template Example

1. **Header Sub-Template (`header.ejs`):**

```html
<header>
    <h1>My Website</h1>
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
        </ul>
    </nav>
</header>
```

2. **Using the Header in `index.ejs`:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Home</title>
</head>
<body>
    <%- include("includes/header.ejs") %> <!-- Include header -->
    <h2>Welcome to My Website!</h2>
</body>
</html>
```

---

### File Structure
```
/project-root
│
├── /public
│   ├── style.css           // CSS file
│   └── /js
│       └── script.js       // JavaScript file
│
├── /views
│   ├── index.ejs          // EJS template
│   └── /includes
│       └── header.ejs     // Sub-template
│
├── app.js                  // Main server file
└── package.json            // Project configuration
```

---
## GET & POST 

### GET Request:
- **GET**: Fetch data from server.
- Data sent via **query strings** (visible in URL, limited to string).
- Example: `req.query` is used for accessing data.

### POST Request:
- **POST**: Send data to server (create/update).
- Data sent via **request body** (supports any type of data).
- By default, `req.body` is undefined unless configured.

### Express Config:
```javascript
app.use(express.urlencoded({ extended: true })); // Handle URL-encoded form data
app.use(express.json()); // Handle JSON data (like JSON APIs)
```

### Client-side Form:
```html
<form action="http://localhost:3000/register" method="post">
  <input type="text" name="name" placeholder="Enter Name">
  <input type="password" name="password" placeholder="Enter password">
  <button>Register</button>
</form>
```

### Server-side:
```javascript
app.post("/register", (req, res) => {
  let { name, password } = req.body; // req.body contains form data
  res.send("Hello, this is post method " + name); // Responding with the received name
});
```


## SQL 
## MONGO-DB 

---
---

# Express Middleware and Error Handling Notes

## **Index**

1. [Basic Setup](#1-basic-setup)
2. [Middleware Basics](#2-middleware-basics)
3. [Example of a Basic Middleware](#3-example-of-a-basic-middleware)
4. [Chaining Middlewares](#4-chaining-middlewares)
5. [Middleware for Specific Routes](#5-middleware-for-specific-routes)
6. [Middleware as Functions](#6-middleware-as-functions)
7. [Error-Handling Middleware](#7-error-handling-middleware)
8. [Normal Error Handling](#1-normal-error-handling)
9. [Custom Error Class](#2-custom-error-class)
10. [Custom Error Handling Middleware](#3-custom-error-handling-middleware)
11. [General Error Handling Middleware](#4-general-error-handling-middleware)
12. [Handling Asynchronous Errors](#5-handling-asynchronous-errors)
13. [Async Wrapper Function](#6-async-wrapper-function)
14. [Mongoose Errors](#7-mongoose-errors)

---

# Express Middleware Notes

### **1. Basic Setup**
To start with Express, we need to import the required modules and initialize an Express app instance:

- **Import Modules**: 
  ```javascript
  import express from "express";
  import { log } from "console";
  ```

- **Initialize the App**: 
  ```javascript
  const app = express();
  ```

### **2. Middleware Basics**
Middleware functions are functions that have access to the request object (`req`), the response object (`res`), and the `next` function in the application’s request-response cycle. Middleware can perform various tasks, such as:

- Logging requests
- Authenticating users
- Parsing JSON or URL-encoded payloads
- Adding or modifying properties in the request

After the middleware function performs its task, you call `next()` to pass control to the next middleware in the stack.

### **3. Example of a Basic Middleware**
A simple middleware that logs a message each time a request is received:

```javascript
app.use((req, res, next) => {
    console.log("Logging...");
    next(); // Proceeds to the next middleware or route handler
});
```

> **Note**: Anything written after `next()` in a middleware function won't be executed, so it’s best to treat `next()` as the end of that middleware’s operations.

### **4. Chaining Middlewares**
Middleware is executed sequentially in the order they are defined. This means middleware can be chained for every request, regardless of the route or error.

```javascript
app.use((req, res, next) => {
    console.log("Logging middleware 1...");
    next();
});

app.use((req, res, next) => {
    console.log("Logging middleware 2...");
    next();
});
```

### **5. Middleware for Specific Routes**
Middleware can be applied only to specific routes. This example applies middleware to the `/users` path:

```javascript
app.use("/users", (req, res, next) => {
    console.log("Users middleware");
    next();
});
```

### **6. Middleware as Functions**
Middleware functions can be declared separately and reused across different routes. Here’s an example of a `logger` middleware:

```javascript
let logger = (req, res, next) => {
    req.time = Date.now().toString();
    console.log(req.method, req.path, req.hostname, req.time);
    next();
};
```

You can now use this middleware in a route handler like so:

```javascript
app.get("/", logger, (req, res) => {
    console.log("Hello World!");
    res.send("Hello World!");
});
```

> **Key Point**: Defining middleware functions at the top of the file is recommended for better visibility and maintainability.

### **7. Error-Handling Middleware**
If none of the defined routes match, an error-handling middleware can respond with a "page not found" message:

```javascript
app.use((req, res) => {
    res.status(404).send("Page not found");
});
```


---

# **Express Error Handling Notes**

### **1. Normal Error Handling**
Error-handling middleware functions in Express are distinguished by having **four parameters**: `err`, `req`, `res`, and `next`. They should be defined **after** all route definitions to handle errors that occur during route processing.

#### **Example**
```javascript
app.get("/", (req, res) => {
    console.log("Hello World!");
    // Deliberately causing a ReferenceError by logging an undefined variable 'a'
    log(a); 
    res.send("Hello World!");
});

// Error-handling middleware
app.use((err, req, res, next) => {
    console.log("=============== ERROR HANDLED ================");
    console.error(err.stack); // Logs the error stack for debugging
    res.status(500).send("Something went wrong!");
});
```

### **2. Custom Error Class**
When handling different types of errors, creating custom error classes provides better control and structured error management.

#### **Example**
```javascript
class MyError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
    }
}
```

### **3. Custom Error Handling Middleware**
You can throw a custom error within a middleware and handle it down the middleware chain using the `next()` function.

#### **Example**
```javascript
app.use((req, res, next) => {
    // Throw a custom error
    throw new MyError(404, "Page not found");
    next();
});
```

### **4. General Error Handling Middleware**
This middleware extracts and handles error properties (`message` and `statusCode`) and sends a structured response.

#### **Example**
```javascript
app.use((err, req, res, next) => {
    const { message = "An error occurred", statusCode = 500 } = err;
    console.error(err); // Log the error details for debugging
    res.status(statusCode).json({
        success: false,
        message,
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    });
});
```

### **5. Handling Asynchronous Errors**
Express won’t automatically catch errors inside async functions, so you need to manually handle them by calling `next(err)`.

#### **Example**
```javascript
app.get("/async-error", async (req, res, next) => {
    try {
        const result = await someAsyncFunction();
        if (!result) {
            throw new MyError(404, "Data not found");
        }
        res.send(result);
    } catch (err) {
        next(err);
    }
});
```

### **6. Async Wrapper Function**
A utility function to wrap an asynchronous route and automatically catch errors, passing them to the next middleware.

#### **Example**
```javascript
function asyncWrapper(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(next);
    };
}

// Use asyncWrapper to handle errors
app.get('/user/:id', asyncWrapper(async (req, res) => {
    const userId = req.params.id;
    const user = await getUser(userId);
    res.json(user);
}));
```

### **7. Mongoose Errors**
Mongoose-specific errors (like `ValidationError`) should be handled separately to provide clear feedback.

#### **Example**
```javascript
app.use((err, req, res, next) => {
    if (err.name === "ValidationError") {
        err = new MyError(400, "Validation failed");
    }
    next(err);
});
```

