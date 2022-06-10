import React from 'react';
import styles from "./WhyUsPage.module.css";
import images from "../../img";
import index from "../../constants";

const ReasonFourPage = () => {
    return (
        <div className={styles.outlineBrd}>
            <img src={images.location} alt=""/>
            <h4 className={styles.titleFont}>{index.whyUsReasonFourTitle}</h4>
            <p className={styles.textFont}>{index.whyUsReasonFourDesc}</p>
        </div>
    );
};

export default ReasonFourPage;