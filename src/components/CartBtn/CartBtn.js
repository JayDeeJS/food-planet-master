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
        setProductsFromStorage(cartData);

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
