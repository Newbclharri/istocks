import { Route, Link, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Stock from "../pages/Stock";
import Dashboard from "../pages/Dashboard";
import stocks from "../data";

export default function Main({text}) {
    return(
        <div>
            <h1>{text}</h1>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/stocks/:symbol" element={<Stock />}/>
                <Route path="/stocks" element={<Dashboard stocks={stocks}/>}/>                  
            </Routes>
        </div>
    )
}