## Episode 1: Inception 🌟

1. Creating an React Element in HTML using React CDN 🏗️
    ```html
    react cdn
    <div id="root"></div>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    ```

   ```javascript
   let heading = React.createElement("element", { id: "root" }, "data to be inserted in element");
   console.log(heading); // This is a React element and it is an object.


   let heading = React.createElement("div", {id:"parent"}, 
    React.createElement("div", {id:"child"}, 
        [ 
            React.createElement("h1", {id:"tag"}, "I'm h1 tag"), 
            React.createElement("h2", {id:"tag"}, "I'm h2 tag"),
        ]
    )
)
   ```
    To Pass element in the form of siblings then write it in an array - [].


   React is a JavaScript library
   ✨ React element is a plain javascript object.
    ✨ when we render it on DOM then it's converted into HTML element.

2. Creating Root 🌳
   ```javascript
   ReactDOM.createRoot(document.getElementById("root")).render(heading);
   // The render() method converts the heading (which is an object) into an HTML Element & put it into the root element.
   ```

3. Props 📦
   - Props are the attributes and children present inside an element.


## Episode 2: Igniting Our App 🚀.

-> 📦 npm
    - npm doesn't stand for "node package manager"; it can be anything fun like "neverending prototype mode" or "nesty pizza manager." 🍕
    - While npm manages packages, it doesn't have a definitive full form.
    - npm manages packages but doesn't stand for `Node Package Manager`. 📦
Steps:
    - npm init => write description, test command: jest, git repository, keywords: give any word, author - OUR NAME, license --> package.json file ll'be created
    - npm install -D parcel => parcel is a bundler, -D is for devDependencies
    - npx parcel index.html => to run the parcel
    - npm install react react-dom => to install react and react-dom


-> 📄 package.json
    - package.json is a configuratio for npm.
    - It tracks the versions of the packages installed on our system. 📜
    - It can use caret(^) and tilde(~) for version control.

-> Bundler -> it bundles our app or packages our app and shift it to the production server.
    - eg: parcel, webpack, vite

-> 🎯 Caret (^) and Tilde (~)
    - Caret (^): Updates minor versions automatically.
        - e.g., `^2.3.3` can update to `2.3.4`. 🔄
    - Tilde (~): Updates major versions automatically.
        - e.g., `~2.3.3` can update to `3.0.0`. 🚀
    - It's recommended to use caret (^) instead of tilde (~) because major updates might break the code. ⚠️

-> 🔗 Two Types of Dependencies
    1. devDependencies: Required during the development phase. 💻
    2. Dependencies: Used in production as well. 🌐

-> 📦 parcel
    - Parcel is a bundler. 📦
    - Install it using: `npm install -D parcel` (adds Parcel as a devDependency). ⚙️

-> 🔒 package-lock.json
    - Keeps the exact versions that are installed. 📌
    - It contains the exact version of Transitive dependencies also. 🔄
-> package.json
    - keeps the aprox version of the packages.

-> Node modules : it is like a database where all the packages are stored.
    - node modules are the collections of our packages

-> 🔄 Transitive Dependencies
    - Dependencies that have their own dependencies, and those dependencies also have their own dependencies, and so on.
    - Example: `node_modules` 📚

-> 📜 Package Files
    - Every dependency has its own `package.json` and `package-lock.json`. 🗂️

-> 🚀 NPX: To Excute any package
    - write npx and packageName it will run that package.
    - npx: A tool for running Node.js packages, scripts, and binaries without the need for global installation.

-> 📦 Parcel: The Ultimate Bundler
Parcel offers a suite of features to streamline development and optimize your web projects:

Pracel Provides with:
   - Dev Build & Local Server: Quickly set up development environments.
   - HMR (Hot Module Replacement): Automatically update modules without a full refresh.
   - File Watching Algorithm: Written in C++ for efficient file monitoring.
   - Cachings: Faster builds(Refreshig Page) through caching mechanisms.
   - Image Optimization: Reduce image sizes for faster load times.
   - Minification: Compress code to reduce file sizes.
   - Bundling: Combine multiple files into one.
   - Compression: Further reduce file sizes by removing all white space for optimal performance.
   - Consistent Hashing: Ensure stable hashed filenames for caching.
   - Code Splitting: Load only the necessary code for faster initial load.
   - Differential Bundling: Support for older browsers with appropriate bundles.
   - Diagnostics & Error Handling: Built-in tools for debugging.
   - HTTPS: Secure your local development server.
   - Tree Shaking: Remove unused code to optimize performance.

-> For Production build run `npx parcel build index.html`

-> From Package.json file remove "main": "script.js", bcoz while running `npx parcel build index.html` it will not give error.

-> Don't upload .parcel-cache, dist & node_modules on github, the files that can be re-generated again don't put that file on github

-> 🤔 Why is React Fast?
   React is designed for performance. It utilizes various bundlers and optimization techniques, such as `Parcel`, to ensure fast rendering and efficient updates.

-> 📜 Browserslist Configuration
   In your `package.json`, you can specify the target browsers for your project:
   ```json
   "dependencies":{
    ......something........
   },
   "browserslist": ["last 1 Chrome version", "last 2 Firefox versions"]
   ```
   This configuration ensures your code will only work in the specified versions of Chrome and Firefox, excluding other browsers like Edge and Safari. For more information, visit [browserslist.dev](https://browserslist.dev).
   - You can also specify the country also visit[https://github.com/browserslist/browserslist#query-composition] : read this github repo.


## Episode 3: Laying the Foundation 🚀

1. Running Programs 🏃‍♂️
   - Whenever you don't know how to run a program, check the `package.json`. The scripts section will show you the commands.

   "scripts": {
    "start":"parcel index.html",    -> production build
    "build":"parcel build index.html",      ->development build
  },
   - Example:
     ```
     npm run start === npm start
     ```

2. JSX ✨
    - JavaScript Syntax to create React Element
   - JSX is not part of React.
   - In JSX, we don't write HTML inside JavaScript; it's different.
   - JSX is an HTML-like or XML-like syntax.

3. First the code is wriiten for whom machine / people
    - first it's for humans bcoz many developers are going to read this
    - and afterwards we are writting for the machine.

3. Babel 🔧
    - JSX code is transpiled before it reaches to Browser/ Js Engine manage by Parcel.
   - Babel is a JavaScript compiler/transpiler.
   - It converts code into a format that the JavaScript engine understands.
   - Babel is a library and is not created by Facebook.

4. React Code Conversion 🔄 -> Babel is responsible to convert it into JSX
   - First, React code is converted into `React.createElement`.
   - Then, it is transformed into a JavaScript object.
   - Finally, it is converted into an HTML element.

-> class="" in html, className="" in JSX both are same.

5. JSX Attributes 📝
   - Use camelCase to give attributes in JSX.

6. Multiline JSX Code 🖋️
   - For writing JSX code in multiple lines, use parentheses to wrap the code bcoz babel should now from where and till where the code is there
     ```jsx
     const jsxHeading = (
       <h1 className="head">
         Learning React 📍
       </h1>
     );  // Implicit Return
     ```

7. Components in React 🏗️
   - Class-Based Component: The OLD way to create components, Function name first letter should be capital.
   - Functional Component: The NEW way to create components, just a normal JavaScript function that returns JSX.
     ```jsx
     const HeadingComponent = () => {
       return (
         <h1>
           📍➡️ A functional component is a normal javascript function which returns a piece of JSX code / React Element is known as an FC
         </h1>
       ); // Explicit Return
     };
     ```
-> rendering a component : <HeadingComponent />
8. Component Composition 🔗
   - Calling a functional component inside another functional component or nested functional components is known as component composition.

-> In `{}` u can write any logic of javascript / expression of js -> we can also call functinal component as {HeadingComponent()}
-> In react we can use React Element inside a Functional component and vice varsa.

9. Security in React 🔒
   - React prevents cross-site attacks or malicious attacks by sanitizing each piece of code before running it, unlike JavaScript.

10. Function Calls in JSX 🔍
    - You can call a function inside JSX using curly braces `{}`, can write any javascript code inside it and can also perform any logical operation.
      ```jsx
      {Title()}
      ```


## Episode 4: 🎓 Talk Is Cheap, Show Me The Code.
-> we can use inline CSS in React like this, wherever we provide style attribute we have to provide it in a object:
    eg: const styleCard = {
        backgroundColor: "green"
    }

    cosnt RestaurantCard = () => {
        return (
            <div className="res-card" style={styleCard}>
                <h1>Ayush Food's Center</h1>
            </div>
        )
    }

1. 🧩 Functional Components: At the end of the day, a functional component is just a regular javascript function.🪧 Similarly, `props` are simply arguments passed to this function, react just wrap props inside an object and pass in functions as props.

-> Props are just pass in the form of object

2. 🚫 Props Are Immutable: `props` cannot be changed once set.

3. 🛠️ Config Driven UI: Create a UI based on provided configuration, keeping the config in one place, and the UI is dynamically generated based on that.
   - 📍 Location-Based Config: Configurations can be driven by user location to customize the UI based on regional preferences or requirements. This allows for more dynamic and personalized interfaces.

   - 📦 Reusability: Config Driven UIs promote reusability and scalability, as changes can be made centrally in the configuration without altering the core code.

-> how to use props properly
    const RestaurantCard = (props) => {
        const {resData(~~ here ~~)} = props;
        return (
            <div className="res-card">
                <h1>{resData.name}</h1>
            </div>
        )
    }
    
    const resObj = {....};
    <RestaurantCard (~~ whatever ll'be the name of key is should be pass there ~~)resData={resObj} />

4. 🔑 Keys in Lists: When using the `map()` function to iterate over an array, always pass a unique `key` to the parent element. This helps React identify and update elements efficiently.

   - ❌ Avoid Index as Key: Never use the array index as the key unless there is no unique ID available.



## Episode 5: Let's Get Hooked 🪝

1. 📚 Libraries and frameworks it makes ur developer experience easy, it makes you write less code and do more on the webpage.

2. 🚫 Never keep hard-coded strings inside a component like (eg: url)

-> write utilites hard coded data in a separate file and import it in the main file.
    eg: utils -> cosntant.js -> export const CDN_URL = "https://api.com"; 
        and write file name in camelCase only and variables name in SNAKE_CASE.

3. 🔄 first give and then take --> export and import
   Import & Export: Code likh ke elements ko export karna aur jo main file hai uske andar import karna.
    eg: sidebar, footer, cards --> export karna
        main file --> import karna

    a)export:
        i.single element export:
            eg: function Card(){}

                export default Card;

        ii.named export:
            eg: export function Add(){}
                export function Remove(){}


    b)import:
        i.single element import:
            eg: import Cart from "./fileName.jsx/js"

        ii.named imports:
            eg: import {Add, Remove} from "./fileName.jsx/js"

   Q: Can we use default import and named import in the same file?
   A: Yes, both can be used simultaneously without any errors.



4. 📏 Keep component files code under 100 lines & if it excceds then create another component.

-> React is Fast & Efficient at DOM Manipulation.

5. 💪 State Variable: `useState()` whenever we call useState() it gives a state variable
   ```javascript
   const [val, setVal] = useState({ name: 'Ayush' }); 

   const arr = useState({ name: 'Ayush' });   -> this is array destructing
    const [val, setVal] = arr;
   ```
   - in useState() the 2nd function is responsible for reconciliation algorithm and updates the UI / state variable.


   - The initial state is assigned to `val`.
   - `setVal` updates `val`.
   - Whenever a state variable is updated react re-renders the component.
   - React syncs data with the UI, updating the UI when data changes.

6. 🔧 React Hook: A normal JavaScript function provided by React it has it's own specific purpose to use it.

7. ⚙️ Types of Utility Functions:
   - `useState()`: Super powerful state variable
     - Keeps data in sync with the UI.
     - Efficient DOM manipulation.

8. 🎬 React Behind the Scenes:
   - Uses Reconciliation Algorithm (React Fiber) to update the DOM and UI (introduced in React-16 version).
   - Virtual DOM representation of the actual DOM.
   - Diff Algorithm finds the difference between OLD virtual DOM & NEW virtual DOM and try to update it on every render cycle.
   - More on React Fiber: React's Core Algorithm [React Fiber Architecture](https://github.com/acdlite/react-fiber-architecture)

9. ⚡ Why React is Fast:
   - Efficient DOM manipulation using the Virtual DOM.
   - Uses Diff Algorithm for comparing Virtual DOM and actual DOM.
   - Uses Reconciliation Algorithm to update the DOM.

10. Whenever an element name starting with `use` then it's a hook.


## Episode 6: Exploring the World 🌍

1. Monolith Architecture: This architecture combines the API, frontend, backend, authentication, and database into a single application. 🏢 Everything is interconnected, making it simpler but less flexible for scaling and updates.

2. Microservices Architecture: Here, each functionality like API, frontend, backend, authentication, and database is separated into individual services. 🛠️🔗 This approach follows the principles of separation of concerns and single responsibility, providing flexibility and scalability. In today's world, microservices are becoming the norm.

-> We are creating UI Microservices and Microservices are written in various languages like React(UI), Backend(Java), Database(MySQL), etc.

3. Load ➔ Render ➔ API ➔ Render: This sequence illustrates the process of loading a page, rendering the initial UI, fetching data from an API, and then rendering the updated UI. 🔄

4. useEffect(callback, [dependencies]): 
   - `useEffect` is a hook that takes a callback function and an array of dependencies. The callback runs after the component is rendered. 📅
   - Example:
     ```javascript
     useEffect(() => {
         console.log("useEffect Called");
     }, []);
     ```
   - This hook helps manage side effects like fetching data or setting up subscriptions.
   - First the Body of the component  is rendered and after that useEffect is called.

5. fetch(): This is a powerful function provided by the browser's JS engine to fetch data from a server. 🌐📬 It enables asynchronous operations, making web applications dynamic and interactive.

6. Shimmer UI: Instead of using traditional loaders like gifs, images, or videos, modern applications use `Shimmer UI`. ✨🚫🖼️ This technique provides a skeleton screen that mimics the page's layout, enhancing user experience during data loading.

7. Conditional Rendering: This involves rendering components based on certain conditions. 🔄❓ It ensures that only the necessary components are displayed, optimizing performance and user experience.
    eg:if(listOfRestaurant.length === 0){
        return <Shimmer />;
    }

8. Component Re-rendering: When a small change occurs in a component, the entire component re-renders. However, only the changed code is updated, while the rest remains the same. 🔄🖥️ React efficiently manages these updates to maintain performance.

9. State Updates and Reconciliation: Whenever a state variable updates, React triggers a reconciliation cycle, re-rendering the component. 🔄 This process ensures the UI is in sync with the state changes.

-> Whenever State variable update, react triggers a reconciliation cycle(re-renders the component)

10. React Fiber: The new reconciliation algorithm in React, called Fiber, efficiently finds differences between two virtual DOMs, new VD and old VD and updates the modified code only. ⚡🌐 It updates only the changed parts of the component, making React fast and responsive. This behind-the-scenes optimization is key to React's performance.

React's efficient handling of state changes, component updates, and rendering processes ensures a smooth and dynamic user experience.


## Episode 7: Finding The Path: About Routing 🛣️, Hooks like useState & useEffect

1. useEffect(callback, [dependency]):
   - Whenever the component is rendered, `useEffect` is called. If the dependency array is empty, `useEffect` is called only once. If the dependency array has values, `useEffect` is called whenever any of those values change. 🔄📅
     - `dependency` is not mandatory in `useEffect`. If not provided, `useEffect` is called every time the component is rendered. 🔄📅
     - An empty dependency array ensures `useEffect` is called only once. 🔄📅
     - If the dependency array contains values, `useEffect` is called whenever those values update. 🔄📅

2. useState():
   - Do not create `useState` outside your component. 🚫 Avoid creating `useState` inside conditional statements, loops, or functions. ❌🔁
     ```javascript
     // Incorrect usage
     for() {
        const [name, setName] = useState("Ayush");
     }

     if() {
        const [name, setName] = useState("Ayush");
     }

     function xyz() {
        const [name, setName] = useState("Ayush");
     }
     ```
   - `useState` is used to create local variables in your functional component. 📦 Call it at the top of your component. 🔝

3. react-router-dom:
   - Used for navigating between multiple pages in a React application. 🛤️
   - Install with `npm i react-router-dom`. 📦
   - `createBrowserRouter` and `RouterProvider` configure routing in your app. ⚙️
   - `Outlet` is a component that gets filled by the child components of a route. Behind the scenes, it converts into the component of that route in the HTML. 🧩
   - To create routes:
     ```javascript
     import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

     const AppLayout = () => {
         return (
             <div className='app'>
                 <Header />
                 <Outlet />  // Children components of the route are filled here.
             </div>
         );
     };

     const appRouter = createBrowserRouter([
         {
             path: '/',
             element: <AppLayout />,
             children: [
                 {
                     path: '/',
                     element: <Body />
                 },
                 {
                     path: '/about',
                     element: <About />  // /about path shows About component
                 },
                 {
                     path: '/contact',
                     element: <Contact />
                 }
             ],
             errorElement: <Error />  // Path not found shows Error component
         },
     ]);

     // Provide routing configuration to our app.
     root.render(<RouterProvider router={appRouter} />);
     ```

    - wherever u see `use` before any variable it's a hook.

   - `useRouteError`: A hook provided by `react-router-dom` that gives more data related to routing errors. 🚨
   - Never use `<a></a>` tags to link pages in React because they refresh the page and cause a full re-render. Use `Link` instead, which is provided by `react-router-dom`: 🔗🚫
     ```javascript
     import { Link } from 'react-router-dom';
     <Link to='/about'>About</Link>
     ```
   - Behind the scenes, `Link` is converted to an `<a href="#"></a>` tag. 🔗

4. Types of Routing:
    - Client-Side Routing in React 16

1. Definition: Routing is managed in the browser using React components.
2. Location: Routes are handled within the React application.
3. URL Handling: React Router manages URL changes without full page reloads.
4. Page Loading: Only the components associated with the route are re-rendered.
5. Performance: Fast transitions since only parts of the UI are updated.
6. Example: Using `react-router-dom` for routing.
   - Basic Setup: 
     ```jsx
     import React from 'react';
     import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

     const Home = () => <h2>Home Page</h2>;
     const About = () => <h2>About Page</h2>;

     function App() {
       return (
         <Router>
           <Switch>
             <Route path="/" exact component={Home} />
             <Route path="/about" component={About} />
           </Switch>
         </Router>
       );
     }

     export default App;
     ```

    - Server-Side Routing with React 16

1. Definition: Routing is managed by the server and serves different HTML pages based on the route.
2. Location: Routes are handled on the server before sending a response to the client.
3. URL Handling: Each URL request results in a new page load from the server.
4. Page Loading: The server provides the full HTML page for each route.
5. Performance: Slower transitions due to complete page reloads.
6. Example: When using server-side rendering (SSR) with frameworks like Next.js.
   - Basic Setup in Next.js:
     ```jsx
     // pages/index.js
     export default function Home() {
       return <h1>Home Page</h1>;
     }

     // pages/about.js
     export default function About() {
       return <h1>About Page</h1>;
     }
     ```


5. useParams:
   - The `useParams` hook in React Router is used to access URL parameters in a component. It returns an object of key-value pairs where the key is the parameter name and the value is the parameter value. 🗺️🔑

## Episode 8: Let's get classy 🎩: class Based Component
    1. Class based component: A Normal JS class which extends React.Component and have a render method which return's a peice of jsx code.
        - older way to defining a component
        - it's a normal javascript class
        - CBC syntax:
            class componentName extends React.Component{
                render(){
                    return(
                        <h1>Class Based Component</h1>
                    )
                }
            }
        (- FBC has function which returns a peice of JSX code.
        - CBC has a render method which returns a peice of JSX code.)
        -? why we write super(props) in constructor?
            - super(props) is used to call the constructor of the parent class.
            - it's used to access the parent class's properties and methods.

    2. State variable in CBC: big object contains all the state variables
        eg: this.state = {
            count: 0,
            count2: 2
        }
        render(){ this.state={count:0, count2:1} }
        
        NEVER UPDATE STATE VARIABLE DIRECTLY USING ASSIGHMENT OPERATOR NOTE IT!!

        - to update the state varialbe in CBC use `setState({ stateVariable })` to update
            eg: <h1>Count : {count}</h1>
                <button onClick={() => {
                    this.setState({
                        count:this.state.count + 1,
                        count2:this.state.count2 + 1,
                    })
                }} className='border rounded-lg'>Count Increase</button>

        - how this CBC is mounted/loaded on to the application
            ->loading of Class-Based Component
            ->after this constructor is load a new instance of class is created
            ->& after that render is called
            ->after then `componentDidMount ` method is called
            -> after we navigate to another page `componentWillUnmount` is called.

        - lifeCycle Method of Class-Based Component
            -> first `Parent Constructor` is rendered/mounted
            -> then `Parent Render` is rendered
            -> at the end of the `Parent Render` there is Child Class-Based Component.
            -> inside Child CBC `Child Constructor` is rendered
            -> then `Child Render` is rendered
            -> then `Child componentDidMount` is rendered
            -> then `Parent componentDidMount` is rendered
            --> that's we make api call inside an `componentDidMount`

        - Childrens lifecycle method diagram - [https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/]
            How it works
            - Parent Constructor
            - Parent Render

                - First Child Constructor
                - First Child Render

                - Second Child Constructor
                - Second Child Render

                - First ComponentDidMound
                - Second ComponentDidMound

            - Parent ComponentDidMound

        - it will batch the first child and second child and then it will render the parent componentDidMount.

    3. In Depth of Class-Based Component
        - Never Ever compare lifeCycle method with functinal-based Component 
            eg: useEffect

        - On Every First Render `ComponentDidMount` is called and after every subsequent render it is updated it is not mounted it is updated.

        - we have to use `componentWillUnmount` also bcoz if we don't use it then `componentDidMount` will be called again and again when we navigate to the same page.

        - 👉 Again watch this extra live session of 47 minutes only but worth it. 👈

## Episode 9: Optimising Our App
    - Single Responsibility Principle: reusable, maintainable, testable
        - every functon or component should have it's own single responsibility.

    - a hook at the end of the day is nothing but the utility function only.

    - custom hooks
        - while creating custom hooks always use `use` before the name of the custom hook, it's a best practice

    - Chunking, Code Splitting, Dynamic Bundling, lazy loading, Dynamic loading -> all these are used to make the code presize or divide the code in the different files to reduce the website loading time.
    - lazy loading, on demand loading -> load on the user demand

    - lazy() is a function given by a react package to load the component on demand.
        - import {lazy} from "react"; -> named import
        - it takes an callback function which returns the import statement of the component.
        - const About = lazy(() => import("./About"));

    - Suspense: it's a component given by react to show the loader while the component is loading.
        - wrap the lazy component inide the Suspense component.
        eg: <Suspense fallback={<h1>Loading...</h1> `we can also pass shimmer ui inside this`}>
                <About />
            </Suspense>

## Episode 10: Jo Dikhta Hai, Vo Bikta Hai.
    - SASS & SCSS -> used for styling but not good for production level 
    - styled component -> [https://styled-components.com/]
    - material ui -> [https://mui.com/material-ui/]
    - bootstrap -> [https://getbootstrap.com/]
    - chakra ui -> [https://v2.chakra-ui.com/]
    - ant design -> [https://ant.design/]
    - tailwind css -> [https://tailwindcss.com/]

    - installation proccess for parcel - [https://tailwindcss.com/docs/guides/parcel]

    - cons of tailwind
        - less readablitiy 
        - and looks ugly in the code

    - now every website should have a dark mode

## Episode 11: Data is the new Oil
    - Higher Order Component : HOC is a function which takes a component inside it & enhances back and return   component, at the end of the day normal javascript function.

    - React has two layers i.e UI Layer & Data Layer (UI Layer is powered by DATA layers)

    - Drop down menu or content is also known as accordion.

    - Controlled and UnControlled component: 
        - Controlled : the parent can control the child component is called as controlled component.

        - UnControlled : the parent can't control the child component it has it's own control  is called as uncontrolled component.

    - lifting the state up[https://react.dev/learn/sharing-state-between-components#lifting-state-up-by-example]

    - props drilling documentation[https://react.dev/learn/passing-data-deeply-with-context#the-problem-with-passing-props]

    - A global place where anybody can access it is known as react context.








# LEC_ 8

## Class  based component 

-It is nothing but the js class that extned  React.component class and return some part of jsx by unding render (){} function 

###  we can accept the props and use in jsx like this in the class based componenet  , 

```javascript
class UserClass extends React.Component{
    constructor(props){
        super(props);
    
    }
    
    render(){
let { name } = this.props;

        return(
            <div>
                  <h1> Name : {name}</h1>
                  <h1> Name : {this.props.name}</h1>
               
            </div>
        )
    }
}## Class-Based Components in React

Class-based components in React are JavaScript classes that extend the `React.Component` class. They provide a way to handle state, lifecycle methods, and JSX rendering within a React component. Below are the key points and explanations based on your notes.

### Basic Structure of a Class-Based Component

A class-based component must extend `React.Component` and use the `render()` method to return JSX.

```javascript
class UserClass extends React.Component {
  constructor(props) {
    super(props); // Initialize the component
  }

  render() {
    let { name } = this.props; // Destructure props
    return (
      <div>
        <h1>Name: {name}</h1>
        <h1>Name: {this.props.name}</h1> 
      </div>
    );
  }
}
```
- **`constructor(props)`**: The constructor is used to initialize state and bind event handlers. It's essential to call `super(props)` to access `this.props` inside the component.
- **`render()`**: This method must be defined in every class-based component. It returns the JSX that will be rendered on the screen.

### Handling State in Class Components

State is a private variable for each component that can change over time.

```javascript
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 12,
    };
  }

  render() {
    let { count2 } = this.state; // Destructure state

    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <h1>Count: {count2}</h1>
        <button onClick={() => {
          this.setState({
            count: this.state.count + 1,
            count2: this.state.count2 + 1,
          });
        }}>Increase Counts</button>
      </div>
    );
  }
}
```
- **`this.state`**: Holds the component's local state.
- **`this.setState()`**: Used to update the component's state. React will re-render the component whenever the state changes.
- **Why `count++` didn’t work?**: Because `++` modifies the value after the current operation in post-increment, so use `count + 1` instead to correctly update the state.

### Lifecycle Methods

1. **`componentDidMount()`**: Called after the component is rendered into the DOM for the first time. Typically used for making API calls, setting timers, or initializing data.
   
   ```javascript
   componentDidMount() {
     console.log("Component mounted");
     // API call or subscription
   }
   ```

2. **`componentDidUpdate()`**: Called whenever the component updates due to changes in props or state. Useful for responding to updates, like fetching new data when a prop changes.

   ```javascript
   componentDidUpdate(prevProps, prevState) {
     console.log("Component updated");
     // Handle updates like fetching data or recalculating state
   }
   ```

3. **`componentWillUnmount()`**: Called just before the component is removed from the DOM. This is useful for cleanup tasks, like canceling API calls or clearing timers.

   ```javascript
   componentWillUnmount() {
     console.log("Component unmounted");
     // Cleanup tasks
   }
   ```

### Example with All Lifecycle Methods

```javascript
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 12,
    };
  }

  componentDidMount() {
    console.log("Component mounted");
    // Perform API calls or set up subscriptions here
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component updated");
    // Respond to state or prop changes here
  }

  componentWillUnmount() {
    console.log("Component will unmount");
    // Clean up listeners or subscriptions here
  }

  render() {
    let { name } = this.props;
    let { count, count2 } = this.state;

    return (
      <div className="user-class m-4 text-white p-4 w-fit border border-pink-500">
        <h1>Name: {name}</h1>
        <h1>Count: {count}</h1>
        <h1>Count: {count2}</h1>
        <button onClick={() => {
          this.setState({
            count: count + 1,
            count2: count2 + 1,
          });
        }}>Increase Counts</button>
        <h3>Location: Ptown, Pune</h3>
        <h4>Contact: @kush1234</h4>
      </div>
    );
  }
}

export default UserClass;
```

### Execution Flow in Class-Based Components

When a class-based component is mounted, the flow is as follows:

1. **Constructor**: Initializes props and state.
2. **Render**: JSX is rendered to the DOM.
3. **ComponentDidMount**: This method is called right after the component is rendered.
4. **ComponentDidUpdate**: When the state or props change, this method is triggered.
5. **ComponentWillUnmount**: This method is called right before the component is removed from the DOM.

### Flow Example:
- Parent Constructor
- Parent Render
- Child Constructor
- Child Render
- Child `componentDidMount`
- Parent `componentDidMount`

### Debugging and Hooks Reference
- Hooks like `useEffect` in functional components can be used multiple times to handle side effects and cleanup, replacing the lifecycle methods of class-based components. 

For example, in a functional component, `useEffect(() => {...}, [])` behaves similarly to `componentDidMount`, and cleanup functions inside `useEffect` mimic `componentWillUnmount`.
---
---

Here’s a side-by-side comparison of **Class-Based Components** and **Function-Based Components** in React, along with lifecycle methods and their functional equivalents.

### Class-Based Component vs Function-Based Component

| **Class-Based Component**                          | **Function-Based Component (Hooks)**               |
|----------------------------------------------------|---------------------------------------------------|
| ```javascript                                     | ```javascript                                    |
| import React from "react";                        | import React, { useState, useEffect } from "react"; |
|                                                   |                                                   |
| class UserClass extends React.Component {         | function UserFunction(props) {                    |
|   constructor(props) {                            |   const [count, setCount] = useState(0);          |
|     super(props);                                 |   const [count2, setCount2] = useState(12);       |
|     this.state = {                                |                                                   |
|       count: 0,                                   |                                                   |
|       count2: 12,                                 |                                                   |
|     };                                            |                                                   |
|   }                                               |                                                   |
|                                                   |                                                   |
|   componentDidMount() {                           |   useEffect(() => {                               |
|     console.log("Component mounted");             |     console.log("Component mounted");             |
|     // API call or side effects                   |     // API call or side effects                   |
|   }                                               |   }, []);                                         |
|                                                   |                                                   |
|   componentDidUpdate(prevProps, prevState) {      |   useEffect(() => {                               |
|     console.log("Component updated");             |     console.log("Component updated");             |
|   }                                               |   });                                             |
|                                                   |                                                   |
|   componentWillUnmount() {                        |   useEffect(() => {                               |
|     console.log("Component will unmount");        |     return () => {                                |
|     // Cleanup tasks                              |       console.log("Component will unmount");      |
|   }                                               |     };                                            |
|                                                   |   }, []);                                         |
|   render() {                                      |                                                   |
|     return (                                      |   return (                                        |
|       <div>                                       |     <div>                                         |
|         <h1>Count: {this.state.count}</h1>         |       <h1>Count: {count}</h1>                     |
|         <h1>Count2: {this.state.count2}</h1>       |       <h1>Count2: {count2}</h1>                   |
|         <button onClick={() => {                  |       <button onClick={() => {                    |
|           this.setState({                         |         setCount(count + 1);                      |
|             count: this.state.count + 1,          |         setCount2(count2 + 1);                    |
|             count2: this.state.count2 + 1         |       }}>Increase Counts</button>                 |
|           });                                     |     </div>                                        |
|         }}>Increase Counts</button>               |   );                                              |
|       </div>                                      | }                                                 |
|     );                                            | ```                                               |
|   }                                               |                                                   |
| }                                                 |                                                   |
| ```                                               | ```                                               |

---

### Lifecycle Methods

| **Class-Based Component Lifecycle**                         | **Function-Based Component Equivalent (Hooks)**            |
|-------------------------------------------------------------|-----------------------------------------------------------|
| **`constructor()`**: Initializes state and binds methods.    | **`useState()`**: Initializes state in function component. |
| **`componentDidMount()`**: Runs after component is mounted.  | **`useEffect(() => {}, [])`**: Runs after the first render.|
| **`componentDidUpdate()`**: Runs after every update (state/props change). | **`useEffect(() => {})`**: Runs after every update (no dependency array).|
| **`componentWillUnmount()`**: Runs before component unmounts.| **`useEffect(() => { return () => {...} }, [])`**: Runs cleanup before unmounting.|

### Key Differences:
- **State**: In class components, state is managed through `this.state`, whereas in function components, `useState` hooks manage the state.
- **Lifecycle**: Class components have dedicated lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`, whereas function components use `useEffect` for similar side effects and cleanup logic.

In function components:
- The first argument to `useEffect` is a function, which optionally returns a cleanup function.
- The second argument is a dependency array. If omitted, `useEffect` runs after every render. If passed an empty array, it runs only once after the initial render.

### Flow Comparison:

| **Class-Based Component**                                  | **Function-Based Component**                              |
|------------------------------------------------------------|-----------------------------------------------------------|
| 1. Constructor                                             | 1. Component Initialization (useState).                   |
| 2. Render                                                  | 2. Render.                                                |
| 3. ComponentDidMount                                       | 3. useEffect with an empty array (runs once after render). |
| 4. State or Props Update                                   | 4. useState updates.                                      |
| 5. Render (re-renders due to state/props change).          | 5. useEffect without dependencies runs after every render. |
| 6. ComponentDidUpdate                                      | 6. useEffect runs after updates.                          |
| 7. ComponentWillUnmount                                    | 7. useEffect's cleanup function runs before unmounting.    |

This side-by-side format demonstrates how the same functionality is achieved in both class-based and function-based components in React.


### Conclusion

Class-based components in React are still useful for handling more complex state management and lifecycle events, though they are being gradually replaced by functional components with hooks (`useState`, `useEffect`), which provide a more concise way of writing similar functionality.

---
---

# LEC - 9

### Custom Hook and Lazy Loading in React

#### **Creating a Custom Hook**

Custom hooks in React allow us to reuse logic in function components. The name of a custom hook should ideally start with "use" to follow React's conventions, making it clear that it is a hook (although it's not mandatory, it's recommended).

#### Example of a Custom Hook:

```javascript
import { useState, useEffect } from "react";

// A custom hook to track online status
const useOnlineStatus = () => {
    let [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
        // Listen for offline event and set the status to false
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        });

        // Listen for online event and set the status to true
        window.addEventListener("online", () => {
            setOnlineStatus(true);
        });

        // Cleanup event listeners on unmount
        return () => {
            window.removeEventListener("offline", () => {});
            window.removeEventListener("online", () => {});
        };
    }, []);

    // Return the current online status (true or false)
    return onlineStatus;
};

export default useOnlineStatus;
```

#### **How to use this Custom Hook:**

```javascript
import useOnlineStatus from '../utils/useOnlineStatus';

function MyComponent() {
    const onlineStatus = useOnlineStatus();

    return (
        <div>
            <h1>Are you online? {onlineStatus ? "Yes" : "No"}</h1>
        </div>
    );
}
```

### **Key Points about Custom Hooks:**
- Custom hooks are reusable functions, just like components.
- They can use React hooks (`useState`, `useEffect`, etc.) internally.
- They help share logic between components without rendering UI.
- Commonly used to encapsulate logic such as fetching data, managing form input, or handling side effects.

---

### **Lazy Loading & Suspense**

#### **What is Lazy Loading?**

Lazy loading is a technique in React to split your code into smaller bundles and load them only when they are needed. By default, all components are bundled together, but using **lazy loading**, we can load specific components **on demand** (i.e., only when they are required in the app).

This process is also known as:
- **Code Splitting**
- **Dynamic Import**
- **On-Demand Loading**
- **Chunking**

#### **Why Use Lazy Loading?**
- **Performance Optimization**: Instead of loading everything upfront, lazy loading allows the browser to download only the necessary code to render the current view. This results in faster load times, especially for large applications.
- **Improved User Experience**: By loading components as needed, the initial loading experience becomes quicker and smoother for users.
- **Efficient Resource Usage**: Resources are loaded only when they are required, reducing the load on the browser.

#### **How to Implement Lazy Loading in React**

1. **Using `React.lazy()`**:
    - React provides the `lazy()` function, which is used to dynamically import components.

2. **Using `Suspense`**:
    - The `Suspense` component is used to wrap a lazy-loaded component and provide a fallback UI (like a loader) while the component is being loaded.

#### Example of Lazy Loading:

```javascript
import React, { lazy, Suspense } from "react";

// Lazy load the Grocery component
const Grocery = lazy(() => import('./components/Grocery'));

function App() {
    return (
        <div>
            {/* Use Suspense to display a fallback while the Grocery component is being loaded */}
            <Suspense fallback={<h1>Grocery is loading...</h1>}>
                <Grocery />
            </Suspense>
        </div>
    );
}

export default App;
```

#### Example of `Grocery` Component:

```javascript
import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

const Grocery = () => {
    let { user } = useContext(UserContext);

    return (
        <>
            <h1>This is the Grocery</h1>
            <h1 className="bg-slate-400 text-black">{user}</h1>
        </>
    );
};

export default Grocery;
```

#### **Route Configuration with Lazy Loading:**

```javascript
{
    path: "/grocery",
    element: (
        <Suspense fallback={<h1>Grocery is loading...</h1>}>
            <Grocery />
        </Suspense>
    ),
}
```

### **How Lazy Loading Works:**
1. **Initial Load**: When the app initially loads, only the main bundle is fetched (without loading all components).
2. **Component Load on Demand**: When a user navigates to the `/grocery` route or the `Grocery` component is rendered, React dynamically loads that component’s code.
3. **Fallback UI**: While the component is being loaded, the UI shows the fallback message or loader (`<h1>Grocery is loading...</h1>` in this case).
4. **Component Loaded**: Once loaded, the `Grocery` component is displayed.

---

### **Benefits of Lazy Loading**:
- **Reduces Initial Load Time**: Improves performance by loading only necessary code during the first page load.
- **Decreased Bundle Size**: Splits the app into smaller chunks, reducing the overall size of the main bundle.
- **Better User Experience**: The app becomes more responsive and faster, as users do not need to wait for all components to load.

### **Lazy Loading Summary**:
- Lazy loading is crucial for large apps with many components.
- It optimizes resource usage and ensures faster initial render times.
- React provides easy-to-use APIs (`lazy()` and `Suspense`) to implement lazy loading in your applications.


---

## LEC - 10: Tailwind CSS and Styling

- **Tailwind CSS** is a utility-first CSS framework for rapidly building custom designs.
- Tailwind offers low-level utility classes that can be combined to build any design without having to write custom CSS.
  
### Popular UI Libraries:
- **Chakra UI**
- **Ant Design**
- **Dev UI**
- **Material UI**

These libraries provide pre-designed components to help speed up development with ready-to-use styles and themes.

---
---

## LEC - 11: Higher Order Components & Lifting State Up

### 1. **Higher Order Components (HOC):**
- A **Higher Order Component** is a pattern in React that allows you to reuse component logic. HOCs are not part of the React API, but they are a common pattern used in React to share functionality across multiple components.
- It’s simply a function that takes a component as an argument and returns a new component with enhanced or modified behavior.

#### Example of a Higher Order Component:

```javascript
import React from 'react';

const withPromoted = (RestroCard) => {
  return (props) => (
    <div>
      <label className="relative top-7 px-2 py-1 bg-pink-600 z-10 rounded-md">Open</label>
      <RestroCard {...props} />
    </div>
  );
};

export default withPromoted;
```

### Usage of the HOC:

```javascript
import React from 'react';
import RestroCard from './RestroCard';
import withPromoted from './withPromoted';

const PromotedRestroCard = withPromoted(RestroCard);

const App = () => {
  const data = { /* some data */ };
  return <PromotedRestroCard data={data} />;
};

export default App;
```

### Where HOCs Are Used:
- **Accessing authentication state:** Enhancing components to check if a user is logged in or not.
- **Logging component render times:** Tracking how often components re-render for performance tuning.
- **Feature flags:** Dynamically enabling or disabling features in components.

---

### 2. **Lifting State Up:**
- **Lifting state up** refers to moving the state from child components to their common parent when multiple components need to share and use the same data. This helps in maintaining consistent state across the application.

#### Example:

In this scenario, `RestCategory` manages the visibility of menu items, but its visibility state (`showIdx`) is lifted up to the parent `ResturantMenu`, allowing multiple categories to control which one is open at a time.

```javascript
import React, { useState } from 'react';
import RestCategory from './RestCategory';
import Shimer from '../utils/Shimer';
import { useRestMenu } from '../utils/useRestroMenu';
import { IMAGE_URL } from '../utils/Constants';
import { useParams } from 'react-router-dom';

const ResturantMenu = () => {
  let [showIdx, setShowIdx] = useState(0);
  let { id } = useParams();
  let restMenu = useRestMenu(id);

  if (restMenu === null) return <Shimer />;

  let category = restMenu[4].groupedCard.cardGroupMap.REGULAR.cards.filter(crd => {
    return crd?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
  });

  return (
    <div className='w-screen py-4 overflow-hidden flex flex-col items-center justify-center'>
      <div className="heading my-8 text-2xl tracking-wider font-semibold text-amber-50/80 "> MENUS:-</div>
      {
        category.map((ctr, idx) => (
          <RestCategory key={idx} data={ctr.card.card} show={idx === showIdx} setShowIdx={() => setShowIdx(idx)} />
        ))
      }
    </div>
  );
};

export default ResturantMenu;
```

Here, the parent (`ResturantMenu`) maintains the `showIdx` state, and based on the `idx` value, child components (`RestCategory`) display the corresponding category items.

---

### 3. **Controlled vs Uncontrolled Components:**

#### **Controlled Components:**
- A **controlled component** is one where the form data is handled by the React component's state. The component's state is the "single source of truth" for the form's values.
  
  Example of a Controlled Input:

  ```javascript
  import React, { useState } from 'react';

  const ControlledInput = () => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
      setValue(e.target.value);
    };

    return (
      <input type="text" value={value} onChange={handleChange} />
    );
  };
  
  export default ControlledInput;
  ```

#### **Uncontrolled Components:**
- An **uncontrolled component** works like traditional form elements. The form data is managed by the DOM itself rather than by the React component's state.
  
  Example of an Uncontrolled Input:

  ```javascript
  import React, { useRef } from 'react';

  const UncontrolledInput = () => {
    const inputRef = useRef(null);

    const handleSubmit = () => {
      alert(inputRef.current.value);  // Accessing the value directly from the DOM
    };

    return (
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    );
  };

  export default UncontrolledInput;
  ```

---

### 4. **Props Drilling:**
- **Props Drilling** is when you need to pass data from a parent component down to deeply nested child components by passing it through all the intermediary components, even if they don’t need the data themselves. This can lead to repetitive and redundant code.

Example of Props Drilling:

```javascript
const Parent = () => {
  const data = "Hello World";
  return <Child data={data} />;
};

const Child = ({ data }) => {
  return <GrandChild data={data} />;
};

const GrandChild = ({ data }) => {
  return <p>{data}</p>;
};
```

To avoid props drilling, **Context API** or **Redux** can be used for state management.

This is a detailed explanation of **Higher Order Components**, **Lifting State Up**, **Controlled & Uncontrolled Components**, and **Props Drilling** in React.
--- 


---
---

### React Context API

React's Context API provides a way to share values (like data or functions) between components without the need to pass props manually at every level. It’s ideal when certain values (like user info, theme, or settings) need to be accessible across the component tree.

Let's break down the code you've shared into clear steps and explanations.

---

### Step 1: Creating Context

```javascript
import { createContext } from "react";

const UserContext = createContext({
    user: "Default User"
});

export default UserContext;
```

- **createContext**: The `createContext` function is used to initialize a context. You can optionally provide a default value (here, `{ user: "Default User" }`).
- **UserContext**: This is the context object created using `createContext`. It can now be used in your components to share values.

---

### Step 2: Using Context in Functional Components (with `useContext`)

```javascript
import { useContext } from "react";
import UserContext from '../utils/UserContext';

const data = useContext(UserContext);
```

- **useContext**: This React hook allows you to access the context values in functional components. Here, `UserContext` is imported, and `useContext(UserContext)` gives us access to the current context value.
- **data**: The `data` variable contains the current context value, which in this case is an object with the key `user`.

---

### Step 3: Using Context in Class Components (with `UserContext.Consumer`)

```javascript
import UserContext from "../utils/UserContext";

<UserContext.Consumer>
    {
        (data) => {
            return <p className="bg-red-600 p-2">{data.user}</p>
        }
    }
</UserContext.Consumer>
```

- **`UserContext.Consumer`**: This is a way to access context in class components or functional components (before hooks were introduced). The `Consumer` is a component that takes a function as a child. That function receives the current context value as its argument (in this case, `data`).
- **data.user**: Here, we access the `user` field from the `data` object that comes from `UserContext`.

---

### Step 4: Providing Context Values using `UserContext.Provider`

```jsx
<UserContext.Provider value={{ user: "Nitesh" }}>
    <div className="main w-screen min-h-[100vh] p-4 bg-slate-700">
        <UserContext.Provider value={{ user: "Rakesh" }}>
            <Nav />
        </UserContext.Provider>
        <Outlet />
    </div>
</UserContext.Provider>
```

- **`UserContext.Provider`**: This is how you define the value you want to share through the context. The `value` prop can be any data (here, it’s an object with the `user` field). 
- **Value Propagation**: 
    - In this example, the outer `Provider` has the value `{ user: "Nitesh" }`.
    - Inside this, there's another `Provider` with the value `{ user: "Rakesh" }`.
    - **Nesting Behavior**: The inner `Provider` (`Rakesh`) will override the outer `Provider` (`Nitesh`) for any components within its scope. So, the `Nav` component will receive `{ user: "Rakesh" }`, but the `Outlet` component will receive `{ user: "Nitesh" }`.

---

### Context API Summary

1. **Create a context**: Using `createContext()`, you can create a context with an optional default value.
2. **Provide values**: Using `UserContext.Provider`, you can pass down values to the entire component tree.
3. **Consume values**:
   - In functional components, use `useContext()` to access the context value.
   - In class components or older React versions, use `UserContext.Consumer` to consume the context value.

### Example of Overriding

In the given example:

- The first `Provider` has the value `user: "Nitesh"`.
- The second `Provider`, which wraps `Nav`, has the value `user: "Rakesh"`, which **overrides** the outer value only for components within its scope (here, `Nav`).

So:
- `Nav` will display **Rakesh** (because it is inside the inner `Provider`).
- `Outlet` will display **Nitesh** (because it is outside the inner `Provider` but inside the outer one). 

This is how nesting and overriding work with context.

---
---
## LEC - 12 

### Redux Toolkit (RTK) Setup with React: Step-by-Step Explanation

Redux Toolkit simplifies state management in React apps. It provides cleaner code, reduced boilerplate, and easier debugging through the **Redux DevTools**. Let's break down the steps for setting up Redux Toolkit (RTK) in your app, with key concepts like slices, dispatching actions, and reading from the store.

---

### 1. **Installing Required Packages**
First, ensure you have installed the necessary dependencies:

```bash
npm install @reduxjs/toolkit react-redux
```

---

### 2. **Creating a Redux Store**

In Redux, the **store** holds the global state of your application.

```javascript
import { configureStore } from "@reduxjs/toolkit";

const appStore = configureStore({});
export default appStore;
```

- **configureStore**: A function from Redux Toolkit that sets up the Redux store. It automatically configures middleware like `redux-thunk` for handling asynchronous logic.
- At this point, the store is empty (`{}`), but we'll add reducers later.

---

### 3. **Wrapping `App.jsx` in the Redux Provider**

To make the Redux store available to your React app, you need to wrap the app in a **Provider** component from `react-redux`. This ensures that all child components can access the Redux store.

```javascript
import { Provider } from "react-redux";
import appStore from '../utils/appStore';

<Provider store={appStore}>  
  <UserContext.Provider value={{user: username, setUsername: setUsername}}>
    <div className="main w-screen min-h-[100vh] p-4 bg-slate-700 ">
      <Nav />
      <Outlet />
    </div>
  </UserContext.Provider>
</Provider>
```

- **Provider**: The `Provider` component takes the `store` as a prop and makes it available to all components inside its tree.
- Now, Redux is connected to your app, and you can start using the store in your components.

---

### 4. **Creating a Slice (cartSlice) and Adding it to the Store**

A **slice** is a collection of Redux logic for a specific part of your app's state (e.g., cart, user). Each slice manages a single piece of state, along with the actions and reducers for that state.

```javascript
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items = [];
    }
  }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
```

- **createSlice**: This function creates a slice of the Redux store, including both the reducer logic and the corresponding actions.
  - `initialState`: Defines the initial state of this slice (`items: []`).
  - `reducers`: Contains functions that modify the state. For example:
    - `addItem`: Adds an item to the cart (`action.payload`).
    - `removeItem`: Removes the last item from the cart.
    - `clearCart`: Clears the entire cart.
  
Next, you need to add this slice (reducer) to the store:

```javascript
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer
  }
});

export default appStore;
```

- Now, your store includes the `cart` slice. The `cartReducer` will handle all cart-related state changes.

---

### 5. **Subscribing to the Store Using `useSelector`**

To read (or "subscribe" to) data from the Redux store, you use the `useSelector` hook.

```javascript
import { useSelector } from "react-redux";

let cart = useSelector((state) => state.cart.items);
console.log(cart);

<p className="font-bold text-pink-300">Cart: {cart.length}</p>
```

- **useSelector**: This hook allows you to access specific parts of the store’s state. Here, `state.cart.items` is being accessed, which holds the array of cart items.
- **Subscribing**: When you use `useSelector`, your component subscribes to that specific part of the store (in this case, `cart.items`). Whenever that part of the state changes, the component re-renders automatically.
  - **Best practice**: Only subscribe to the specific part of the state that your component needs to avoid unnecessary re-renders and improve performance.

---

### 6. **Dispatching Actions with `useDispatch`**

To write (or modify) data in the Redux store, you need to dispatch actions. This is done using the `useDispatch` hook.

```javascript
import { useDispatch } from "react-redux";
import { addItem } from '../utils/cartSlice';

const dispatch = useDispatch();

const handleItem = (item) => {
  // Dispatch an action
  dispatch(addItem(item));
  // { payload: "pizza" }
}

<button 
  onClick={() => handleItem(item)} 
  className="absolute text-xl rounded-full h-8 w-8 p-1 top-2 right-1 bg-red-400">+
</button>
```

- **useDispatch**: This hook provides the `dispatch` function, which is used to trigger actions.
- **dispatch**: You call `dispatch(addItem(item))` to add an item to the cart. The action `addItem` comes from `cartSlice.actions`.
- The dispatched action updates the Redux store, and any subscribed components (via `useSelector`) will automatically re-render.

---

### 7. **Important Notes on Redux**

- **Avoid subscribing to the whole store**: Always subscribe to the specific part of the store your component needs (like `state.cart.items`). Subscribing to the entire store can lead to performance issues as it triggers unnecessary re-renders.
- **Redux DevTools**: Redux DevTools is a powerful tool to visualize state changes and debug your application. Make sure it's enabled for easier development.

---

### Summary

1. **Store**: The central place where the global state lives.
2. **Provider**: Makes the Redux store available to all components.
3. **Slice**: Manages a specific piece of state (like a cart).
4. **useSelector**: Subscribes to specific state slices to read data.
5. **useDispatch**: Dispatches actions to modify the state.

By following this setup, you can efficiently manage state using Redux Toolkit and React, ensuring your components remain clean and your app performant!#
