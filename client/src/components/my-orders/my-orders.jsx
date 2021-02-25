import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { appRoute } from "../../enums";
import { getActiveOrders } from "../../redux-store/orders/selector";
import AddButton from "../buttons/add-button/add-button";
import NewOrderPopup from "../new-order-popup/new-order-popup";
import OfficeBoardHeader from "../office-board-header/office-board-header";
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
      <OfficeBoardHeader>
        My orders: <strong style={{marginLeft: ".5em"}}>{orders.length}</strong>
      </OfficeBoardHeader>
      
      <section className={style.myOrdersBoard}>
        <div className={style.myOrdersList}>
          {orders.map((it) => (
            <Link key={it.id} to={`${appRoute.ORDER}/${it.id}`}>
              <OrderCard order={it} />
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
