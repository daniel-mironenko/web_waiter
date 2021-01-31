import React, { useContext, useEffect, useRef, useState } from "react";
import { orderTabs } from "../../enums";
import OrderOperations from "../order-operations/order-operations";
import OrderSpreadsheet from "../order-spreadsheet/order-spreadsheet";
import OrderHistory from "../order-history/order-history";
import style from "./order-tab.module.css";
import { OrderContext } from "../../contexts/order-provider";
import { usePrevious } from "../../hooks";
import OrderMoreOptions from "../order-more-options/order-more-options";
import MoreOptionsPopup from "../more-options-popup/more-options-popup";

export default function OrderTab() {
  const {
    activeOrderTab,
    newOrder,
    order,
    isVisibleMoreOption,
    setIsVisibleMoreOption,
    isVisibleMoreOptionsPopup,
    setIsVisibleMoreOptionsPopup,
    currentOrderOption,
    setCurrentOrderOption,
  } = useContext(OrderContext);

  const prevNewOrder = usePrevious(newOrder);
  const orderSpreadsheetRef = useRef();
  const orderMoreOptionsRef = useRef();

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

  useEffect(() => {
    function handleClickOutside(event) {
      if (isVisibleMoreOption) {
        if (
          orderMoreOptionsRef.current &&
          !orderMoreOptionsRef.current.contains(event.target)
        ) {
          setIsVisibleMoreOption(false);
        }
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  return (
    <section className={style.tableOrderContainer}>
      <div ref={orderSpreadsheetRef} className={style.spreadsheetContainer}>
        {activeOrderTab !== orderTabs.HISTORY ? (
          <OrderSpreadsheet orderList={orderListByActiveTab} />
        ) : (
          <OrderHistory historyOrder={orderListByActiveTab} />
        )}
      </div>
      <OrderOperations currentOrderList={orderListByActiveTab} />
      {isVisibleMoreOption && (
        <OrderMoreOptions
          setCurrentOrderOption={setCurrentOrderOption}
          setIsVisibleMoreOptionsPopup={setIsVisibleMoreOptionsPopup}
          setIsVisibleMoreOption={setIsVisibleMoreOption}
          ref={orderMoreOptionsRef}
        />
      )}
      {isVisibleMoreOptionsPopup && (
        <MoreOptionsPopup orderOption={currentOrderOption}></MoreOptionsPopup>
      )}
    </section>
  );
}
