import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Authentication from './pages/Authentication/Authentication';

function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/authentication' element={ <Authentication/> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
