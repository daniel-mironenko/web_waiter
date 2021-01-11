import React, { Fragment } from "react";
import { orderTabs } from "../../enums";
import style from "./order-products.module.css";

export default function OrderProducts({
  orderList,
  setNewOrder,
  activeOrderTab,
}) {
  function changeCounter(bool, name) {
    setNewOrder((prev) => {
      const clonePrev = [...prev];
      const element = clonePrev.find((it) => it.name === name);
      element.count = bool ? element.count + 1 : element.count - 1;
      return clonePrev;
    });
  }

  return (
    <Fragment>
      {orderList.map((product) => {
        const { name, count, price } = product;
        return (
          <tr>
            <td>{name}</td>
            <td className={style.countTableDate}>
              {activeOrderTab === orderTabs.NEW_ORDER && (
                <button
                  className={`${style.countBtn} ${style.minusBtn}`}
                  onClick={() => {
                    changeCounter(false, name);
                  }}
                  disabled={count > 1 ? false : true}
                ></button>
              )}
              <span className={style.quantity}>{product.count}</span>
              {activeOrderTab === orderTabs.NEW_ORDER && (
                <button
                  className={`${style.countBtn} ${style.plusBtn}`}
                  onClick={() => {
                    changeCounter(true, name);
                  }}
                ></button>
              )}
            </td>
            <td>{price}</td>
            <td>{price * count}</td>
          </tr>
        );
      })}
    </Fragment>
  );
}
