import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Stock from './pages/Stock';
import stocks from './data';
import { useState, useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <Main text="Main Components"/>    
    </div>
  );
}

export default App;
