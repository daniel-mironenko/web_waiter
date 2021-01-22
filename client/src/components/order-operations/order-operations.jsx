import React, { useContext, useMemo } from "react";
import { useDispatch } from "react-redux";
import { orderTabs } from "../../enums";
import style from "./order-operations.module.css";
import { ActionCreator } from "../../redux-store/orders/orders-reducer";
import { OrderContext } from "../../contexts/order-provider";

export default function OrderOperations({ orderList }) {
  const dispatch = useDispatch();
  const {
    setNewOrder,
    order,
    activeOrderTab,
    activeProduct,
    setActiveProduct,
    deleteBtnRef,
  } = useContext(OrderContext);
  const { id } = order;

  function calculateSum(arr) {
    if (arr.length) {
      return arr.reduce((acc, curr) => acc + curr.price * curr.count, 0).toFixed(2);
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
            disabled={true}
            title={"Принтер не подключен"}
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
