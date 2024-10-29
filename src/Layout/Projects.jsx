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
            <Link to={`https://unishop-frontend.vercel.app`} target='blank' className='live-button'>Live</Link>
            <Link to={`https://github.com/coder-mizan01/unishop`} target='blank' className='code-button'>Code</Link>
          </div>  
               <img src="project1.JPG" alt="" />
         </div>

         <div className='project'>
         <div className='project-overlay'>
            <Link to={`https://drag-drop-gallery-app.netlify.app`} target='blank'  className='live-button'>Live</Link>
            <Link to={`https://github.com/coder-mizan01/Gallery-App`} target='blank' 
             className='code-button'>Code</Link>
          </div>  
               <img src="project2.JPG" alt="" />
            </div>


     </section>
    </>

  )
}

export default Projects
