import React from 'react';
import styles from "./WhyUs.module.css";

const WhyUsOne = (props) => {
    return (
        <div className={styles.outlineBrd}>
            <img className={styles.img} src={props.img} alt=""/>
            <h4 className={styles.titleFont}>{props.title}</h4>
            <p className={styles.textFont}>{props.desc}</p>
        </div>
    );
};

export default WhyUsOne;