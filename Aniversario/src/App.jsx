import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './components/inicio';
import Recuerdos from './components/Recuerdos';
import Video from './components/Video';

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path = '/' element = {<Inicio/>}/>
        <Route path = '/recuerdos' element = {<Recuerdos/>}/>
        <Route path = '/video' element = {<Video/>}/>      
      </Routes>
    </Router>
  )
}

export default App
