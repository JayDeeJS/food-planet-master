import React, {useState} from 'react';
import {Context} from "../../context/context";
import styles from "./SecondProducts.module.css";
import toast from "react-hot-toast";
import CartBtn from "../CartBtn/CartBtn";
import Counter from "../Counter/Counter";

const SecondProducts = (props) => {

    let [count, setCount] = useState(1);

    const addCart = () => {
        let productsFromLocalStorage = {};
        const product = {};

        if (localStorage.getItem('cart')) {
            productsFromLocalStorage = JSON.parse(localStorage.getItem('cart'));
        }

        product[props.id] = {
            ...props,
            quantity: count
        }
        localStorage.setItem('cart', JSON.stringify({...productsFromLocalStorage, ...product}));

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
            <div className={styles.singleItem}>
                <div className={styles.singleItemContent}>
                    <img className={styles.singleItemSize} src={props.img} alt=""/>
                    <h4 className={styles.properSpacing}>{props.title}</h4>
                    <span className={styles.textAlign}>{props.desc}</span>
                    <h4 className={styles.properSpacing}>{props.price}</h4>
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

export default SecondProducts;
