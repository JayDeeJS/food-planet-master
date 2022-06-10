import React from 'react';
import styles from './FeedbackPage.module.css';
import FeedbackCommentPage from "./FeedbackCommentPage";

const FeedbackPage = () => {
    return (
        <div className={styles.viewport}>
            <div className={styles.feedbackFrame}>
                <p className={styles.feedbackFont}>Отзывы</p>
            </div>
            <div className={styles.feedbackComments}>
                <FeedbackCommentPage/>
                <FeedbackCommentPage/>
                <FeedbackCommentPage/>
                <FeedbackCommentPage/>
            </div>
        </div>
    );
};

export default FeedbackPage;