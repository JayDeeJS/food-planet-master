import React from 'react';
import styles from "./FeedbackPage.module.css";
import images from "../../media";
import index from "../../constants";

const FeedbackCommentPageTwo = () => {
    return (
        <div className={styles.imgFrame}>
            <div className={styles.bgImg}>
                <img className={styles.headerImg} src={images.blackHole} alt=""/>
                <div className={styles.feedbackUser}>
                    <span className={styles.userName}>{index.feedbackUserNameTwo}</span>
                    <img src={images.penIcon} alt=""/>
                </div>
                <p className={styles.textFont}>{index.feedbackUserCommentTwo}</p>
                <span className={styles.date}>{index.feedbackCommentDateTwo}</span>
            </div>
        </div>
    );
};

export default FeedbackCommentPageTwo;
