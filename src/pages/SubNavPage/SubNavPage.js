import React, {useEffect, useState} from 'react';
import styles from "./SubNavPage.module.css";
import {BASE_URL} from "../../constants";
import SubNavText from "../../components/SubNav/SubNavText/SubNavText";
import SubNavImg from "../../components/SubNav/SubNavImg/SubNavImg";

const SubNavPage = () => {
    const [subNav, setSubNav] = useState([]);

    const getSubNav = () => {
        const url = BASE_URL + '/subNav';
        fetch(url)
            .then(response => response.json())
            .then(data => setSubNav(data));
    }

    useEffect(getSubNav, []);

    return (
        <div className={styles.subNav}>
            <div className={styles.subNavLeft}>
                <div className={styles.subNavText}>
                    {
                        subNav.map((item) => {
                            return (
                                <SubNavText
                                    id={item.id}
                                    key={item.id}
                                    title={item.subNavTitle}
                                    desc={item.subNavDesc}
                                />
                            )
                        })
                    }
                    <button className={styles.menuBtn}>ПЕРЕЙТИ В МЕНЮ ➤</button>
                </div>
            </div>
            <div className={styles.subNavRight}>
                {
                    subNav.map((item) => {
                        return (
                            <SubNavImg
                                id={item.id}
                                key={item.id}
                                img={item.subNavImg}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default SubNavPage;