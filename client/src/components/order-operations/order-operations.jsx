import React from "react";
import { orderTabs } from "../../enums";
import style from "./order-operations.module.css";

export default function OrderOperations({ activeOrderTab, newOrder }) {
  return (
    <div className={style.operationContainer}>
      {activeOrderTab === orderTabs.NEW_ORDER && newOrder.length !== 0 &&  (
        <div className={style.sendOrderContainer}>
          <button className={`${style.operationBtn} ${style.sendOrderBtn}`}>
            Отправить заказ
          </button>
          <button
            className={`${style.operationBtn} ${style.sendOrderModificationBtn}`}
          ></button>
        </div>
      )}
      <div className={style.totalPriceContainer}>
        <b>Итого</b>
        <strong>$1250.35</strong>
      </div>
      {activeOrderTab === orderTabs.ORDER && (
        <footer className={style.footerOperationContainer}>
          <button
            className={`${style.footerOperationBtn} ${style.additionalOptionsBtn}`}
          ></button>
          <button
            className={`${style.footerOperationBtn} ${style.printBtn}`}
          ></button>
          <button
            className={`${style.footerOperationBtn} ${style.closeTableBtn}`}
          >
            Закрыть стол
          </button>
        </footer>
      )}
    </div>
  );
}
