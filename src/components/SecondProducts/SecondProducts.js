import React from 'react';
import styles from "./SecondProducts.module.css";
import toast from "react-hot-toast";
import {Counter} from "../Counter/Counter";
import CartBtn from "../CartBtn/CartBtn";

const SecondProducts = (props) => {

    const addCart = () => {
        /*const buyProduct = () => {
            const url = BASE_URL + "/cart";

            const obj = {
                "img":props.img,
                "desc":props.desc,
                "price":props.price,
                "title":props.title
            }

            const options = {
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(obj)
            }
            fetch(url, options)
                .then(response => response.json())
                .then(data => console.log(data));
        }
        buyProduct();*/

        let productsFromLocalStorage = {};
        const product = {};

        if (localStorage.getItem('cart')){
            productsFromLocalStorage = JSON.parse(localStorage.getItem('cart'));
        }

        product[props.id] = {
            ...props
        }
        localStorage.setItem('cart', JSON.stringify({...productsFromLocalStorage, ...product}));
        toast.success(`${props.title} добавлен(а) в Корзину!`, {
            style: {
                border: '2px solid #d1db17',
                padding: '16px',
                color: '#e66322',
            },
            iconTheme: {
                primary: '#14e040',
                secondary: '#e7f13b',
            },
        });
    }

    return (
        <div className={styles.singleItem}>
            <div className={styles.singleItemContent}>
                <img className={styles.singleItemSize} src={props.img} alt=""/>
                <h4 className={styles.properSpacing}>{props.title}</h4>
                <span className={styles.textAlign}>{props.desc}</span>
                <h4 className={styles.properSpacing}>{props.price}</h4>
                <div>
                    <Counter/>
                </div>
                <div>
                    <CartBtn
                        addCart={addCart}
                        id={props.id}
                        price={props.price}
                        quantity={props.quantity}
                    />
                </div>
            </div>
        </div>
    );
};

export default SecondProducts;
