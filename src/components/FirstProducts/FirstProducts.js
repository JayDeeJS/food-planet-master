import React from 'react';
import styles from "./FirstProducts.module.css";
import {Counter} from "../Counter/Counter";

const FirstProducts = (props) => {
    return (
        <div className={styles.newProduct}>
            <img className={styles.newProductSize} src={props.img} alt=""/>
            <div className={styles.newProductDesc}>
                <h4>Чизбургер</h4>
                <p className={styles.smallFont}>{props.desc}</p>
                <h4>{props.price}</h4>
                <div>
                    <Counter/>
                </div>
            </div>
        </div>
    );
};

export default FirstProducts;