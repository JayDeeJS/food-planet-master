import React from "react";
import "./App.css";
import {Routes, Route} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import NavPage from "./pages/NavPage/NavPage";
import FooterPage from "./pages/FooterPage/FooterPage";

function App() {
    return (
        <div >
            <NavPage/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
            </Routes>
            <FooterPage/>
        </div>
    )
}

export default App;
