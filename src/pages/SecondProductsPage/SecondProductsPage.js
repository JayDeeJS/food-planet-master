import React, {useEffect, useState} from "react";
import styles from "./SecondProductsPage.module.css";
import {BASE_URL} from "../../constants";
import SecondProducts from "../../components/SecondProducts/SecondProducts";
import toast from "react-hot-toast";

const SecondProductsPage = () => {
    const [secondProducts, setSecondProducts] = useState([]);

    const getSecondProducts = () => {
        const url = BASE_URL + '/secondProducts';
        fetch(url)
            .then(response => {
                if (response.status === 200){
                    return response.json();
                } else {
                    throw new Error(response.status);
                }
            })
            .then(data => setSecondProducts(data))
            .catch(err => toast.error(`Упс, ошибка: ${err.message} в SecondProductsPage.js`));
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
                                quantity={item.quantity}
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
