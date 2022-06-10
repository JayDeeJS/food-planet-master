import React from 'react';
import styles from "./FirstProducts.module.css";
import {Counter} from "../Counter/Counter";
import {BASE_URL} from "../../constants";

const FirstProducts = (props) => {
    const addCart = () => {
        const buyProduct = () => {
            const url = BASE_URL + "/cart";

            const obj = {
                "img":props.img,
                "desc":props.desc,
                "price":props.price,
                "title":props.title
            }

            const options = {
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(obj)
            }
            fetch(url, options)
                .then(response => response.json())
                .then(data => console.log(data));
        }
        buyProduct();

        let productsFromLocalStorage = {};
        const product = {};

        if (localStorage.getItem('cart')){
            productsFromLocalStorage = JSON.parse(localStorage.getItem('cart'));
        }

        product[props.id] = {
            ...props
        }
        localStorage.setItem('cart', JSON.stringify({...productsFromLocalStorage, ...product}));
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
                    <button
                        onClick={addCart}
                        className={styles.btnCart}>
                        В КОРЗИНУ
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FirstProducts;