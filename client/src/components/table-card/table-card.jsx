import React from "react";
import { cardStatus } from "../../enums";
import { getTime } from "../../utils/date-helper";
import style from "./table-card.module.css";

export default function TableCard({ table, status }) {
  const { numberOfTable, numberOfGuests, startTime, endTime } = table;
  
  return (
    <article
      className={`${style.tableItem} ${
        status === cardStatus.OPEN
          ? `${style.tableItemOpen}`
          : `${style.tableItemClosed}`
      }`}
    >
      <ul>
        <li className={style.tableItemNumber}>{numberOfTable}</li>
        <li className={style.tableItemInfo}>
          Количество гостей: <strong>{numberOfGuests}</strong>
        </li>
        <li className={style.tableItemInfo}>
          Время начала: <strong>{getTime(startTime)}</strong>
        </li>
        {status === cardStatus.CLOSED && (
          <li className={style.tableItemInfo}>
            Время закрития: <strong>{getTime(endTime)}</strong>
          </li>
        )}
      </ul>
    </article>
  );
}
