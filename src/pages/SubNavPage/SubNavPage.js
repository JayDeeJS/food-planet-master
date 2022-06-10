import React from 'react';
import styles from "./SubNavPage.module.css";
import index from "../../constants";
import images from "../../img";

const SubNavPage = () => {
    return (
        <div className={styles.subNav}>
            <div className={styles.subNavLeft}>
                <div className={styles.subNavText}>
                    <p className={styles.boldText}>{index.subNavTitle}</p>
                    <p className={styles.darkColor}>{index.subNavDesc}</p>
                    <button className={styles.menuBtn}>ПЕРЕЙТИ В МЕНЮ ➤</button>
                </div>
            </div>
            <div className={styles.subNavRight}>
                <img className={styles.subNavImg} src={images.subNavLogo}/>
            </div>
        </div>
    );
};

export default SubNavPage;