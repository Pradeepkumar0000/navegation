
import React from 'react';
import Home from './Pages/Home.'
import About from './Pages/About';
import Navbar from './Pages/Navbar';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Error from './Pages/Error';
import {Routes, Route} from 'react-router-dom'
import "./Style.css"


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;