import React, {useEffect, useState} from "react";
import {BASE_URL} from "../../constants";
import styles from "./FirstProductsPage.module.css";
import toast from "react-hot-toast";
import FirstProducts from "../../components/FirstProducts/FirstProducts";

const FirstProductsPage = () => {

    const [firstProducts, setFirstProducts] = useState([]);

    const getFirstProducts = () => {
        const url = BASE_URL + '/firstProducts';
        fetch(url)
            .then(response => {
                if (response.status === 200){
                    return response.json();
                } else {
                    throw new Error(response.status);
                }
            })
            .then(data => setFirstProducts(data))
            .catch(err => toast.error(`Упс, ошибка: ${err.message} в FirstProductsPage.js`));
    }

    useEffect(getFirstProducts, []);

    return (
        <>
            <div className={styles.viewport}>
                <div className={styles.sectionOne}>
                    <div className={styles.navBar}>
                        <span className={styles.navText}>Новинки</span>
                        <div className={styles.navDivider}>
                            <div className={styles.navBarContent}>
                                <nav>
                                    <ul className={styles.navMenu}>
                                        <li>Пицца</li>
                                        <li>Бургер</li>
                                        <li>Суши</li>
                                        <li>Роллы</li>
                                        <li>Салаты</li>
                                        <li>Десерты</li>
                                        <li>Напитки</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.sectionThree}>
                    {
                        firstProducts.map((item) => {
                            return (
                                <FirstProducts
                                    id={item.id}
                                    key={item.id}
                                    img={item.img}
                                    title={item.title}
                                    desc={item.desc}
                                    price={item.price}
                                    quantity={item.quantity}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default FirstProductsPage;
