import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import changeTheme  from './Store/themeSlice';


function Header() {

  const lightMode=useSelector((state)=>state.theme.lightMode);
  const dispatch= useDispatch();


  // const status_function=()=>{
  //   if(status==false)
  //   {
  //     setStatus(true);
  //   }
  //   else
  //   {
  //     setStatus(false);
  //   }
  // }



  return (
    <div className='h-28 p-6 mt-2 flex justify-between bg-[hsl(220,71%,15%)]' >
    
    <div >

    <img src="https://cdn-ilcimaj.nitrocdn.com/GTjtvzbibdykcGydBetzmwDFYjoWfdwp/assets/images/optimized/rev-5e44c2a/www.trueigtech.com/wp-content/uploads/2024/06/ITech_White.png" className="h-12" 
    alt="Logo"></img>

    </div>

      <div >
        <ul className='flex gap-6 text-white text-lg font-bold  items-center'>
   
    
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/contact">CONTACT</Link>
            <Link to="/team">MEMBERS</Link>
            <Link className="p-2 border rounded-md " to="/form">Register</Link>

            <button onClick={() => dispatch(changeTheme())}className="p-2 border rounded-md"
            >
        {lightMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
     
        </ul>
      </div>  

    </div>
  )
}

export default Header;