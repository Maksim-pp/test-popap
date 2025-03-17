import React from "react";
import styles from "./TextInfo.module.scss";

export const TextInfo = ({setVisible}) => {
  return (
    <div className={styles.info}>
        <div onClick={()=>setVisible(false)} className={styles.close}> &times;</div>
        <div>
          <h1 className={styles.info__title}>Платежи по кредиту</h1>
        <div className={styles.info__text}>
            <div>
                Введите сумму кредита и выберите срок, на который вы хотите его
                оформить.
            </div>
            <div>
                Мы автоматически рассчитаем для вас ежемесячный платеж, чтобы вы могли
                лучше спланировать свои финансы.
            </div>
        </div>
        </div>
        
    </div>
  );
};
