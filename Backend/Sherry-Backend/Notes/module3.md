
# File System (Node.js)

The `fs` module in Node.js is used to interact with the file system, allowing you to work with **files** and **folders**. You can write, read, append, rename, and delete files, as well as create, read, and delete folders.

## Importing the `fs` Module
- **CommonJS**: 
    ```javascript
    const fs = require('node:fs');
    ```

- **ESM**: 
    ```javascript
    import * as fs from 'fs';
    ```

## Files

### 1. **Writing Files**
- A new file is created or an existing file is overwritten with the specified content.
    ```javascript
    fs.writeFile('test.txt', 'hello world', (err) => {
        if (err) console.log(err);
        else console.log('file created');
    });
    ```
    - `./` = current directory
    - `/` = root directory
    - If you don't want to handle errors or response messages, you can pass an empty callback, but it’s necessary to pass a callback.
  
    Example:
    ```javascript
    fs.writeFile('./test2.txt', 'hello world', () => {});
    ```

### 2. **Reading Files**
- You can read a file using `fs.readFile` and specify the encoding to get readable text.
    ```javascript
    fs.readFile('./test.txt', 'utf-8', (err, data) => {
        if (err) console.log(err);
        else console.log(data);
    });
    ```
    - Without encoding, data is returned in buffer (hexadecimal format). By specifying `"utf-8"`, we get readable text directly.

### 3. **Appending to a File**
- Adds data to an existing file. If the file doesn't exist, it creates a new one.
    ```javascript
    fs.appendFile('./test.txt', '  --- hello Nitesh', (err) => {
        if (err) console.log(err);
        else console.log('file updated');
    });
    ```
    - Agar file exist nahi karti hai to vo automatically create kar dega.

### 4. **Renaming a File**
- Rename an existing file.
    ```javascript
    fs.rename('./test.txt', './test1.txt', (err) => {
        if (err) console.log(err);
        else console.log('file renamed');
    });
    ```
    - Error tab aata hai jab file exist nahi karti.

### 5. **Deleting a File**
- No `delete` method, but you can use `fs.unlink` to remove a file.
    ```javascript
    fs.unlink('test.txt', (err) => {
        if (err) console.log(err);
        else console.log('file deleted');
    });
    ```
    - Error milega agar file exist nahi karti.

---

## Folders

### 1. **Creating a Folder**
- Creates a new directory.
    ```javascript
    fs.mkdir('lolo', (err) => {
        if (err) console.log(err);
        else console.log('folder created');
    });
    ```

### 2. **Reading a Folder**
- Reads the contents of a folder.
    ```javascript
    fs.readdir("lolo", (err, files) => {
        if (err) console.log(err);
        else console.log(files);
    });
    ```
    - Agar folder exist nahi karta, error aayega.

- If you want to know whether a file is a folder or a file itself, use `withFileTypes`.
    ```javascript
    fs.readdir("lolo", { withFileTypes: true }, (err, files) => {
        if (err) console.log(err);
        else console.log(files);
    });
    ```
    - `1` = File, `2` = Folder

### 3. **Deleting a Folder**
- Direct folder delete nahi kar sakte agar folder empty nahi hai.
    ```javascript
    fs.rmdir("lolo", (err) => {
        if (err) console.log(err);
        else console.log('folder deleted');
    });
    ```
    - Agar folder ke andar files ya folders hai, toh error milega.

- Use recursion to delete folders and their contents.
    ```javascript
    fs.rmdir("lolo", { recursive: true }, (err) => {
        if (err) console.log(err);
        else console.log('folder deleted');
    });
    ```
    - Warning: `rmdir` will be deprecated, use `fs.rm` instead.

- Using `fs.rm` to avoid deprecation warnings:
    ```javascript
    fs.rm("lolo", { recursive: true }, (err) => {
        if (err) console.log(err);
        else console.log('folder deleted');
    });
    ```

---

## **Sync vs Async Methods**
- **Async** methods are non-blocking and do not wait for the completion of the task before moving forward.
- **Sync** methods block the code execution until the task is complete.

### 1. **Synchronous Write**
    ```javascript
    fs.writeFileSync('test.txt', 'hello world kese ho');
    console.log("file created");
    ```
    - Synchronous function tab tak code ko rokti hai jab tak task complete nahi ho jata.

### 2. **Synchronous Read**
    ```javascript
    let data = fs.readFileSync('test.txt', 'utf-8');
    console.log(data);
    ```

Sync functions ka use zyada nahi karte Node.js me kyunki ye blocking nature ke hote hain aur performance impact karte hain, especially in a server environment.

--- 
