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

