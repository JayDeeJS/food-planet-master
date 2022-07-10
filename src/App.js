import React, {useState} from "react";
import "./App.css";
import {Routes, Route} from "react-router-dom";
import {Toaster} from "react-hot-toast";
import {Context} from "./context/context";
import MainPage from "./pages/MainPage/MainPage";
import NavPage from "./pages/NavPage/NavPage";
import FooterPage from "./pages/FooterPage/FooterPage";
import CartPage from "./pages/CartPage/CartPage";

function App() {
    /*let [count, setCount] = useState(1);

    const incrQty = () => {
        setCount(prevState => prevState + 1);
    }

    const decrQty = () => {
        (count === 0)
            ? setCount(prevState => prevState)
            : setCount(prevState => prevState - 1)
    }*/

    return (
        <>
            <NavPage/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/cart" element={<CartPage/>}/>
            </Routes>
            <FooterPage/>
            <Toaster/>
        </>
    )
}

export default App;
