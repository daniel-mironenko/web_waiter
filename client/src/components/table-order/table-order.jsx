import React from "react";
import { orderTabs } from "../../enums";
import OrderOperations from "../order-operations/order-operations";
import OrderSpreadsheet from "../order-spreadsheet/order-spreadsheet";
import OrderHistory from "../order-history/order-history";
import style from "./table-order.module.css";

export default function TableOrder({
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
        {activeOrderTab !== orderTabs.HISTORY ? (
          <OrderSpreadsheet orderList={orderList} setNewOrder={setNewOrder} activeOrderTab={activeOrderTab}/>
        ) : (
          <OrderHistory historyOrder={orderList} />
        )}
      </div>
      <OrderOperations
        activeOrderTab={activeOrderTab}
        table={table}
        orderList={orderList}
        setNewOrder={setNewOrder}
      />
    </section>
  );
}
