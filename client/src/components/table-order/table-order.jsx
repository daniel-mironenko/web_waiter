import React, { useContext } from "react";
import { orderTabs } from "../../enums";
import OrderOperations from "../order-operations/order-operations";
import OrderSpreadsheet from "../order-spreadsheet/order-spreadsheet";
import OrderHistory from "../order-history/order-history";
import style from "./table-order.module.css";
import { TableContext } from "../../contexts/table-provider";

export default function TableOrder() {
  const { activeOrderTab, newOrder, table } = useContext(TableContext);

  const orderListByActiveTab = (function getOrderListByActiveTab() {
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
          <OrderSpreadsheet orderList={orderListByActiveTab} />
        ) : (
          <OrderHistory historyOrder={orderListByActiveTab} />
        )}
      </div>
      <OrderOperations orderList={orderListByActiveTab} />
    </section>
  );
};
