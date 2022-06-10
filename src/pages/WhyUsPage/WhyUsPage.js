import React, {useEffect, useState} from 'react';
import styles from "./WhyUsPage.module.css";
import {BASE_URL} from "../../constants";
import WhyUsOne from "../../components/WhyUs/WhyUsOne";

const WhyUsPage = () => {
    const [reason, setReason] = useState([]);

    const getReason = () => {
        const url = BASE_URL + '/reasons';
        fetch(url)
            .then(response => response.json())
            .then(data => setReason(data));
    }

    useEffect(getReason, []);

    return (
        <div className={styles.viewport}>
            <div className={styles.whyUsFrame}>
                <p className={styles.whyUsFont}>Почему выбирают нас:</p>
            </div>
            <div className={styles.reasonsWhy}>
                {
                    reason.map((item) => {
                        return (
                            <WhyUsOne
                                id={item.id}
                                key={item.id}
                                img={item.img}
                                title={item.title}
                                desc={item.desc}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default WhyUsPage;