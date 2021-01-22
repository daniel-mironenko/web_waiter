import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { appRoute, cardStatus } from "../../enums";
import { getActiveOrders } from "../../redux-store/orders/selector";
import AddButton from "../buttons/add-button/add-button";
import NewTablePopup from "../new-table-popup/new-table-popup";
import TableCard from "../table-card/table-card";
import style from "./my-orders.module.css";

export default function MyOrders() {
  const orders = useSelector(getActiveOrders);
  const [isOpenNewTablePopup, setIsOpenNewTablePopup] = useState(false);

  return (
    <section className={style.myTablesContainer}>
      <header className={style.myTabelsHeader}>
        <h2 className={style.myTableCount}>
          Мои заказы: <strong>{orders.length}</strong>
        </h2>
      </header>
      <div className={style.myTableBoard}>
        <section className={style.tablesList}>
          {orders.map((it) => (
            <Link key={it.id} to={`${appRoute.TABLE}/${it.orderName}`}>
              <TableCard  order={it} status={cardStatus.OPEN}/>
            </Link>
          ))}
        </section>
      </div>

      {isOpenNewTablePopup && (
        <NewTablePopup setIsOpenNewTablePopup={setIsOpenNewTablePopup} />
      )}

      <AddButton setIsOpenNewTablePopup={setIsOpenNewTablePopup} />
    </section>
  );
}
