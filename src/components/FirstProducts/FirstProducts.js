import React from 'react';
import styles from "./FirstProducts.module.css";
import toast from "react-hot-toast";
import {Counter} from "../Counter/Counter";
import CartBtn from "../CartBtn/CartBtn";

const FirstProducts = (props) => {

    const addCart = () => {

        /*const buyProduct = () => {
            const url = BASE_URL + "/cart";

            const obj = {
                "id": props.id,
                "img": props.img,
                "desc": props.desc,
                "price": props.price,
                "title": props.title
            }

            const options = {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(obj)
            }
            fetch(url, options)
                .then(response => response.json())
                .then(data => data);
        }

        buyProduct();*/

        let productsFromLocalStorage = {};
        const product = {};

        if (localStorage.getItem('cart')) {
            productsFromLocalStorage = JSON.parse(localStorage.getItem('cart'));
        }

        product[props.id] = {
            ...props
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
        <div className={styles.newProduct}>
            <img className={styles.newProductSize} src={props.img} alt=""/>
            <div className={styles.newProductDesc}>
                <h4>{props.title}</h4>
                <p className={styles.smallFont}>{props.desc}</p>
                <h4>{props.price}</h4>
                <div>
                    <Counter/>
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
    );
};

export default FirstProducts;
