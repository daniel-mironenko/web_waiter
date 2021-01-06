import React from "react";
import { useDispatch } from "react-redux";
import { ActionCreator as tableActionCreator } from "../../redux-store/tables/tables-reducer";
import SpreadsheetOrder from "../spreadsheet-order/spreadsheet-order";
import style from "./table-new-order.module.css";

export default function TableNewOrder({ table, order, newOrder, setNewOrder, setActiveMode, activeMode }) {
  const dispatch = useDispatch();

  function updateOrder() {
    // const cloneOrder = [...order];
    // newOrder.forEach((it) => {
    //   const index = isExistInOrder(it.name);
    //   if (index !== -1 && !it.comments) {
    //     cloneOrder[index] = {
    //       ...cloneOrder[index],
    //       count: cloneOrder[index].count + it.count,
    //       totalPrice: cloneOrder[index].totalPrice + it.totalPrice,
    //     };
    //   } 
    //    else {
    //     cloneOrder.push(it);
    //   }
    // });

    return [...order, ...newOrder];
  }

  // function isExistInOrder(name) {
  //   return order.findIndex((it) => it.name === name && !it.comments);
  // }

  return (
    <section className={style.newOrder}>
      <header className={style.newOrderHeader}>
        <h2>
          <span>Новый заказ</span>
        </h2>
      </header>
      <div className={style.newOrderTableContainer}>
        {newOrder.length ?
        
        <SpreadsheetOrder
          orderList={newOrder}
          width={`100%`}
          isNewOrder={true}
          setNewOrder={setNewOrder}
          setActiveMode={setActiveMode}
          activeMode={activeMode}
        />
        : <h3>Добавьте продкут к заказу</h3>}
      </div>
      <footer className={style.newOrderFooter}>
        <button
          className={`${style.runOrderBtn} ${style.btn}`}
          onClick={() => {
            const updatedTable = { ...table, order: updateOrder()};
            dispatch(tableActionCreator.updateOpenTable(updatedTable));
            setNewOrder([]);
          }}
          disabled={newOrder.length < 1}
        >
          Сделать заказ
        </button>
        <button
          className={`${style.resetOrderBtn} ${style.btn}`}
          onClick={() => {
            setNewOrder([]);
          }}
          disabled={newOrder.length < 1}
        >
          Очистить
        </button>
      </footer>
    </section>
  );
}
