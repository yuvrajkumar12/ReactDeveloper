import { useState } from 'react'
import './App.css'
import { Link, Route, Routes, NavLink } from 'react-router-dom'
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { About } from './pages/About';
import { Login } from './pages/Login';




function App() {
  const getStyle = ({ isActive }) => {
    return {
      color: isActive ? 'red' : ''
    }
  }


  return (
    <div className="App">
      <NavLink to="/" style={getStyle}>Home</NavLink>
      <NavLink to="/About" style={getStyle}>About</NavLink>
      <NavLink to="/Cart" style={getStyle}>Cart</NavLink>
       <NavLink to="/Login" style={getStyle}>Login</NavLink>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
