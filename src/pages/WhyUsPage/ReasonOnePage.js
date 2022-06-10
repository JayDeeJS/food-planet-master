import React from 'react';
import styles from './WhyUsPage.module.css';
import images from "../../img";
import index from "../../constants";

const ReasonOnePage = () => {
    return (
        <div className={styles.outlineBrd}>
            <img src={images.delivery} alt=""/>
            <h4 className={styles.titleFont}>{index.whyUsReasonOneTitle}</h4>
            <p className={styles.textFont}>{index.whyUsReasonOneDesc}</p>
        </div>
    );
};

export default ReasonOnePage;