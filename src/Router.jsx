import React from 'react';

import { BrowserRouter, Route , Routes } from 'react-router-dom';

//
import Home from './Layout/Home';
import Skills from './Layout/Skills';

const Router = () => {


  return (
    <>
   <BrowserRouter>
    
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/skills'  element={<Skills />} />
    </Routes>
   </BrowserRouter>
    </>
  )
}

export default Router