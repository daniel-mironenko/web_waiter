import React from "react";
import { useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import OrderHeader from "../../components/table-header/order-header";
import OrderProvider from "../../contexts/order-provider.js";
import { getActiveOrders } from "../../redux-store/orders/selector";
import ErrorPage from "../error-page/error-page";
import style from "./order-page.module.css";
import OrderMenu from "../../components/order-menu/order-menu";
import OrderTab from "../../components/order-tab/order-tab";

export default function OrderPage() {
  const orders = useSelector(getActiveOrders);
  const match = useRouteMatch();
  const order = orders.find(
    (it) => it.orderName === Number(match.params.number)
  );

  if (!order) {
    return <ErrorPage message={`Не найдено заказ №${match.params.number}`} />
  }

  return (
    <OrderProvider order={order}>
      <div className={style.container}>
        <OrderHeader />
        <div className={style.gridContainer}>
          <OrderTab />
          <OrderMenu />
        </div>
      </div>
    </OrderProvider>
  );
}
