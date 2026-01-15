## 1. Inserting Users

To insert multiple user documents into a MongoDB collection, you can use the `insertMany` method. Here’s an example of how to do this in an Express route:

```javascript
app.get("/insertusers", async (req, res) => {
    const response = await userModel.insertMany(userData);
    res.send(response); 
});
```

---

## 2. Querying Users

You can query users using various MongoDB operators. Below are examples of how to use these operators effectively.

### Common Operators

- **Equality (`$eq`)**: Matches documents where the field is equal to the specified value.
  
  ```javascript
  let data = await userModel.find({ name: { $eq: "John Doe" } });
  ```

- **Not Equal (`$ne`)**: Matches documents where the field is not equal to the specified value.
  
  ```javascript
  let data = await userModel.find({ age: { $ne: 34 } });
  ```

- **Less Than (`$lt`)**: Matches documents where the field is less than the specified value.
  
  ```javascript
  let data = await userModel.find({ age: { $lt: 30 } });
  ```

- **Greater Than (`$gt`)**: Matches documents where the field is greater than the specified value.
  
  ```javascript
  let data = await userModel.find({ age: { $gt: 30 } });
  ```

- **In (`$in`)**: Matches documents where the field's value is in the specified array.
  
  ```javascript
  let data = await userModel.find({ name: { $in: ["John Doe", "Jane Smith"] } });
  ```

### Logical Operators

- **AND (`$and`)**: Matches documents that satisfy all specified conditions.
  
  ```javascript
  let data = await userModel.find({
      $and: [
          { age: { $gte: 30 } },
          { isMarried: true }
      ]
  });
  ```

- **OR (`$or`)**: Matches documents that satisfy at least one of the specified conditions.
  
  ```javascript
  let data = await userModel.find({
      $or: [
          { age: { $gte: 30 } },
          { isMarried: true }
      ]
  });
  ```

### Regular Expressions

You can use regular expressions for pattern matching:

- **Starts with (`^`)**: Matches strings that start with a specified substring.
  
  ```javascript
  let data = await userModel.find({ name: { $regex: /^John/i } });
  ```

- **Ends with (`$`)**: Matches strings that end with a specified substring.
  
  ```javascript
  let data = await userModel.find({ name: { $regex: /Doe$/i } });
  ```

- **Contains (`.*`)**: Matches strings containing the specified substring.
  
  ```javascript
  let data = await userModel.find({ name: { $regex: /.*Jane.*/i } });
  ```

---

## 3. Data Validation with Joi

Joi is a powerful library for data validation. Below are the steps to integrate Joi validation with Mongoose schemas in your Express application.

### Setup and Installation

First, ensure you have Joi installed in your project:

```bash
npm install joi
```

### Defining the User Schema

Here’s how to define a user schema using Mongoose:

```javascript
import mongoose from "mongoose";

// Define the user schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isMarried: { type: Boolean, default: false },
    age: { type: Number, required: true },
});

// Export the user model
const User = mongoose.model("User", userSchema);
export default User;
```

### Creating the Validation Function

This function uses Joi to define the validation rules for user data.

```javascript
import Joi from "joi";

// Function to validate user data
function validateUser(data) {
    const schema = Joi.object({
        name: Joi.string().min(2).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(1024).required(),
        age: Joi.number().min(10).max(100).required(),
        isMarried: Joi.boolean().default(false)
    });

    // Validate the data against the schema
    const { error } = schema.validate(data);
    return error?.details[0]?.message; // Returns the first error message or undefined
}

export { validateUser };
```

### Using Joi Validation in Express Routes

In your Express route, use the validation function to check incoming user data before proceeding with database operations.

```javascript
import express from "express";
import { validateUser } from "./models/user.js"; // Import the validation function
import User from "./models/user.js"; // Import the User model

const app = express();
app.use(express.json()); // Middleware to parse JSON

// Sample route to handle user data
app.post("/datai", async (req, res) => {
    const user = req.body; // Assuming user data comes from the request body

    // Validate the user data
    const error = validateUser(user);
    if (error) {
        return res.status(400).send(error); // Send error response if validation fails
    }

    // Create and save the user in the database
    const newUser = new User(user);
    await newUser.save();
    res.status(201).send(newUser); // Respond with the created user
});
```

---

## 4. Embedding Schemas

Embedding allows you to define schemas within other schemas, useful for one-to-many relationships, such as a user with multiple posts.

### Example of Embedding:

```javascript
const postsSchema = new mongoose.Schema({
    content: String,
    date: { type: Date, default: Date.now }
});

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isMarried: { type: Boolean, default: false },
    age: { type: Number, required: true },
    posts: [postsSchema] // Embedding posts schema
});
```

### Adding a Post:

You can add a post to a user by pushing it into the user's posts array.

```javascript
app.post("/:username/posts/create", async (req, res) => {
    let user = await User.findOne({ name: req.params.username });
    user.posts.push({ content: "I love my country", date: Date.now() });
    await user.save();
    res.send(user);
});
```

---

## 5. Referencing Schemas

Referencing allows you to create a relationship between two separate collections, which is beneficial for avoiding duplication of data.

### Example of Referencing:

```javascript
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, required: true },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }] // Referencing posts
});

const postsSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Reference to the user document
    content: { type: String, required: true },
    date: { type: Date, default: Date.now }
});
```

### Adding a Post with Reference:

You can add a post while referencing the user.

```javascript
app.post("/:username/posts/create", async (req, res) => {
    let user = await User.findOne({ name: req.params.username });
    let post = {
        user: user._id,
        content: "I love my country",
        date: Date.now()
    };
    let postC = await postsModel.create(post);
    user.posts.push(postC._id);
    await user.save();
    res.send([user,

 postC]);
});
```

---

## 6. Population

Population is a Mongoose feature that allows you to automatically replace the specified paths in the document with documents from other collections. This helps in retrieving related data without manual queries.

### Using Population:

```javascript
app.get("/posts", async (req, res) => {
    let posts = await postsModel.find().populate("user"); // Populating user field in posts
    res.send(posts);
});

app.get("/users", async (req, res) => {
    let users = await userModel.find().populate("posts"); // Populating posts field in users
    res.send(users);
});
```

### Key Points on Population:

- **Refers to the model**: When using `populate`, the ref value in the schema must match the model name exactly.
- **Ensures relationships**: It helps maintain relationships between different collections and allows fetching related documents seamlessly.

---
## Difference in  Embedding and  Referencing


| **Criteria**                                   | **Use Embedding**                               | **Use Referencing**                              |
|------------------------------------------------|------------------------------------------------|--------------------------------------------------|
| **Data Size**                                  | When the data is small and won't grow significantly in the future. <br> *Example:* A user profile that has a fixed number of attributes (name, email, age). | When the data is large and may grow significantly. <br> *Example:* A blog platform where users have multiple posts, and each post can have many comments. |
| **Data Change Frequency**                       | When the data rarely changes. <br> *Example:* A user's basic information (name, email). | When the data is likely to change frequently. <br> *Example:* A product catalog where product details (price, description) might be updated often. |
| **Data Access Speed**                          | When quick access to data is crucial. <br> *Example:* A user's recent activity logs, where you want to retrieve all logs quickly. | When you can afford a slightly slower access speed in favor of data integrity and normalization. <br> *Example:* A user's list of friends where each friend is a separate user document. |
| **Use Case**                                   | Use embedding for one-to-few relationships. <br> *Example:* A user with a fixed number of addresses (home, work). | Use referencing for one-to-many or many-to-many relationships. <br> *Example:* Users and their associated posts, where a user can have many posts. |

### Examples Explained:

1. **Embedding Example**:
   - **Scenario**: A user document contains an array of addresses.
   - **Schema**:
     ```javascript
     const addressSchema = new mongoose.Schema({
         street: String,
         city: String,
         state: String,
         zip: String,
     });

     const userSchema = new mongoose.Schema({
         name: String,
         email: String,
         addresses: [addressSchema], // Embedding addresses
     });
     ```

2. **Referencing Example**:
   - **Scenario**: A user can have multiple posts, and each post can be modified frequently.
   - **Schema**:
     ```javascript
     const userSchema = new mongoose.Schema({
         name: String,
         email: String,
     });

     const postSchema = new mongoose.Schema({
         user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Referencing user
         content: String,
         date: { type: Date, default: Date.now },
     });
     ```
