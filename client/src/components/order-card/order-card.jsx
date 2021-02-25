import React from "react";
import { getTime } from "../../utils/date-helper";
import style from "./order-card.module.css";

export default function OrderCard({ order }) {
  const { id, tableNumber, guestsCount, dateStart } = order;

  return (
    <article className={style.orderItem}>
      <ul>
        <li className={style.orderItemTableNumber}>{tableNumber}</li>
        <li className={style.orderItemInfo}>
          Number of guests: <strong>{guestsCount}</strong>
        </li>
        <li className={style.orderItemInfo}>
          Start time: <strong>{getTime(dateStart)}</strong>
        </li>
        <li className={style.orderItemInfo}>
          Order number: <strong>{id}</strong>
        </li>
      </ul>
    </article>
  );
}
