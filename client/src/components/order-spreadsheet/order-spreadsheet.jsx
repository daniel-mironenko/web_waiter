import React from "react";
import OrderProducts from "../order-products/order-products";
import style from "./order-spreadsheet.module.css";

export default function OrderSpreadsheet({
  orderList,
  setNewOrder,
  activeOrderTab,
}) {
  return (
    <div className={style.spreadsheetContainer}>
      <table className={style.spreadsheet}>
        <tbody>
          <tr>
            <th>Название</th>
            <th>Кол-во</th>
            <th>Цена</th>
            <th>Итого</th>
          </tr>
          <OrderProducts
            orderList={orderList}
            setNewOrder={setNewOrder}
            activeOrderTab={activeOrderTab}
          />
        </tbody>
      </table>
    </div>
  );
}
