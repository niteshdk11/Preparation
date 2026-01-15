*  CJS --> Common JS
* ESM --> EcmaScript Module


# Module -1
 -1
```markdown
# LEC- 24: to 35
```

## Internet Topics
1. **IP Address**
   - IPv4 
   - IPv6 
   - Provided by DHCP (Dynamic Host Configuration Protocol)
   
2. **MAC Address / Physical Address**

3. **Proxy**

4. **Reverse Proxy**

5. **VPN (Virtual Private Network)**

6. **Server**

7. **Client**

8. **Protocol**

9.  **ISP (Internet Service Provider)**

10. **TCP: Transmission Control Protocol**

11. **UDP: User Datagram Protocol**

12. **HTTP**
    - V1
    - V2
    - V3 (Includes TCP/IP, UDP)

  ---
  
# Module 2 
  ```markdown
# LEC- 36: to 39
``` 
1. **Node.js Overview**
   - Key Features
   - Why Node.js became popular

2. **Non-blocking I/O**

3. **Asynchronous Programming**

4. **Libuv**

5. **Event-Driven Architecture**

6. **Single-Threaded Process with Event Loop**
   - Thread
   - Event Loop
   - Middleman Role

7. **Node.js is not Ideal for CPU-Intensive Work**


# Module  
  ```markdown
# LEC- 40: to 45
``` 

1. **Installing Node.js**
2. **What is npm (Node Package Manager)**
3. **Installing npm Packages**
4. **package.json Overview**
5. **package-lock.json Explanation**


# Module 3  
  ```markdown
# LEC- 45: to 55
``` 
1. **File System Overview (Node.js)**
2. **Importing the `fs` Module**
   - CommonJS Import
   - ESM Import
3. **Working with Files**
   - Writing Files
   - Reading Files
   - Appending to Files
   - Renaming Files
   - Deleting Files (`fs.unlink`)
4. **Working with Folders**
   - Creating Folders
   - Reading Folders
   - Deleting Folders (`fs.rmdir`)
   - Using `withFileTypes` to Detect Files/Folders
   - Recursively Deleting Folders (`fs.rm`)
   - Deprecation Warning: `fs.rmdir` to `fs.rm`**
1. **Sync vs Async Methods**
   - Synchronous Write (`fs.writeFileSync`)
   - Synchronous Read (`fs.readFileSync`)
 - Here’s the index for **Module 5**:


### Module 4
```markdown
# LEC- 56: to 76
```
1. **Introduction to HTTP Module in Node.js**  
   - Modules vs Packages  
   - Running the App with `npx nodemon`  
2. **Creating a Server in Node.js**  
3. **Understanding `req.url`**  
4. **Routing in Node.js**  
5. **HTTP Methods**  
   - GET  
   - POST  
   - PUT  
   - PATCH  
   - DELETE  
6. **HTTP Status Codes**  
   - **1XX (Informational)**  
   - **2XX (Success)**  
   - **3XX (Redirection)**  
   - **4XX (Client Errors)**  
     - 400 Bad Request  
     - 401 Unauthorized  
     - 403 Forbidden  
     - 404 Not Found  
     - 405 Method Not Allowed  
     - 409 Conflict  
     - 429 Too Many Requests  
   - **5XX (Server Errors)**  
     - 500 Internal Server Error  
     - 501 Not Implemented  
     - 502 Bad Gateway  
     - 503 Service Unavailable  
     - 504 Gateway Timeout  
     - 505 HTTP Version Not Supported  

     
 - ### Module 5
```markdown
# LEC- 76: to  85
```
 ## Middlewares 
1. **Express**  
   - Install  
   - Usage  
2. **express-session**  
   - Install  
   - Usage  
3. **connect-flash**  
   - Install  
   - Usage  
4. **CORS (Cross-Origin Resource Sharing)**  
   - Install  
   - Usage  
5. **cookie-parser**  
   - Install  
   - Usage  
6. **Morgan (HTTP Request Logger)**  
   - Install  
   - Usage. 
 

## * 86 to 101   `postman` 
## * 101 to 115 -- `project` 



 - ### Module 6
```markdown
# LEC- 115: to  130
```
7. **Introduction**
   - What is MongoDB?
   - What is Mongoose?
   - What is a Database?
   - What is a Collection?
8. **Connecting to MongoDB**
   - Local Database Connection
   - Online Database Connection
9. **Defining a MongoDB Schema**
10. **Setting Up the Express Application**
11. **CRUD Operations**
   - Create a User
   - Read Users
   - Update a User
   - Delete a User


 - ### Module 7
```markdown
# LEC- 130: to  155
```
1. Inserting Users
2. Querying Users
   - Common Operators
   - Logical Operators
   - Regular Expressions
3. Data Validation with Joi
   - Setup and Installation
   - Defining the User Schema
   - Creating the Validation Function
   - Using Joi Validation in Express Routes
4. Embedding Schemas
5. Referencing Schemas
6. Population
7. Difference in Embedding and Referencing

