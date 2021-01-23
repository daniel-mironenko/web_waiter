import React, { useContext, useEffect, useRef } from "react";
import { orderTabs } from "../../enums";
import OrderOperations from "../order-operations/order-operations";
import OrderSpreadsheet from "../order-spreadsheet/order-spreadsheet";
import OrderHistory from "../order-history/order-history";
import style from "./order-tab.module.css";
import { OrderContext } from "../../contexts/order-provider";
import { usePrevious } from "../../hooks";

export default function OrderTab() {
  const { activeOrderTab, newOrder, order } = useContext(OrderContext);
  const prevNewOrder = usePrevious(newOrder);
  const orderSpreadsheetRef = useRef();

  const orderListByActiveTab = (function getOrderListByActiveTab() {
    switch (activeOrderTab) {
      case orderTabs.NEW_ORDER:
        return newOrder;

      case orderTabs.HISTORY:
        return order.historyOrder;

      case orderTabs.ORDER:
        return order.orderList;

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
      <OrderOperations currentOrderList={orderListByActiveTab} />
    </section>
  );
};
