import React, { useState } from 'react';

//packages
import { Link } from 'react-router-dom';

import "../CSS/Header.css";

import { RiMenu3Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";


const Header = () => {

  const [click , setClick] = useState(false)
  return (
    <>
 
  <header id='header'>

    <div className="inner-header">

      <div className='logo'>
         <h3>MRS</h3>
      </div>

      <div className={click ? "responsive_menu open" : "menu"}>
         <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#projects">Projects</a></li>    
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
            <li onClick={()=>alert("later i will update my information")}><a href="">About Me</a></li>
         </ul>
  
      </div>
       {click ? <div className='icon_div' ><RxCross1 className='menu_icon' onClick={()=>{setClick(false)}} />  </div> : 
       <div className='icon_div' > <RiMenu3Fill className='menu_icon'   onClick={()=>{setClick(true)}} /></div>  } 
  </div>
  </header>
 
    </>
  )
}

export default Header