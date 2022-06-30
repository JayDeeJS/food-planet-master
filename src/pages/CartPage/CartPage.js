import React, {useEffect, useState} from 'react';
import styles from "./CartPage.module.css";
import toast from "react-hot-toast";

const CartPage = () => {

    const [productsFromStorage, setProductsFromStorage] = useState([]);

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
        if (!product.quantity) {
            product.quantity = 2;
            let dblPrice = product.price + product.price;
        } else {
            let count = product.quantity;
            product.quantity = ++count;
            let totalPrice = product.price * product.quantity;
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

    return (
        <div className={styles.body}>
            <h1>Корзина</h1>
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
                                    <h3 className={styles.discount}>0%</h3>
                                </div>
                                <div className={styles.cartCol}>
                                    <h3>Цена</h3>
                                    <h3 className={styles.productText}>{!product.quantity
                                        ? product.price
                                        : product.price * product.quantity}
                                    </h3>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.cartFooter}>
                <h3>Итоговая цена</h3>
                <span>{calcTotalPrice}</span>
            </div>
        </div>
    );
};

export default CartPage;
