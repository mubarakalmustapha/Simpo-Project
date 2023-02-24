import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Table from './components/Table';
import Navbar from './components/Navbar';
import Logout from './components/Logout';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Table />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
