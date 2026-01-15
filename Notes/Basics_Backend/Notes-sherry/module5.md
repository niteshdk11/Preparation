### 1. **Express**  
- **Install:**  
  ```bash
  npm install express
  ```
- **Usage:**  
  ```javascript
  import express from 'express';
  const app = express();
  let PORT = 4000;

  app.get('/hello', (req, res) => {
    res.send("hello world");
  });

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
  ```
---

### **Middleware Explanation**
Jab bhi aap browser se koi **request** backend ko bhejte hain, toh wo apne **route** par jaati hai. Agar aap chaahte hain ki route par jaane se pehle request mein kuchh **check** karna ya kuchh **data** add karna ho, toh aise cases mein **middleware** ka istemal hota hai.

### **Middleware Ka Use:**
- **Validation:** Request ko process karne se pehle data ko check karna (e.g., token validation).
- **Modification:** Request ke headers ya body mein kuchh naya data add karna.
- **Authentication:** User ko route access se pehle authenticate karna.
Middleware request aur route ke beech ka ek **interceptor** hota hai, jo aapko requests ko manage karne mein madad karta hai.

--- 

### 2. **express-session**  
- **Install:**  
  ```bash
  npm install express-session
  ```
- **Usage:**  
  ```javascript
  import expressSession from 'express-session';

  app.use(expressSession({
    secret: "nitesh",
    resave: false,
    saveUninitialized: true,
  }));

  app.get("/create", (req, res) => {
    req.session.polo = true;
    res.send("Session created");
  });

  app.get("/check", (req, res) => {
    console.log(req.session.polo);
  });
  ```

---

### 3. **connect-flash**  
- **Install:**  
  ```bash
  npm install connect-flash
  ```
- **Usage:**  
  ```javascript
  import flash from 'connect-flash';

  app.use(flash());  // Flash requires express-session

  app.get("/", (req, res) => {
    req.flash("info", "Hello Nitesh");
    res.redirect("/info");
  });

  app.get("/info", (req, res) => {
    res.send(req.flash("info"));
  });
  ```

---

### 4. **CORS (Cross-Origin Resource Sharing)**  
- **Install:**  
  ```bash
  npm install cors
  ```
- **Usage:**  
  ```javascript
  import cors from 'cors';

  app.get("/shareable", cors(), (req, res) => {
    res.send("This is shareable data");
  });

  // app.use(cors()); // Enable CORS for all routes
  ```

---

### 5. **cookie-parser**  
- **Install:**  
  ```bash
  npm install cookie-parser
  ```
- **Usage:**  
  ```javascript
  import cookieParser from 'cookie-parser';

  app.use(cookieParser());

  app.get("/banned", (req, res) => {
    res.cookie("banned", "true");
    res.send("Cookie set");
  });

  app.get("/checkband", (req, res) => {
    console.log(req.cookies.banned);
  });
  ```

---

### 6. **Morgan (HTTP Request Logger)**  
- **Install:**  
  ```bash
  npm install morgan
  ```
- **Usage:**  
  ```javascript
  import morgan from 'morgan';

  app.use(morgan("combined"));  // Log detailed request info
  // app.use(morgan("dev"));    // Log concise info with color

  app.get("*", (req, res) => {
    console.log("404 not found");
    res.status(404).send("Page not found");
  });
  ```

---
### ** Error handler  create at lasts **
```javascript
app.get("/about", (req, res,next) => {
    try {
        res.send(hello )
    } catch (error) {
        next(error);
    }
})
app.use(( err ,req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.log(statusCode);
    res.status(statusCode).send(err.message);
    
})
```
---
