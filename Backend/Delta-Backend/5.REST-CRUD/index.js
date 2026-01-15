import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from "uuid";
import methodOverride from "method-override";

const app = express();
const port = 3000 || 4000;

// Get the directory name of the current module file
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// EJS template engine configuration
app.set("view engine", "ejs"); 
app.set("views", path.join(__dirname, "views")); // Set the views directory

// Serving static files (CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Middleware for parsing form data and JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Method Override middleware (for supporting PUT, PATCH, DELETE methods via POST)
app.use(methodOverride('_method'));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Sample posts data (initial posts)
let posts = [
  { id: uuidv4(), username: "JohnDoe", content: "Hello, world!" },
  { id: uuidv4(), username: "JaneSmith", content: "How are you?" },
  { id: uuidv4(), username: "BobJohnson", content: "I'm doing great!" },
];

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Routes

// GET Route: Display all posts
app.get("/posts", (req, res) => {
  res.render("index", { posts }); // Render the index.ejs file, passing the posts array
});

// GET Route: Show form to create a new post
app.get("/posts/new", (req, res) => {
  res.render("newpost"); // Renders form to create new post
});

// POST Route: Add a new post
app.post("/posts", (req, res) => {
  const { username, content } = req.body; // Extract data from the form
  posts.push({ id: uuidv4(), username, content }); // Add new post with a unique ID
  res.redirect("/posts"); // Redirect to the list of posts
});

// GET Route: Show a single post based on its ID
app.get("/posts/:id", (req, res) => {
  const { id } = req.params; // Extract the post ID from the URL
  const post = posts.find((post) => post.id == id); // Find the post by ID
  if (post) {
    res.render("showPost", { post }); // Render the showPost.ejs file with the post data
  } else {
    res.status(404).send("Post not found");
  }
});

// GET Route: Show form to edit a post
app.get("/posts/:id/edit", (req, res) => {
  const { id } = req.params; // Extract the post ID from the URL
  const post = posts.find((post) => post.id == id); // Find the post by ID
  if (post) {
    res.render("editPost", { post }); // Render the editPost.ejs file with the post data
  } else {
    res.status(404).send("Post not found");
  }
});

// PATCH Route: Update the content of a post
app.patch("/posts/:id", (req, res) => {
  const { id } = req.params; // Extract the post ID from the URL
  const post = posts.find((post) => post.id == id); // Find the post by ID
  if (post) {
    post.content = req.body.content; // Update the post content
    res.redirect("/posts"); // Redirect to the list of posts
  } else {
    res.status(404).send("Post not found");
  }
});

// DELETE Route: Delete a post by ID
app.delete("/posts/:id", (req, res) => {
  const { id } = req.params; // Extract the post ID from the URL
  posts = posts.filter((post) => post.id != id); // Remove the post from the array
  res.redirect("/posts"); // Redirect to the list of posts
});

// Root route for testing
app.get("/", (req, res) => {
  res.send("Hello world"); // Sends a simple message
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`); // Log message when server starts
});
