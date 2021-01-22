import React, { useContext } from "react";
import { OrderContext } from "../../contexts/order-provider";
import { orderTabs } from "../../enums";
import style from "./order-products.module.css";

export default function OrderProducts({ product, index }) {
  const { name, count, price } = product;
  const {
    activeOrderTab,
    setNewOrder,
    activeProduct,
    setActiveProduct,
  } = useContext(OrderContext);

  function changeCounter(bool, name) {
    setNewOrder((prev) => {
      const clonePrev = [...prev];
      const element = clonePrev.find((it) => it.name === name);
      element.count = bool ? element.count + 1 : element.count - 1;
      return clonePrev;
    });
  }

  return (
    <tr
      className={`${activeProduct === index && style.activeProduct}`}
      key={name}
      onClick={() => {
        if (activeOrderTab === orderTabs.NEW_ORDER) {
          setActiveProduct(index);
        }
      }}
    >
      <td>{name}</td>
      <td className={style.countTableDate}>
        {activeOrderTab === orderTabs.NEW_ORDER && (
          <button
            className={`${style.countBtn} ${style.minusBtn}`}
            onClick={(evt) => {
              evt.stopPropagation();
              changeCounter(false, name);
            }}
            disabled={count > 1 ? false : true}
          ></button>
        )}
        <span className={style.quantity}>{product.count}</span>
        {activeOrderTab === orderTabs.NEW_ORDER && (
          <button
            className={`${style.countBtn} ${style.plusBtn}`}
            onClick={(evt) => {
              evt.stopPropagation();
              changeCounter(true, name);
            }}
          ></button>
        )}
      </td>
      <td>{price.toFixed(2)}</td>
      <td>{(price * count).toFixed(2)}</td>
    </tr>
  );
}
