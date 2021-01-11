import React, { useMemo } from "react";
import { useDispatch } from "react-redux";
import { orderTabs } from "../../enums";
import style from "./order-operations.module.css";
import { ActionCreator } from "../../redux-store/tables/tables-reducer";

export default function OrderOperations({ activeOrderTab, table, orderList, setNewOrder }) {
  const { id } = table;
  const dispatch = useDispatch();

  function calculateSum(arr) {
    if (arr.length) {
      return arr.reduce((acc, curr) => acc + curr.price * curr.count, 0);
    }
    return 0;
  }

  const memoizedPrice = useMemo(() => calculateSum(orderList), [orderList]);

  return (
    <div className={style.operationContainer}>
      {activeOrderTab === orderTabs.NEW_ORDER && orderList.length !== 0 && (
        <div className={style.sendOrderContainer}>
          <button
            className={`${style.operationBtn} ${style.sendOrderBtn}`}
            onClick={() => {
              dispatch(ActionCreator.updateOpenTable({id, orderList}));
              setNewOrder([]);
            }}
          >
            Отправить заказ
          </button>
          <button
            className={`${style.operationBtn} ${style.sendOrderModificationBtn}`}
          ></button>
        </div>
      )}
      <div className={style.totalPriceContainer}>
        <b>Итого</b>
        <strong>${memoizedPrice}</strong>
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
};
