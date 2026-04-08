import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './components'

function App() {

  return (
  <BrowserRouter>
  <Routes>
    <Route exact path="/" element={<HomePage/>}>

    </Route>
  </Routes>
  </BrowserRouter>  )
}

export default App
