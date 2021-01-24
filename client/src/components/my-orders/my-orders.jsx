import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { appRoute, cardStatus } from "../../enums";
import { getActiveOrders } from "../../redux-store/orders/selector";
import AddButton from "../buttons/add-button/add-button";
import NewOrderPopup from "../new-order-popup/new-order-popup";
import TableCard from "../order-card/order-card";
import style from "./my-orders.module.css";

export default function MyOrders() {
  const orders = useSelector(getActiveOrders);
  const [isOpenNewOrderPopup, setIsOpenNewOrderPopup] = useState(false);

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
            <Link key={it.id} to={`${appRoute.ORDER}/${it.id}`}>
              <TableCard  order={it} status={cardStatus.OPEN}/>
            </Link>
          ))}
        </section>
      </div>

      {isOpenNewOrderPopup && (
        <NewOrderPopup setIsOpenNewOrderPopup={setIsOpenNewOrderPopup} />
      )}

      <AddButton setIsOpenNewOrderPopup={setIsOpenNewOrderPopup} />
    </section>
  );
}
