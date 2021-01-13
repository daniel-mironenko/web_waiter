import React from "react";
import style from "./menu-popup.module.css";

export default function MenuPopup({ children }) {
  return (
    <div className={style.menuPopupContainer}>
      <div className={style.menuPopup}>
        <header className={style.menuPopupHeader}>
          <p className={style.menuPopupTitle}>Название продукта</p>
        </header>
        <section className={style.menuPopupContent}>
          {children}
        </section>
        <footer className={style.menuPopupFooter}>
          <div className={style.menuPopupPriceContainer}>
            <span>Итого </span>
            <strong>$250</strong>
          </div>
          <div className={style.menuPopupButtonsContainer}>
            <button>Закрыть</button>
            <button>Добавить в заказ</button>
          </div>
        </footer>
      </div>
    </div>
  );
}
