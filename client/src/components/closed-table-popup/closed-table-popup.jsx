import React from "react";
import { getTime } from "../../utils/date-helper";
import SpreadsheetOrder from "../spreadsheet-order/spreadsheet-order";
import style from "./closed-table-popup.module.css";

export default function ClosedTablePopup({ table, setActiveTable }) {
  const {
    numberOfGuests,
    numberOfTable,
    order,
    startTime,
    endTime,
    orderPrice,
  } = table;

  return (
    <div className={style.container}>
      <header className={style.header}>
        <h2>Стол номер {numberOfTable}</h2>
        <p>Количество гостей: {numberOfGuests}</p>
        <p>Время начала: {getTime(startTime)}</p>
        <p>Время закрития: {getTime(endTime)}</p>
        <button
          className={`${style.btn} ${style.closeBtn}`}
          onClick={() => {
            setActiveTable(null);
          }}
        >
          X
        </button>
      </header>

      <SpreadsheetOrder
        orderList={order}
        width={`70%`}
        orderPrice={orderPrice}
      />
    </div>
  );
}
