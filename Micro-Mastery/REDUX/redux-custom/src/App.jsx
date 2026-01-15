import React from 'react';
import {Link, NavLink, Route , Routes} from 'react-router-dom';
import User from './User';
import Home from './Home'
import Product from './Product';
function App() {

    return (
        <>
            <div className='h-screen w-screen bg-slate-500'>
     <nav className='p-4 w-screen flex justify-center'>
    {
        ["user", "product"].map(elem => {
            return <NavLink className={(e) => "bg-green-400 m-1 rounded-md p-2" + (e.isActive ? " bg-blue-500" : "")} key={elem} to={elem}>{elem}</NavLink>
        })
    }
</nav>
<Routes>
    <Route path='/' element={<Home/>} ></Route>
    <Route path='/user' element={<User/>} ></Route>
    <Route path='/product' element={<Product/>} ></Route>
</Routes>
            </div>
        </>
    );
}

export default App;
