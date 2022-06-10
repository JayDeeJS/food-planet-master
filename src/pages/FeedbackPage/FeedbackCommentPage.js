import React from 'react';
import styles from "./FeedbackPage.module.css";
import images from "../../img";
import index from "../../constants";

const FeedbackCommentPage = () => {
    return (
        <div className={styles.imgFrame}>
            <div className={styles.bgImg}>
                <img className={styles.headerImg} src={images.greyHole} alt=""/>
                <div className={styles.feedbackUser}>
                    <span className={styles.userName}>{index.feedbackUserName}</span>
                    <img src={images.penIcon} alt=""/>
                </div>
                <p className={styles.textFont}>{index.feedbackUserComment}</p>
                <span className={styles.date}>{index.feedbackCommentDate}</span>
            </div>
        </div>
    );
};

export default FeedbackCommentPage;