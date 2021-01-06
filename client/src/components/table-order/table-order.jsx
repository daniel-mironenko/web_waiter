import React from "react";
import TableNewOrder from "../table-new-order/table-new-order";
import { Link, useHistory } from "react-router-dom";
import { getTime } from "../../utils/date-helper";
import DangerButton from "../buttons/danger-button/danger-button";
import { useDispatch } from "react-redux";
import style from "./table-order.module.css";
import { ActionCreator as tableActionCreator } from "../../redux-store/tables/tables-reducer";
import { appRoute } from "../../enums";
import SpreadsheetOrder from "../spreadsheet-order/spreadsheet-order";

export default function TableOrder({ table, newOrder, setNewOrder, setActiveMode, activeMode }) {
  const { numberOfGuests, numberOfTable, order, startTime } = table;
  const formatedStartTime = getTime(startTime);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <main className={style.tableOrderContainer}>
      <section className={style.order}>
        <header className={style.tableOrderHeader}>
          <div className={style.tableInfo}>
            <h2>Стол номер {numberOfTable}</h2>
            <div>Количество гостей: {numberOfGuests}</div>
            <div>Время начала: {formatedStartTime}</div>
          </div>
          <Link to="/">
            <DangerButton text={"Назад"} />
          </Link>
        </header>
        {order.length ? (
          <SpreadsheetOrder orderList={order} width={`70%`} />
        ) : (
          <h2>Оформите новый заказ</h2>
        )}
        <footer>
          {order.length > 0 && (
            <button className={`${style.printCheck} ${style.btn}`}>
              Распечатать чек
            </button>
          )}
          <button
            className={`${style.closeTable} ${style.btn}`}
            onClick={() => {
              if (order.length) {
                const updetedTable = {
                  ...table,
                  endTime: table.startTime,
                  orderPrice: table.order.reduce(
                    (acc, curr) => acc + curr.totalPrice,
                    0
                  )
                };
                dispatch(tableActionCreator.closeTable(updetedTable));
              } else {
                dispatch(tableActionCreator.removeOpenTable(numberOfTable));
              }
              history.push(appRoute.PRIVAT_OFFICE);
            }}
          >
            {order.length ? `Закрыть стол` : `Удалить стол`}
          </button>
        </footer>
      </section>
      <TableNewOrder
        table={table}
        order={order}
        newOrder={newOrder}
        setNewOrder={setNewOrder}
        setActiveMode={setActiveMode}
        activeMode={activeMode}
      />
    </main>
  );
}
