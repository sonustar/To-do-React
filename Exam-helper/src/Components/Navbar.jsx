import { FaComment } from "react-icons/fa";
import "./Navbar.css";
import React from 'react'
import { CiBellOn } from "react-icons/ci";
import { IoIosContact } from "react-icons/io";

const Navbar = () =>{

  return (
   
    <div className="navbar">
      
      <FaComment />
      {/* <img src="" alt="" /> */}
          
          <ul>
            <li>Home</li>
            <li>Result</li>
            <li>FAQ</li>
            <li>About Us </li>
            <li>Contact Us </li>
            {/* do */}
            
          </ul>
         
      <div className='search-box'>
        <input type="text" placeholder='search for exams' />
        <h1> <CiBellOn className="icon"/> </h1> 
       {/* CiBel <lOn className="icon"/>/ */}
      </div>
    
      <h1>< IoIosContact /></h1> 
    </div>

  );


}

export default  Navbar 