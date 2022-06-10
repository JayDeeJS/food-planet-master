import React from 'react';
import styles from "./WhyUsPage.module.css";
import images from "../../img";
import index from "../../constants";

const ReasonTwoPage = () => {
    return (
        <div className={styles.outlineBrd}>
            <img src={images.freshProduct} alt=""/>
            <h4 className={styles.titleFont}>{index.whyUsReasonTwoTitle}</h4>
            <p className={styles.textFont}>{index.whyUsReasonTwoDesc}</p>
        </div>
    );
};

export default ReasonTwoPage;