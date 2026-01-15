import React from 'react'
import { Routes , Route  } from 'react-router-dom';
import Home from '../Components/Routes/Home';
import About from '../Components/Routes/About';
import Contact from '../Components/Routes/Contact';
import User from '../Components/Routes/User';
import UserDetls from '../Components/Routes/UserDetls';


UserDetls
const Routing = () => {
  return (
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    {/* <Route path='/users' element={<User/>}>
    <Route path='/users/:name' element={<UserDetls/>}></Route>
    </Route> */}


</Routes>
  )
}

export default Routing