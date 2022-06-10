import React from 'react';
import styles from "./Cart.module.css";
import {BASE_URL} from "../../constants";

const Cart = (props) => {
    const deleteProduct = () => {
        const productId = props.id;

        const url = BASE_URL + '/cart/' + productId;

        const options = {
            method: "DELETE"
        }
        fetch(url, options)
            .then(response => response.json())
            .then(data => data)
    }

    return (
        <>
            <div className={styles.cartRow}>
                <span className={styles.productDelete} onClick={deleteProduct}>&#10008;</span>
                <img className={styles.productImg} src={props.img} alt=""/>
                <div className={styles.cartCol}>
                    <h4 className={styles.lessSpacing}>{props.title}</h4>
                    <p className={styles.productText}>{props.desc}</p>
                </div>
                <div className={styles.cartCol}>
                    <h3>Скидка</h3>
                    <h3>0%</h3>
                </div>
                <div className={styles.cartCol}>
                    <h3>Цена</h3>
                    <h3 className={styles.productText}>{props.price}</h3>
                </div>
            </div>
            <hr className={styles.line}/>
        </>
    );
};

export default Cart;