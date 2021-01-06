import React, { useMemo, useState } from "react";
import SpreadsheetRow from "../spreadsheet-row/spreadsheet-row";
import style from "./spreadsheet-order.module.css";

export default function SpreadsheetOrder({
  orderList,
  width,
  orderPrice = null,
  isNewOrder = false,
  setNewOrder,
  setActiveMode,
  activeMode
}) {
  const [openComments, setOpenComments] = useState(null);

  function calculateSum(arr) {
    return arr.reduce((acc, curr) => acc + curr.totalPrice, 0);
  }

  function showOrderPrice() {
    return orderPrice ? orderPrice : memoizedPrice;
  }

  const memoizedPrice = useMemo(() => calculateSum(orderList), [orderList]);

  return (
    <table style={{ width: width }} className={style.tableOrder}>
      <tbody className={style.tableBody}>
        <tr>
          <th>N</th>
          <th>Продукт</th>
          <th>Кол - во</th>
          <th>Cтоимость</th>
        </tr>
        {orderList.map((item, index) => {
          return (
            <SpreadsheetRow
              key={`${item.name}${index}`}
              item={item}
              index={index}
              isNewOrder={isNewOrder}
              setNewOrder={setNewOrder}
              openComments={openComments}
              setOpenComments={setOpenComments}
              setActiveMode={setActiveMode}
              activeMode={activeMode}
            />
          );
        })}
        <tr>
          <td colSpan="4" className={style.sumTotal}>
            Общая сумма {showOrderPrice()} руб
          </td>
        </tr>
      </tbody>
    </table>
  );
}
