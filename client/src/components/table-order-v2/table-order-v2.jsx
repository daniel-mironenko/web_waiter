import React from "react";
import { orderTabs } from "../../enums";
import OrderOperations from "../order-operations/order-operations";
import TableOrderProduct from "../table-order-product/table-order-product";
import style from "./table-order-v2.module.css";

export default function TableOrderV2({
  activeOrderTab,
  table,
  newOrder,
  setNewOrder,
}) {
  const orderList = (function () {
    switch (activeOrderTab) {
      case orderTabs.NEW_ORDER:
        return newOrder;

      case orderTabs.HISTORY:
        return table.historyOrder;

      case orderTabs.ORDER:
        return table.order;

      default:
        return [];
    }
  })();

  return (
    <section className={style.tableOrderContainer}>
      <div className={style.spreadsheetContainer}>
        <table className={style.spreadsheet}>
          <tbody>
            <tr>
              <th>Название</th>
              <th>Кол-во</th>
              <th>Цена</th>
              <th>Итого</th>
            </tr>
            {orderList.map((it) => (
              <TableOrderProduct
                key={it.name}
                product={it}
                setNewOrder={setNewOrder}
                activeOrderTab={activeOrderTab}
              />
            ))}
          </tbody>
        </table>
      </div>
      <OrderOperations
        activeOrderTab={activeOrderTab}
        table={table}
        orderList={orderList}
        setNewOrder={setNewOrder}
      />
    </section>
  );
};
