import React, {useEffect, useState} from "react";
import styles from "./SecondProductsPage.module.css";
import {BASE_URL} from "../../constants";
import SecondProducts from "../../components/SecondProducts/SecondProducts";

const SecondProductsPage = () => {
    const [secondProducts, setSecondProducts] = useState([]);

    const getSecondProducts = () => {
        const url = BASE_URL + '/secondProducts';
        fetch(url)
            .then(response => response.json())
            .then(data => setSecondProducts(data));
    }

    useEffect(getSecondProducts, []);

    return (
        <div className={styles.viewport}>
            <div className={styles.sectionOne}>
                <div className={styles.navBar}>
                    <span className={styles.navText}>Меню</span>
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
            <div className={styles.sortNav}>
                <span className={styles.sortText}>Сортировать по:</span>
                <select>
                    <option value="default">По умолчанию</option>
                </select>
            </div>
            <div className={styles.MenuLineup}>
                {
                    secondProducts.map((item) => {
                        return (
                            <SecondProducts
                                id={item.id}
                                key={item.id}
                                img={item.img}
                                title={item.title}
                                desc={item.desc}
                                price={item.price}
                            />
                        )
                    })
                }
            </div>
            <button className={styles.extendBtn}>ПОКАЗАТЬ ЕЩЕ</button>
        </div>
    )
}

export default SecondProductsPage;