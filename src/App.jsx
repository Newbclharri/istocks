import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/pages/About';
import Dashboard from './components/pages/Dashboard';
import Stock from './components/pages/Stock';
import data from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Routes>
        <Route path="/" element={<Main text="main component"/>} />
        <Route path="/about" element={<About />} />
        <Route path="/stocks" element={<Dashboard />} />
        <Route path="/stocks/symbol" element={<Stock />}/>
      </Routes>
    
    </div>
  );
}

export default App;
