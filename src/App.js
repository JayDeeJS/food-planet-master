import React, {useState} from "react";
import {Routes, Route} from "react-router-dom";
import {Context} from "./context/context";
import {Toaster} from "react-hot-toast";
import MainPage from "./pages/MainPage/MainPage";
import NavPage from "./pages/NavPage/NavPage";
import FooterPage from "./pages/FooterPage/FooterPage";
import CartPage from "./pages/CartPage/CartPage";
import "./App.css";

function App() {
    const [productsFromStorage, setProductsFromStorage] = useState([]);

    const calcTotalQty = productsFromStorage.reduce((quantity, product) => !product.quantity
        ? 0
        : quantity + product.quantity, 0)

    return (
        <Context.Provider value={{productsFromStorage, setProductsFromStorage}}>
            <NavPage
                quantity={calcTotalQty}
            />
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/cart" element={<CartPage/>}/>
            </Routes>
            <FooterPage/>
            <Toaster/>
        </Context.Provider>
    )
}

export default App;
