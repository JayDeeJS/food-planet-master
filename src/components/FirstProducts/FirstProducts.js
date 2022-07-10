import React, {useState} from 'react';
import {Context} from "../../context/context";
import styles from "./FirstProducts.module.css";
import toast from "react-hot-toast";
import CartBtn from "../CartBtn/CartBtn";
import Counter from "../Counter/Counter";

const FirstProducts = (props) => {

    let [count, setCount] = useState(1);

    const addCart = () => {
        let productsFromStorage = {};
        const product = {};

        if (localStorage.getItem('cart')) {
            productsFromStorage = JSON.parse(localStorage.getItem('cart'));
        }

        product[props.id] = {
            ...props,
            quantity: count
        }

        localStorage.setItem('cart', JSON.stringify({...productsFromStorage, ...product}));

        toast.success(`${props.title} добавлен(а) в Корзину!`, {
            style: {
                border: '2px solid #d1db17',
                padding: '16px',
                color: '#e66322',
            },
            iconTheme: {
                primary: '#14e040',
                secondary: '#e7f13b',
            },
        });
    }

    return (
        <Context.Provider value={{count, setCount}}>
            <div className={styles.newProduct}>
                <img className={styles.newProductSize} src={props.img} alt=""/>
                <div className={styles.newProductDesc}>
                    <h4>{props.title}</h4>
                    <p className={styles.smallFont}>{props.desc}</p>
                    <h4>{props.price}</h4>
                    <div>
                        <div className={styles.btnFrame}>
                            <Counter/>
                        </div>
                    </div>
                    <div>
                        <CartBtn
                            addCart={addCart}
                            id={props.id}
                            price={props.price}
                            quantity={props.quantity}
                        />
                    </div>
                </div>
            </div>
        </Context.Provider>
    );
};

export default FirstProducts;
