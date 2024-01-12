
import React from 'react'
import { CiBellOn } from "react-icons/ci";

const Navbar = () =>{

  return (
   
    <div>
      <img src="" alt="" />
          
          <ul>
            <li>Home</li>
            <li>Result</li>
            <li>FAQ</li>
            <li>About Us </li>
            <li>Contact Us </li>
            
          </ul>
         
      <div className='search-box'>
        <input type="text" placeholder='search' />
        <CiBellOn />
      </div>

    </div>

  );


}

export default  Navbar 