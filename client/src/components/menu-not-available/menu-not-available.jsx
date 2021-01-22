import React, { useContext } from "react";
import { OrderContext } from "../../contexts/order-provider";
import style from "./menu-not-available.module.css";
import { orderTabs } from "../../enums";

export default function MenuNotAvailable() {
  const {activeOrderTab} = useContext(OrderContext);
  return (
    <div
      className={`${
        activeOrderTab !== orderTabs.NEW_ORDER && style.notAvailable
      }`}
    ></div>
  );
}
