import React from "react";
import "./App.css";
import {Routes, Route} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import NavPage from "./pages/NavPage/NavPage";
import FooterPage from "./pages/FooterPage/FooterPage";
import CartPage from "./pages/CartPage/CartPage";

function App() {
    return (
        <div >
            <NavPage/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/cart" element={<CartPage/>}/>
            </Routes>
            <FooterPage/>
        </div>
    )
}

export default App;
