import React from "react";
import { cardStatus } from "../../enums";
import { getTime } from "../../utils/date-helper";
import style from "./order-card.module.css";

export default function OrderCard({ order, status }) {
  const { id, tableNumber, guestsCount, dateStart, dateEnd } = order;
  
  return (
    <article
      className={`${style.tableItem} ${
        status === cardStatus.OPEN
          ? `${style.tableItemOpen}`
          : `${style.tableItemClosed}`
      }`}
    >
      <ul>
        <li className={style.tableItemNumber}>{tableNumber}</li>
        <li className={style.tableItemInfo}>
          Количество гостей: <strong>{guestsCount}</strong>
        </li>
        <li className={style.tableItemInfo}>
          Время начала: <strong>{getTime(dateStart)}</strong>
        </li>
        {status === cardStatus.CLOSED && (
          <li className={style.tableItemInfo}>
            Время закрития: <strong>{getTime(dateEnd)}</strong>
          </li>
        )}
        <li className={style.tableItemInfo}>
          Номер заказа: <strong>{id}</strong>
        </li>
      </ul>
    </article>
  );
}
