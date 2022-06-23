import React, {useState} from 'react';
import styles from "./CartBtn.module.css";

const CartBtn = (props) => {

    const [color, setColor] = useState(false);

    const changeUI = () => {
        setColor(state => !state);
    }

    return (
        <>
            <button style={{backgroundColor: color ? 'green' : '#FF583E'}}
                onClick={()=> {
                    changeUI();
                    props.addCart()
                }}
                className={styles.btnCart}>В КОРЗИНУ
            </button>
        </>
    );
};

export default CartBtn;
