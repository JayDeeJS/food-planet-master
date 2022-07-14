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
        const backup = {
            "default":"test"
        }
        let cartData = JSON.parse(localStorage.getItem('cart'));

        if (cartData === null){
            cartData = localStorage.setItem('cart', JSON.stringify(backup))
        } else {
            cartData = Object.values(cartData);
            setProductsFromStorage(cartData);
            let result = cartData.find(item => item.id === props.id);
            if (result) {
                changeAddBtn();
            }
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
