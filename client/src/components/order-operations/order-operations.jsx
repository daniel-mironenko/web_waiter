import React, { useContext, useMemo } from "react";
import { useDispatch } from "react-redux";
import { orderTabs } from "../../enums";
import style from "./order-operations.module.css";
import { ActionCreator } from "../../redux-store/tables/tables-reducer";
import { TableContext } from "../../contexts/table-provider";

export default function OrderOperations({ orderList }) {
  const dispatch = useDispatch();
  const {
    setNewOrder,
    table,
    activeOrderTab,
    activeProduct,
    setActiveProduct,
    deleteBtnRef,
  } = useContext(TableContext);
  const { id } = table;

  function calculateSum(arr) {
    if (arr.length) {
      return arr.reduce((acc, curr) => acc + curr.price * curr.count, 0);
    }
    return 0;
  };

  const memoizedPrice = useMemo(() => calculateSum(orderList), [orderList]);

  return (
    <div className={style.operationContainer}>
      {activeOrderTab === orderTabs.NEW_ORDER && orderList.length !== 0 && (
        <div className={style.sendOrderContainer}>
          <button
            className={`${style.operationBtn} ${style.sendOrderBtn}`}
            onClick={() => {
              dispatch(ActionCreator.updateOpenTable({ id, orderList }));
              setNewOrder([]);
              setActiveProduct(null);
            }}
          >
            Отправить заказ
          </button>
          <button
            ref={deleteBtnRef}
            className={`${style.operationBtn} ${style.clenOrderBtn}`}
            onClick={() => {
              if (activeProduct !== null) {
                setNewOrder((prev) => {
                  const prevClone = [...prev];
                  prevClone.splice(activeProduct, 1);
                  return prevClone;
                });
                setActiveProduct(null);
                return;
              }
              setNewOrder([]);
            }}
          >
            {activeProduct !== null ? `Удалить` : `Очистить`}
          </button>
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
