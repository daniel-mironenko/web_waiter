import React from "react";
import { cardStatus } from "../../enums";
import { getTime } from "../../utils/date-helper";
import style from "./order-card.module.css";

export default function OrderCard({ order, status }) {
  const { id, tableNumber, guestsCount, dateStart, dateEnd } = order;
  
  return (
    <article
      className={`${style.orderItem} ${
        status === cardStatus.OPEN
          ? `${style.orderItemOpen}`
          : `${style.orderItemClosed}`
      }`}
    >
      <ul>
        <li className={style.orderItemTableNumber}>{tableNumber}</li>
        <li className={style.orderItemInfo}>
          Количество гостей: <strong>{guestsCount}</strong>
        </li>
        <li className={style.orderItemInfo}>
          Время начала: <strong>{getTime(dateStart)}</strong>
        </li>
        {status === cardStatus.CLOSED && (
          <li className={style.orderItemInfo}>
            Время закрития: <strong>{getTime(dateEnd)}</strong>
          </li>
        )}
        <li className={style.orderItemInfo}>
          Номер заказа: <strong>{id}</strong>
        </li>
      </ul>
    </article>
  );
}
