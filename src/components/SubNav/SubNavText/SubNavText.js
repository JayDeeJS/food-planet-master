import React from 'react';
import styles from "./SubNavText.module.css";

const SubNavText = (props) => {
    return (
        <div>
            <p className={styles.boldText}>{props.title}</p>
            <p className={styles.darkColor}>{props.desc}</p>
        </div>
    );
};

export default SubNavText;