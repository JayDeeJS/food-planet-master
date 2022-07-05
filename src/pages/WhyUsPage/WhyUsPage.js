import React, {useEffect, useState} from 'react';
import styles from "./WhyUsPage.module.css";
import {BASE_URL} from "../../constants";
import WhyUsOne from "../../components/WhyUs/WhyUsOne";
import toast from "react-hot-toast";

const WhyUsPage = () => {
    const [reason, setReason] = useState([]);

    const getReason = () => {
        const url = BASE_URL + '/reasons';
        fetch(url)
            .then(response => {
                if (response.status === 200){
                    return response.json();
                } else {
                    throw new Error(response.status);
                }
            })
            .then(data => setReason(data))
            .catch(err => toast.error(`Упс, ошибка: ${err.message} в WhyUsPage.js`));
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
