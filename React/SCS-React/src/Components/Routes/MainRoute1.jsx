import React from 'react'
import {   NavLink } from 'react-router-dom';
import Routing from '../../utils/Routing';

const MainRoute = () => {
  return (
    <div className='h-screen w-screen opa bg-slate-500 p-4'>
 
  <nav className='opacity-0'> 
    <NavLink    className='px-4 py-2   bg-slate-800 text-white text-xl' to={"/"}>
    
    {
        (e)=>{
            return (
                <span className={
                    [
                  e.isActive  ? "text-red-600" :""
                    ].join(' ')
                }>
                    Home
                </span>
            )
        }
    }
    
    
    
    </NavLink>
    {/* <NavLink  style={(e)=>{ return {color: e.isActive ? "green" :"red"} }}   className='px-4 py-2 bg-slate-300 text-white text-xl' to={"/"}>Home</NavLink> */}
    <NavLink  style={(e)=>{ return {color: e.isActive ? "green" :"red"} }} className='px-4 py-2 bg-slate-300 text-white text-xl' to={"/about"}>About</NavLink>
     
    
    
    <NavLink  className={(e)=>{
   return  [
    e.isActive ? 'text-red-500' :"" 
   ].join(' ')

//    return  e.isActive ? 'text-red-500' : ""

    }} to={"/contact"}>Contact</NavLink>
  </nav>


<nav className='flex  justify-center w-full'>
    <NavLink style={(e)=>{ return {backgroundColor: e.isActive ? "green" :"red"} }} className='px-4 py-2 bg-slate-700 text-white m-1 rounded-lg flex w-fit items-center justify-center' to='/'> Home</NavLink>
    <NavLink style={(e)=>{ return {backgroundColor: e.isActive ? "green" :"red"} }} className='px-4 py-2 bg-slate-700 text-white m-1 rounded-lg flex w-fit items-center justify-center' to='/about'> About</NavLink>
    <NavLink style={(e)=>{ return {backgroundColor: e.isActive ? "green" :"red"} }} className='px-4 py-2 bg-slate-700 text-white m-1 rounded-lg flex w-fit items-center justify-center' to='/users'> Users</NavLink>
    <NavLink style={(e)=>{ return {backgroundColor: e.isActive ? "green" :"red"} }} className='px-4 py-2 bg-slate-700 text-white m-1 rounded-lg flex w-fit items-center justify-center' to='/users/akshay'> Akshay</NavLink>
    <NavLink style={(e)=>{ return {backgroundColor: e.isActive ? "green" :"red"} }} className='px-4 py-2 bg-slate-700 text-white m-1 rounded-lg flex w-fit items-center justify-center' to='/users/rakesh'> Rakesh</NavLink>
    <NavLink style={(e)=>{ return {backgroundColor: e.isActive ? "green" :"red"} }} className='px-4 py-2 bg-slate-700 text-white m-1 rounded-lg flex w-fit items-center justify-center' to='/contact'> Contact</NavLink>
</nav>






<Routing/>





    </div>
  )
}

export default MainRoute ;