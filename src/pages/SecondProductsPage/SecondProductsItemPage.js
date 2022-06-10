import React from "react";
import styles from "./SecondProductsPage.module.css";
import images from "../../img";
import index from "../../constants";
import {Counter} from "../../components/Counter/Counter";

const SecondProductsItemPage = () => {
    return (
        <div className={styles.singleItem}>
            <div className={styles.singleItemContent}>
                <img className={styles.singleItemSize} src={images.singleItem} alt=""/>
                <h4 className={styles.properSpacing}>Мексиканская</h4>
                <span className={styles.textAlign}>{index.singleMenuItemDesc}</span>
                <h4 className={styles.properSpacing}>{index.singleMenuItemPrice}</h4>
                <div>
                    <Counter/>
                </div>
            </div>
        </div>
    )
}

export default SecondProductsItemPage;