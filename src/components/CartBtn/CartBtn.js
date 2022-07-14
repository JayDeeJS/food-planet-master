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
            "id": 9,
            "img": "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJ1cmdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            "desc": "Булка, котлета, сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус, гриль, кетчуп, майонез",
            "price": 200,
            "title": "Чизбургер"
        }
        let cartData = JSON.parse(localStorage.getItem('cart'));

        if (cartData === undefined){
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
