import { Route, Link, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Stock from "../pages/Stock";
import Dashboard from "../pages/Dashboard";
import stocks from "../data";

export default function Main({text}) {
    return(
        <div>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/stock/:symbol" element={<Stock stocks={stocks}/>}/>
                <Route path="/stocks" element={<Dashboard stocks={stocks}/>}/>                  
            </Routes>
        </div>
    )
}