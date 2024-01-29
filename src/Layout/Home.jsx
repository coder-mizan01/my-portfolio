import React from 'react';

import Cover from './Cover';
import Contact from './Contact';
import Skills from "./Skills"
import  Projects  from './Projects';
import Footer from './Footer';


const Home = () => {
  return (
    <>
  <Cover />
  <Skills />
  <Projects />
  <Contact />
  <Footer />
    </>
  )
}

export default Home