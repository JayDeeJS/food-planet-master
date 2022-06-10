import React from 'react';
import styles from "./WhyUsPage.module.css";
import ReasonOnePage from "./ReasonOnePage";
import ReasonTwoPage from "./ReasonTwoPage";
import ReasonThreePage from "./ReasonThreePage";
import ReasonFourPage from "./ReasonFourPage";

const WhyUsPage = () => {
    return (
        <div className={styles.viewport}>
            <div className={styles.whyUsFrame}>
                <p className={styles.whyUsFont}>Почему выбирают нас:</p>
            </div>
            <div className={styles.reasonsWhy}>
                <ReasonOnePage/>
                <ReasonTwoPage/>
                <ReasonThreePage/>
                <ReasonFourPage/>
            </div>
        </div>
    );
};

export default WhyUsPage;