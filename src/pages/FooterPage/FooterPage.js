import React from 'react';
import styles from "./FooterPage.module.css";
import images from "../../media";
import {NavLink} from "react-router-dom";

const FooterPage = () => {
    return (
        <>
            <div className={styles.footerAligner}>
                <div className={styles.footerAligner2}>
                    <div className={styles.footerContent}>
                        <ul className={styles.footerMenu}>
                            <li className={styles.footerLogo}>
                                <img src={images.footerLogo} alt=""/>
                            </li>
                            <NavLink to="/">
                                <li className={styles.whiteText}>Главная</li>
                            </NavLink>
                            <NavLink to="/menu">
                                <li className={styles.whiteText}>Меню</li>
                            </NavLink>
                            <NavLink to="/delivery">
                                <li className={styles.whiteText}>Доставка</li>
                            </NavLink>
                            <NavLink to="/contacts">
                                <li className={styles.whiteText}>Контакты</li>
                            </NavLink>
                            <NavLink to="/phone">
                                <div className={styles.footerImg1}>
                                    <img src={images.whitePhoneLogo}/>
                                </div>
                                <li className={styles.whiteText}>+996500405988</li>
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterPage;
