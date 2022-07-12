import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../context/context";
import styles from "./CartPage.module.css";
import toast from "react-hot-toast";
import ModalContainerPage from "../ModalContainerPage/ModalContainerPage";

const CartPage = () => {

    const {productsFromStorage, setProductsFromStorage} = useContext(Context);

    const getStorageProducts = () => {
        let storageData = JSON.parse(localStorage.getItem('cart'));
        storageData = Object.values(storageData);
        setProductsFromStorage(storageData);
    }

    const parseAndSetProducts = (product) => {
        let productsFromStorage = JSON.parse(localStorage.getItem('cart'));
        productsFromStorage[product.id] = product;
        localStorage.setItem('cart', JSON.stringify(productsFromStorage));
        getStorageProducts();
    }

    const deleteProduct = (product) => {
        let productFromStorage = JSON.parse(localStorage.getItem('cart'));
        delete productFromStorage[product.id];
        localStorage.setItem('cart', JSON.stringify(productFromStorage));
        getStorageProducts();
        toast.success(`${product.title} удален(а) из Корзины`, {
            style: {
                border: '1px solid #d15f1e',
                padding: '16px',
                color: '#d14b1e',
            },
            iconTheme: {
                primary: '#13e23c',
                secondary: '#e79b44',
            },
        });
    }

    useEffect(getStorageProducts, []);

    const increaseQty = (product) => {
        let dblPrice = 0;
        let totalPrice = 0;

        if (!product.quantity) {
            product.quantity = 2;
            dblPrice = product.price + product.price;
        } else {
            let count = product.quantity;
            product.quantity = ++count;
            totalPrice = product.price * product.quantity;
        }
        parseAndSetProducts(product);
    }

    const decreaseQty = (product) => {
        if (!product.price) {
            deleteProduct(product)
        } else {
            let count = product.quantity;
            product.quantity = --count;
            if (!product.quantity) {
                deleteProduct(product);
                return;
            }
        }
        parseAndSetProducts(product);
    }

    const calcTotalPrice = productsFromStorage.reduce((price, product) => !product.quantity
        ? product.price + price
        : price + (product.quantity * product.price), 0)

    const [discount, setDiscount] = useState({
        discountData: 0
    })

    const collectData = (event) => {
        event.preventDefault();
        if (event.target.coupon.value === '') {
            event.target.coupon.value = 'Введите цифровое значение!'
        }
        setDiscount({
            discountData: calcTotalPrice / event.target.coupon.value
        })
        console.log(discount);
    }

    const [finalPrice, setFinalPrice] = useState({
        final: calcTotalPrice
    })

    const calcFinalPrice = () => {
        setFinalPrice({
            final: calcTotalPrice - discount.discountData
        })
    }

    const showModal = () => {
        const modalContainer = document.querySelector('.modalContainer')
        modalContainer.style.display = "block";
    }

    return (
        <>
            <div className={styles.body}>
                <h1 className={styles.cartTitle}>Корзина</h1>
                <div className={styles.cart}>
                    {
                        productsFromStorage.map((product) => {
                            return (
                                <div key={product.id} className={styles.cartRow}>
                                <span
                                    onClick={() => {
                                        deleteProduct(product);
                                    }}
                                    className={styles.productDelete}>
                                    &#10008;
                                </span>
                                    <img className={styles.productImg} src={product.img} alt=""/>
                                    <div className={styles.cartBGCol}>
                                        <h4 className={styles.lessSpacing}>{product.title}</h4>
                                        <p className={styles.productText}>{product.desc}</p>
                                    </div>
                                    <div className={styles.cartCol}>
                                        <div className={styles.cartCounter}>
                                            <button onClick={() => {
                                                decreaseQty(product)
                                            }}
                                            >-
                                            </button>
                                            <span>{product.quantity
                                                ? product.quantity
                                                : 1}
                                        </span>
                                            <button onClick={() => {
                                                increaseQty(product)
                                            }}
                                            >+
                                            </button>
                                        </div>
                                    </div>
                                    <div className={styles.cartCol}>
                                        <h3>Скидка</h3>
                                        <h3 className={styles.discount}>{!discount.discountData
                                            ? 0
                                            : discount.discountData
                                        } сом</h3>
                                    </div>
                                    <div className={styles.cartCol}>
                                        <h3>Цена</h3>
                                        <h3 className={styles.productText}>{!product.quantity
                                            ? product.price
                                            : product.price * product.quantity} сом
                                        </h3>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={styles.cartFooter}>
                    <form onSubmit={collectData}>
                        <h3 className={styles.cartTitleTwo}>Введите код скидочного купона</h3>
                        <input name="coupon" type="text" placeholder="Код купона" className={styles.discountInput}/>
                        <button className={styles.discountBtn}>ОК</button>
                    </form>
                    <div className={styles.discountCalc}>
                        <h3>Ввели код купона? Посчитайте со скидкой!</h3>
                        <button onClick={calcFinalPrice} className={styles.discountTrigger}>ПОСЧИТАТЬ!</button>
                    </div>
                    <div>
                        <h3 className={styles.cartTitle}>Итоговая цена</h3>
                        <span className={styles.cartFinalPrice}>{!finalPrice.final
                            ? calcTotalPrice || finalPrice.final
                            : finalPrice.final || finalPrice.final
                        }</span>
                    </div>
                </div>
                <div className={styles.cartFooterTwo}>
                    <button onClick={showModal} className="orderBtn">ОФОРМИТЬ ЗАКАЗ</button>
                </div>
                <ModalContainerPage/>
            </div>
        </>
    );
};

export default CartPage;
