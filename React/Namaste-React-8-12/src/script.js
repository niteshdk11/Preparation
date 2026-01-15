import React, { lazy, Suspense } from "react";
import { createRoot } from 'react-dom/client';
import App from './components/App'
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import RestroCards from "./components/RestroCards";
import ResturantMenu from "./components/ResturantMenu";
import Cart from "./components/Card";

const Grocery = lazy(()=>import('./components/Grocery'))
let createRoutes = createBrowserRouter([
    
    {
        path:"/" ,
        element:<App/> ,
        children :[
            {
path:"/" ,
element : <RestroCards/>
            } ,
            {
                path:"/about" ,
                element:<About/> , 
            } ,
            {
                path:"/grocery" ,
                element:<Suspense fallback={<h1>Grocery is loading</h1>}>
                    <Grocery/></Suspense> , 
            } ,
            {
                path:"rest/:id" ,
                element:<ResturantMenu/>
            },
            {
                path:"/cart" ,
                element:<Cart/>
            }
        ] ,
        errorElement:<Error/>
        
    } ,
 
   
])



let root = createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={createRoutes} />)




