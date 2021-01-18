import React, { useContext, useEffect, useRef } from "react";
import { orderTabs } from "../../enums";
import OrderOperations from "../order-operations/order-operations";
import OrderSpreadsheet from "../order-spreadsheet/order-spreadsheet";
import OrderHistory from "../order-history/order-history";
import style from "./table-order.module.css";
import { TableContext } from "../../contexts/table-provider";
import { usePrevious } from "../../hooks";

export default function TableOrder() {
  const { activeOrderTab, newOrder, table } = useContext(TableContext);
  const prevNewOrder = usePrevious(newOrder);
  const orderSpreadsheetRef = useRef();

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

  useEffect(() => {
    if (prevNewOrder && newOrder.length > prevNewOrder.length) {
      const elHeight = orderSpreadsheetRef.current.scrollHeight;
    orderSpreadsheetRef.current.scroll(0, elHeight);
    }
    
  }, [newOrder]);

  return (
    <section className={style.tableOrderContainer}>
      <div ref={orderSpreadsheetRef}  className={style.spreadsheetContainer}>
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
