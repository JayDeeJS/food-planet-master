import React, {useState, useEffect} from 'react';
import styles from "./CartPage.module.css";

const CartPage = () => {

    const [productsFromStorage, setProductsFromStorage] = useState([]);

    const getStorageProducts = () => {
        let storageData = JSON.parse(localStorage.getItem('cart'));
        storageData = Object.values(storageData);
        setProductsFromStorage(storageData);
    }

    const deleteProduct = (product) => {
        let productFromStorage = JSON.parse(localStorage.getItem('cart'));
        delete productFromStorage[product.id];
        localStorage.setItem('cart', JSON.stringify(productFromStorage));
        getStorageProducts();
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

    /*const totalPrice = (product) => {
        if (!product.price){

        }
    }*/

    let totalCartPrice = 0;
    productsFromStorage.map((product) => {
        return (
            !product.quantity
                ? product.price
                : totalCartPrice += product.price * product.quantity
        )
    })

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

    const parseAndSetProducts = (product) => {
        let productsFromStorage = JSON.parse(localStorage.getItem('cart'));
        productsFromStorage[product.id] = product;
        localStorage.setItem('cart', JSON.stringify(productsFromStorage));
        getStorageProducts();
    }

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
                <h3>Общая цена</h3>
                <span>{totalCartPrice}</span>
            </div>
        </div>
    );
};

export default CartPage;
