import React from 'react';
import styles from "./ModalContainerPage.module.css";

const ModalContainerPage = () => {

    const confirmationContainer = document.querySelector('.confirmationContainer');
    const modalContainer = document.querySelector('.modalContainer')

    const showConfirmation = () => {
        confirmationContainer.style.display = "block";
    }

    const hideModal = () => {
        modalContainer.style.display = "";
        showConfirmation();
    }

    const hideConfirmation = () => {
        confirmationContainer.style.display = "";
    }

    const collectOrder = (e) => {
        e.preventDefault();
        if (e.target.patronName.value === ''){
            e.target.patronName.value = 'Имя заказчика!';
        } else if (e.target.patronAddress.value === ''){
            e.target.patronAddress.value = 'Адрес заказчика!';
        } else if (e.target.patronNumber.value === ''){
            e.target.patronNumber.value = 'Телефон заказчика!';
        } else{
            hideModal();
        }

        const data = {
            name: e.target.patronName.value,
            address: e.target.patronAddress.value,
            number: e.target.patronNumber.value
        }
        console.log(data);
        localStorage.setItem('orderDetails', JSON.stringify(data));
    }

    return (
        <>
            <form onSubmit={collectOrder} className="modalContainer">
                <div className={styles.modalForm}>
                    <div className={styles.modalRow}>
                        <input name="patronName" className={styles.modalInput} type="text"
                               placeholder="Введите имя заказчика"/>
                        <input name="patronAddress" className={styles.modalInput} type="text"
                               placeholder="Введите адрес заказчика"/>
                    </div>
                    <div className={styles.modalRow}>
                        <input name="patronNumber" className={styles.modalInput} type="text"
                               placeholder="Номер телефона заказчика"/>
                        <button className={styles.modalBtn}>ПОДТВЕРДИТЬ ДАННЫЕ</button>
                    </div>
                </div>
            </form>
            <div className="confirmationContainer">
                <div className={styles.confirmationModal}>
                    <h3 className={styles.confirmationMsg}>СПАСИБО ЗА ВАШ ЗАКАЗ!</h3>
                    <button onClick={hideConfirmation} className={styles.confirmationBtn}>СВЕРНУТЬ</button>
                </div>
            </div>
        </>
    );
};

export default ModalContainerPage;
