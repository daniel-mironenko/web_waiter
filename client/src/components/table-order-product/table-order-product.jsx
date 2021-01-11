import React from "react";
import { orderTabs } from "../../enums";
import style from "./table-order-product.module.css";

export default function TableOrderProduct({
  product,
  setNewOrder,
  activeOrderTab,
}) {
  const { name, count, price } = product;

  function changeCounter(bool) {
    setNewOrder((prev) => {
      const clonePrev = [...prev];
      const element = clonePrev.find((it) => it.name === name);
      element.count = bool ? element.count + 1 : element.count - 1;
      return clonePrev;
    });
  };

  return (
    <tr>
      <td>{name}</td>
      <td className={style.countTableDate}>
        {activeOrderTab === orderTabs.NEW_ORDER && (
          <button
            className={`${style.countBtn} ${style.minusBtn}`}
            onClick={() => {
              changeCounter(false);
            }}
            disabled={count > 1 ? false : true}
          ></button>
        )}
        <span className={style.quantity}>{product.count}</span>
        {activeOrderTab === orderTabs.NEW_ORDER && (
          <button
            className={`${style.countBtn} ${style.plusBtn}`}
            onClick={() => {
              changeCounter(true);
            }}
          ></button>
        )}
      </td>
      <td>{price}</td>
      <td>{price * count}</td>
    </tr>
  );
};
