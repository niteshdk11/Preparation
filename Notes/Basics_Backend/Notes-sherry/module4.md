# Module 5 
```markdown
# LEC- 56: to 70
```

1. **Introduction to HTTP Module in Node.js**

   - **Modules vs Packages**:
     - **Modules**: These are core features provided by Node.js, and we import them directly without downloading (e.g., `http`, `fs`).
     - **Packages**: These are external libraries downloaded via `npm` (Node Package Manager) and imported into the application.

   - **Running the App**:
     - If you face any issues with running your app using `nodemon`, you can use:
       ```bash
       npx nodemon app.js
       ```

2. **Creating a Server in Node.js**
   - Node.js allows us to create a simple server using the `http` module.
   - Example of a basic server:
     ```javascript
     import http from 'http';

     let server = http.createServer((req, res) => {
         res.end("Server is working");
     });

     server.listen(3000);
     ```
   - `res.end()`: Ends the response and sends it back to the client.

3. **Understanding `req.url`**
   - The `req.url` property provides the URL that the client requested.
   - Example:
     ```javascript
     let server = http.createServer((req, res) => {
         console.log(req.url); // Logs the requested URL
         res.end("Request URL logged");
     });
     ```
   - When you access a website, two primary URLs are accessed:
     - `/`: Root URL (main page).
     - `/favicon.ico`: Icon request for the website (e.g., the small icon you see in the browser tab).

4. **Routing in Node.js**
   - Routing allows you to serve different responses based on the URL requested by the user.
   - Example:
     ```javascript
     let server = http.createServer((req, res) => {
         if (req.url == '/') {
             res.end("You are on the root page");
         }
         if (req.url == '/read') {
             res.end("You are reading now");
         }
     });
     ```

5. **HTTP Methods**
   - HTTP defines several request methods to interact with a server, such as:
     - **GET**: To retrieve data from the server.
     - **POST**: To send data to the server.
     - **PUT**: To update data on the server.
     - **PATCH**: To partially update data on the server.
     - **DELETE**: To delete data from the server.

6. **HTTP Status Codes**
   - HTTP responses come with status codes to indicate the success or failure of a request. These codes are divided into categories:


### 1XX (Informational)
- **100 Continue**: Correct – The server has received the request headers and the client should proceed to send the request body.
- **101 Switching Protocols**: Correct – The server is switching protocols as requested by the client (e.g., from HTTP to WebSockets).

### 2XX (Success)  
- **200 OK**: The request was successful, and the response body contains the result.  
- **201 Created**: A new resource has been successfully created.  
- **202 Accepted**: The request has been accepted for processing but is not yet complete.  
- **203 Non-Authoritative Information**: The request was processed successfully, but some information may come from a third-party source.  
- **204 No Content**: The request was successful, but there is no content to return in the response.  
- **205 Reset Content**: The request was successful, and the client should reset the view (e.g., a form).  
- **206 Partial Content**: Only a part of the resource has been sent (used for range-based requests).  

---

### 3XX (Redirection)  
- **301 Moved Permanently**: The requested resource has been permanently moved to a new URL.  
- **302 Found**: The requested resource temporarily resides at another URL (old behavior for redirect).  
- **303 See Other**: The client should use a **GET** request at a different URL to access the resource.  
- **304 Not Modified**: The cached version of the requested resource is still valid, and no new data is sent.  
- **307 Temporary Redirect**: The resource is temporarily moved, but future requests should still use the original URL.  
- **308 Permanent Redirect**: The resource has been permanently moved to a new URL, and future requests should always use the new URL.  

---

### 4XX (Client Errors)  
- **400 Bad Request**: The request is invalid or malformed, and the server cannot process it.  
- **401 Unauthorized**: The request requires authentication, but the client has not provided valid credentials.  
- **403 Forbidden**: The client does not have permission to access the resource (even if authenticated). Example: App kuch aise cheezein mang raha hai jo tumhare access mein nahi hain.  
- **404 Not Found**: The server could not find the requested resource.  
- **405 Method Not Allowed**: The HTTP method used is not allowed for this resource.  
- **409 Conflict**: There is a conflict with the current state of the resource (e.g., duplicate data).  
- **429 Too Many Requests**: The client has sent too many requests in a given timeframe (rate limiting).  

---

### 5XX (Server Errors)  
- **500 Internal Server Error**: An unexpected error occurred on the server.  
- **501 Not Implemented**: The server does not support the functionality required to process the request.  
- **502 Bad Gateway**: The server received an invalid response from an upstream server (server ke upstream server ne fail kar diya hai).  
- **503 Service Unavailable**: The server is temporarily unable to handle the request (e.g., due to maintenance).  
- **504 Gateway Timeout**: The server acting as a gateway did not receive a timely response from an upstream server.  
- **505 HTTP Version Not Supported**: The server does not support the HTTP version used in the request.  

---
