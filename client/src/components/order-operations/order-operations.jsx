import React, { useContext, useMemo, useRef } from "react";
import { useDispatch } from "react-redux";
import { orderTabs } from "../../enums";
import style from "./order-operations.module.css";
import { Operation as OrderOperation } from "../../redux-store/orders/orders-reducer";
import { OrderContext } from "../../contexts/order-provider";
import { shake } from "../../animations/animations";

export default function OrderOperations({ currentOrderList }) {
  const dispatch = useDispatch();
  const {
    setNewOrder,
    order,
    activeOrderTab,
    activeProduct,
    setActiveProduct,
    deleteBtnRef,
    newOrder,
    setIsVisibleMoreOption
  } = useContext(OrderContext);
  const { id, orderList, historyOrder } = order;
  const sendBtnRef = useRef();

  function calculateSum(arr) {
    if (arr.length) {
      return arr.reduce((acc, curr) => acc + curr.price * curr.count || 1, 0);
    }
    return 0;
  }

  const memoizedPrice = useMemo(() => calculateSum(currentOrderList), [
    currentOrderList,
  ]);

  const updateOrderList = (orderList, newOrder) => {
    const cloneOrderList = [...orderList.map(it => ({...it}))];    
    newOrder.forEach((it) => {
      const indexInOrder = cloneOrderList.findIndex(
        (el) => el.productId === it.productId
      );
      if (indexInOrder !== -1) {
        cloneOrderList[indexInOrder].count += it.count;
      } else {
        cloneOrderList.push(it);
      }
    });
    return cloneOrderList;
  };

  const updateHistoryOrder = () => {
    return [
      ...historyOrder,
      {
        timeOrder: new Date(),
        order: newOrder,
        price: memoizedPrice,
      },
    ];
  };

  function onSuccessSendOrder() {
    setNewOrder([]);
  }

  function onErrorSendOrder() {
    shake(sendBtnRef.current)
  }


  return (
    <div className={style.operationContainer}>
      {activeOrderTab === orderTabs.NEW_ORDER && currentOrderList.length !== 0 && (
        <div className={style.sendOrderContainer}>
          <button
            ref={sendBtnRef}
            className={`${style.operationBtn} ${style.sendOrderBtn}`}
            onClick={() => {
              const updateData = {
                id,
                orderList: updateOrderList(orderList, newOrder),
                historyOrder: updateHistoryOrder(),
              };

              dispatch(OrderOperation.updateAtiveOrder(updateData, onSuccessSendOrder, onErrorSendOrder));
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
        <strong>${memoizedPrice.toFixed(2)}</strong>
      </div>
      {activeOrderTab === orderTabs.ORDER && (
        <footer className={style.footerOperationContainer}>
          <button
            className={`${style.footerOperationBtn} ${style.additionalOptionsBtn}`}
            onClick={() => {
              setIsVisibleMoreOption(true);
            }}
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
}
