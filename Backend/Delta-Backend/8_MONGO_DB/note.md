## MongoDB and Mongoose

### BSON vs JSON
- **JSON**: Text-based, human-readable, space-inefficient.
- **BSON**: Binary JSON, MongoDB uses BSON to store documents.

### MongoDB Core Concepts
- **Documents**: MongoDB stores data in BSON documents.
- **Collections**: A collection is a group of BSON documents. MongoDB creates a collection automatically when you first store data in it.

### Inserting Data in MongoDB
- **Insert One Document**: 
  ```javascript
  db.collection.insertOne({ name: "adam", marks: 79 });
  ```
  - Inserts a single document into a collection.
  
- **Insert Multiple Documents**: 
  ```javascript
  db.collection.insertMany([{ name: "bob", marks: 65 }, { name: "eve", city: "Delhi" }]);
  ```
  - Inserts an array of documents into a collection.

- **Flexibility**: MongoDB allows adding documents with different key-value pairs without pre-defining a schema.

### Finding Data in MongoDB
- **Find All Documents**:
  ```javascript
  db.collection.find();
  ```
  - Returns a cursor, which is a reference to the actual documents.

- **Find One Document**:
  ```javascript
  db.collection.findOne({ key: value });
  ```
  - Returns a single document matching the filter criteria.

- **Find with Multiple Conditions**:
  ```javascript
  db.collection.find({ name: "nitesh", age: 18 });
  ```

### Query Operators in MongoDB
- **Comparison Operators**:
  - **Greater than (`$gt`)**: Find documents with marks greater than 75.
    ```javascript
    db.student.find({ marks: { $gt: 75 } });
    ```

- **Logical Operators**:
  - **`$or`**: Find students who scored more than 75 or live in Delhi.
    ```javascript
    db.student.find({ $or: [{ marks: { $gt: 75 } }, { city: "Delhi" }] });
    ```

### Updating Data in MongoDB
- **Update One Document**:
  ```javascript
  db.collection.updateOne({ name: "adam" }, { $set: { marks: 99 } });
  ```
  - Updates a single document based on a filter.

- **Update Operators**:
  - **`$set`**: Sets a field to a specified value.
  - **`$addFields`**, **`$project`**, **`$unset`**, **`$replaceRoot`**, **`$replaceWith`**.

- **Nesting in Documents**:
  - Example of a nested document:
    ```javascript
    {
      _id: "farah",
      name: "farah",
      performance: { marks: 88, grade: "A" }
    }
    ```
  - Finding nested data:
    ```javascript
    db.student.findOne({ "performance.marks": 88 });
    ```

### Deleting Data in MongoDB
- **Delete One Document**:
  ```javascript
  db.collection.deleteOne({ key: value });
  ```
- **Delete Multiple Documents**:
  ```javascript
  db.collection.deleteMany({ key: value });
  ```

- **Drop a Database**:
  ```javascript
  db.dropDatabase();
  ```

---

## Mongoose with Node.js

### Overview
- **Mongoose**: An Object Data Modeling (ODM) library that establishes a connection between MongoDB and the Node.js runtime environment.

### Defining a Schema in Mongoose
- A **schema** defines the shape and structure of documents within a collection:
  ```javascript
  const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
  });
  ```

### Creating Models in Mongoose
- A **model** is a class used to construct documents based on a schema:
  ```javascript
  const User = mongoose.model("User", userSchema);
  ```

### Inserting Data in Mongoose
- **Insert One Document**:
  ```javascript
  const user1 = new User({ name: "Adam", email: "adam@yahoo.in", age: 48 });
  user1.save();
  ```

- **Insert Multiple Documents**:
  ```javascript
  User.insertMany([
    { name: "Tony", email: "tony@gmail.com", age: 50 },
    { name: "Bruce", email: "bruce@gmail.com", age: 47 }
  ]);
  ```

- **Operation Buffering**: Mongoose allows you to use models immediately, without waiting for the connection to establish.

### Finding Data in Mongoose
- **Find All Documents**:
  ```javascript
  User.find().then((data) => console.log(data));
  ```
  - Returns a Query Object, which is "thenable" but not a promise.

- **Find One Document**:
  ```javascript
  User.findOne({ name: "Bruce" });
  ```

### Updating Data in Mongoose
- **Update One Document**:
  ```javascript
  User.updateOne({ _id: "123" }, { $set: { name: "Updated Name" } });
  ```

- **Find and Update**:
  ```javascript
  User.findOneAndUpdate({ _id: "123" }, { name: "Updated Name" }, { new: true });
  ```

- **Update with Validation**: Use `{ runValidators: true }` to apply schema validations during updates.

### Deleting Data in Mongoose
- **Delete One Document**:
  ```javascript
  User.deleteOne({ name: "Adam" });
  ```

- **Delete Multiple Documents**:
  ```javascript
  User.deleteMany({ age: { $gt: 40 } });
  ```

---

### Schema Validations
- **Purpose**: Defines rules to ensure data integrity.
- **Example**:
  ```javascript
  const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true, min: [1, "Price should be greater than 1"] },
    discount: { type: Number, default: 0 }
  });
  ```

**Note**: Schema rules are only applied at the time of insertion. During updates, use `runValidators: true` to enforce schema validation.

---
