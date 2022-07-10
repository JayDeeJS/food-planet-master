import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Pagination} from "swiper";
import styles from './FeedbackPage.module.css';
import FeedbackCommentPage from "./FeedbackCommentPage";
import FeedbackCommentPageTwo from "./FeedbackCommentPage2Two";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation"

const FeedbackPage = () => {
    return (
        <div className={styles.viewport}>
            <div className={styles.feedbackFrame}>
                <p className={styles.feedbackFont}>Отзывы</p>
            </div>
            <div className={styles.feedbackComments}>
                <div className={styles.swiperContainer}>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={2}
                        navigation={{
                            clickable: true
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide><FeedbackCommentPage/></SwiperSlide>
                        <SwiperSlide><FeedbackCommentPageTwo/></SwiperSlide>
                        <SwiperSlide><FeedbackCommentPage/></SwiperSlide>
                        <SwiperSlide><FeedbackCommentPageTwo/></SwiperSlide>
                        <SwiperSlide><FeedbackCommentPage/></SwiperSlide>
                        <SwiperSlide><FeedbackCommentPageTwo/></SwiperSlide>
                        <SwiperSlide><FeedbackCommentPage/></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default FeedbackPage;
