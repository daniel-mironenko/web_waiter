import React from "react";
import style from "./table-order-product.module.css";

export default function TableOrderProduct({ product }) {
  const { name, count, price } = product;

  return (
    <tr>
      <td>{name}</td>
      <td className={style.countTableDate}>
        <button className={`${style.countBtn} ${style.minusBtn}`}></button>
        <span className={style.quantity}>{product.count}</span>
        <button className={`${style.countBtn} ${style.plusBtn}`}></button>
      </td>
      <td>{price}</td>
      <td>{price * count}</td>
    </tr>
  );
}
