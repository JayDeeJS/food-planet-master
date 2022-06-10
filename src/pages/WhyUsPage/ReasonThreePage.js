import React from 'react';
import styles from "./WhyUsPage.module.css";
import images from "../../img";
import index from "../../constants";

const ReasonThreePage = () => {
    return (
        <div className={styles.outlineBrd}>
            <img src={images.uniqueMenu} alt=""/>
            <h4 className={styles.titleFont}>{index.whyUsReasonThreeTitle}</h4>
            <p className={styles.textFont}>{index.whyUsReasonThreeDesc}</p>
        </div>
    );
};

export default ReasonThreePage;