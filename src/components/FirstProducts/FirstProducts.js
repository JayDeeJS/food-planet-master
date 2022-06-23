import React, {useState} from 'react';
import styles from "./FirstProducts.module.css";
import {Counter} from "../Counter/Counter";
import {BASE_URL} from "../../constants";
import classNames from "classnames";

const FirstProducts = (props) => {

    /*const changeBtnUI = () => {
        let classNames = require('classnames');
        class Button extends React.Component{
            isPressed;
            render() {
                let btnClass = classNames({
                    btn: true,
                    'btn-pressed': this.state.isPressed
                })
                return <button className={btnClass}>press</button>
            }
        }
    }*/

    const addCart = () => {
        const buyProduct = () => {
            const url = BASE_URL + "/cart";

            const obj = {
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
        buyProduct();

        let productsFromLocalStorage = {};
        const product = {};

        if (localStorage.getItem('cart')) {
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
                        className="btnCart"
                        onClick={() => addCart()}>'В КОРЗИНУ'
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FirstProducts;
