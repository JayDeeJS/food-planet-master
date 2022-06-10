import React from 'react';
import styles from "./SecondProducts.module.css";
import {Counter} from "../Counter/Counter";

const SecondProducts = (props) => {
    return (
        <div className={styles.singleItem}>
            <div className={styles.singleItemContent}>
                <img className={styles.singleItemSize} src={props.img} alt=""/>
                <h4 className={styles.properSpacing}>{props.title}</h4>
                <span className={styles.textAlign}>{props.desc}</span>
                <h4 className={styles.properSpacing}>{props.price}</h4>
                <div>
                    <Counter/>
                </div>
            </div>
        </div>
    );
};

export default SecondProducts;