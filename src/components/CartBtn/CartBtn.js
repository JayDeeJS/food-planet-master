import React, {useEffect, useState} from 'react';
import styles from "./CartBtn.module.css";

const CartBtn = (props) => {

    let [productsFromStorage, setProductsFromStorage] = useState([]);

    const [addBtn, setAddBtn] = useState({
        title: 'В КОРЗИНУ',
        style: styles.btnCart
    });

    const changeAddBtn = () => {
        setAddBtn({
            title: <span>&#10004;</span>,
            style: styles.btnNew
        })
    }

    const checkProductId = () => {
        let cartData = JSON.parse(localStorage.getItem('cart'));
        cartData = Object.values(cartData);
        if (cartData !== null){
            setProductsFromStorage(cartData);
        } else{
            cartData = localStorage.setItem('cart', JSON.stringify({
                "id": 101,
                "img": "https://images.unsplash.com/photo-1572294843899-535506e8bb42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=808&q=80",
                "desc": "default",
                "title": "placeholder"
            }))
        }

        let result = cartData.find(item => item.id === props.id);
        if (result){
            changeAddBtn();
        }
    }

    useEffect(checkProductId, []);

    return (
        <>
            <button id={props.id}
                onClick={() => {
                    changeAddBtn();
                    checkProductId();
                    props.addCart();
                }}
                className={addBtn.style}>{addBtn.title}
            </button>
        </>
    );
};

export default CartBtn;
