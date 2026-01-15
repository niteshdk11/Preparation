

### What is MongoDB?
MongoDB is a NoSQL database that stores unstructured data in flexible JSON-like documents (BSON).

### What is Mongoose?
Mongoose is an ODM library for MongoDB and Node.js, providing schema definitions and data validation.

### What is a Database?
A database is an organized collection of structured data stored electronically.

### What is a Collection?
A collection in MongoDB groups documents, similar to a table in relational databases, and can have varying fields.


#### Connecting to MongoDB

```javascript
import mongoose from "mongoose";

// Connect to local MongoDB database
mongoose.connect('mongodb://localhost:27017/test');
const db = mongoose.connection;

db.on('error', (err) => {
    console.log(err);
});

db.on('open', () => {
    console.log('Database connected');
});
```

#### Online Database Connection

```javascript
import mongoose from "mongoose";

// Connect to an online MongoDB Atlas database
mongoose
    .connect('mongodb+srv://nitesh_dk:rakesh114@nitesh.zownidz.mongodb.net/?retryWrites=true&w=majority&appName=NItesh')
    .then(() => {
        console.log('Database connected');
    });
```

#### Defining a MongoDB Schema

```javascript
import mongoose from "mongoose";

// Define the user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// Create and export the user model
export default mongoose.model("User", userSchema); // Model name is pluralized
```

### Setting Up the Express Application

```javascript
import express from "express";
import mongooseCollection from "./config/mongoose.js";
import userModel from "./models/user.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello World!");
});
```

### CRUD Operations

1. **Create a User**

```javascript
app.post('/create', async (req, res) => {
    let { name, email, password } = req.body;
    let createUser = await userModel.create({ name, email, password });
    console.log('User created');
    res.send(createUser);
});
```

2. **Read Users**

```javascript
app.get('/read', async (req, res) => {
    let users = await userModel.find();
    res.send(users);
});
```

3. **Update a User**

- **Single Field Update**

```javascript
app.patch('/update/:name', async (req, res) => {
    let updatedUser = await userModel.findOneAndUpdate(
        { name: req.params.name },
        { name: "Updated Name" },
        { new: true } // Return the updated document
    );
    res.send(updatedUser);
});
```

- **Multiple Fields Update**

```javascript
app.patch('/update/user/:name', async (req, res) => {
    let { newName, newEmail } = req.body;
    let updatedUser = await userModel.findOneAndUpdate(
        { name: req.params.name },
        { name: newName, email: newEmail },
        { new: true }
    );
    res.send(updatedUser);
});
```

4. **Delete a User**

```javascript
app.delete('/delete/:name', async (req, res) => {
    let deletedUser = await userModel.findOneAndDelete({ name: req.params.name });
    res.send(deletedUser);
});
```

### Starting the Server

```javascript
app.listen(3000, () => {
    console.log("Server started on port http://localhost:3000");
});
```

### Summary of CRUD Operations

- **Create**: Use `POST` requests to create new documents in a collection.
- **Read**: Use `GET` requests to retrieve documents.
- **Update**: Use `PATCH` or `PUT` requests to modify existing documents.
- **Delete**: Use `DELETE` requests to remove documents from the collection.

### Conclusion

Using MongoDB with Mongoose in a Node.js environment simplifies data management and provides powerful features for building robust applications. By defining schemas, you ensure data integrity and streamline the process of interacting with the database.

--- 