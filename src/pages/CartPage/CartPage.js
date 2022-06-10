import React, {useState, useEffect} from 'react';
import styles from "./CartPage.module.css";
import {BASE_URL} from "../../constants";
import Cart from "../../components/Cart/Cart";

const CartPage = () => {
    const [cart, setCart] = useState([]);

    const getCart = () => {
        const url = BASE_URL + '/cart';

        fetch(url)
            .then(response => response.json())
            .then(data => setCart(data));
    }

    useEffect(getCart, []);

    return (
        <div className={styles.body}>
            <h1>Корзина</h1>
            <h3>Продукты в корзине</h3>
            <div className={styles.cart}>
                {
                    cart.map((item) => {
                        return (
                            <Cart
                                id={item.id}
                                key={item.id}
                                img={item.img}
                                title={item.title}
                                desc={item.desc}
                                price={item.price}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default CartPage;