import React, {useContext} from "react";
import styles from "../../pages/FirstProductsPage/FirstProductsPage.module.css";
import {Context} from "../../context/context";

const Counter = () => {

    const {count, setCount} = useContext(Context);

    const incrQty = () => {
        setCount(prevState => prevState + 1);
    }

    const decrQty = () => {
        (count === 0)
            ? setCount(prevState => prevState)
            : setCount(prevState => prevState - 1)
    }

    return (
        <>
            <div className={styles.btnFrame}>
                <button className={styles.btnCount} onClick={decrQty}>-</button>
                <span>{count}</span>
                <button className={styles.btnCount} onClick={incrQty}>+</button>
            </div>
        </>
    )
}

export default Counter;
