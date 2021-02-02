import React, { useContext, useEffect, useRef } from "react";
import { blink } from "../../animations/animations";
import { OrderContext } from "../../contexts/order-provider";
import { orderTabs } from "../../enums";
import style from "./order-product.module.css";

export default function OrderProduct({ product, index }) {
  const { name, count, price, productId } = product;
  const {
    activeOrderTab,
    setNewOrder,
    activeProduct,
    setActiveProduct,
    currentProduct,
    setCurrentProduct,
  } = useContext(OrderContext);
  const productRef = useRef();

  function changeCounter(bool, name) {
    setNewOrder((prev) => {
      const clonePrev = [...prev.map((it) => ({ ...it }))];
      const element = clonePrev.find((it) => it.name === name);
      element.count = bool ? element.count + 1 : element.count - 1;
      return clonePrev;
    });
  }

  useEffect(() => {
    if (currentProduct === productId) {
      blink(productRef.current, () => {
        setCurrentProduct(null);
      });
    }
  });

  return (
    <tr
      ref={productRef}
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
