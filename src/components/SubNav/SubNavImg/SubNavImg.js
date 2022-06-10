import React from 'react';
import styles from "./SubNavImg.module.css";

const SubNavImg = (props) => {
    return (
        <img className={styles.subNavImg} src={props.img}/>
    );
};

export default SubNavImg;