import React from 'react';

//packages
import { Link } from 'react-router-dom';

import "../CSS/Projects.css"

export const Projects = () => {
  return (
    <>
     <section id='projects'>
        <h2>Projects</h2>
         <div className='project'>
         <div className='project-overlay'>
            <Link to={`https://shopee01.netlify.app/`} target='blank' className='live-button'>Live</Link>
            <Link to={`https://github.com/coder-mizan01/Shopee`} target='blank' className='code-button'>Code</Link>
          </div>  
               <img src="project1.JPG" alt="" />
         </div>

         <div className='project'>
         <div className='project-overlay'>
            <Link to={`https://test-taker.netlify.app`} target='blank'  className='live-button'>Live</Link>
            <Link to={`https://github.com/coder-mizan01/Test-Taker`} target='blank' 
             className='code-button'>Code</Link>
          </div>
               <img src="project1.JPG" alt="" />
            </div>


     </section>
    </>

  )
}

export default Projects
