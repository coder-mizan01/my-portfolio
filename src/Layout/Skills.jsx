import React from 'react';

//css
import "../CSS/skills.css"

const Skills = () => {
  const handleValue = () =>{
    return null
  }
  return (
    <>

    <section id='skills'>
        <div className='title'><h2>Skills</h2></div>
    <div className='html_css'>
      <label htmlFor="">html & css</label>
      <input type="range" min="1" max="100" value="90" onChange={handleValue}  />
    </div>

    <div className='javascript'>
      <label htmlFor="">javascript</label>
      <input type="range" min="1" max="100" value="75" onChange={handleValue}  />
    </div>

    <div className='react'>
      <label htmlFor="">react</label>
      <input type="range" min="1" max="100" value="80"  onChange={handleValue} />
    </div>

    <div className='git_github'>
      <label htmlFor="">git & github</label>
      <input type="range" min="1" max="100" value="75" onChange={handleValue} />
    </div>

    <div className='express'>
      <label htmlFor="">express js</label>
      <input type="range" min="1" max="100" value="50" onChange={handleValue}  />
    </div>

    <div className='mongodb'>
      <label htmlFor="">mongodb</label>
      <input type="range" min="1" max="100" value="35"  onChange={handleValue} />
    </div>  
  
      
    </section>
    </>
  )
}

export default Skills