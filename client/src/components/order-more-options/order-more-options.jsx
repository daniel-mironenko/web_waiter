import React, { useContext } from "react";
import { OrderContext } from "../../contexts/order-provider";
import style from "./order-more-options.module.css";

export default function OrderMoreOptions() {
  const {orderMoreOptionsRef} = useContext(OrderContext);

  return (
    <div ref={orderMoreOptionsRef} className={style.moreOptionsContainer}>
      <ul className={style.moreOptionsList}>
        <li>Изменить количество гостей</li>
        <li>Изменить номер стола</li>
      </ul>
    </div>
  );
}
