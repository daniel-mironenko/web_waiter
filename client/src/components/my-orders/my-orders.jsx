import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { appRoute, cardStatus } from "../../enums";
import { getActiveOrders } from "../../redux-store/orders/selector";
import AddButton from "../buttons/add-button/add-button";
import NewOrderPopup from "../new-order-popup/new-order-popup";
import OrderCard from "../order-card/order-card";
import style from "./my-orders.module.css";

export default function MyOrders() {
  const orders = useSelector(getActiveOrders);
  const [isOpenNewOrderPopup, setIsOpenNewOrderPopup] = useState(false);

  function addNewOrderHandler() {
    setIsOpenNewOrderPopup(true);
  }

  return (
    <Fragment>
      <header className={style.myOrdersHeader}>
        <h2 className={style.myOrdersCount}>
          Мои заказы: <strong>{orders.length}</strong>
        </h2>
      </header>
      <section className={style.myOrdersBoard}>
        <div className={style.myOrdersList}>
          {orders.map((it) => (
            <Link key={it.id} to={`${appRoute.ORDER}/${it.id}`}>
              <OrderCard order={it} status={cardStatus.OPEN} />
            </Link>
          ))}
        </div>
      </section>

      {isOpenNewOrderPopup && (
        <NewOrderPopup setIsOpenNewOrderPopup={setIsOpenNewOrderPopup} />
      )}
      <AddButton handler={addNewOrderHandler} />
    </Fragment>
  );
}
