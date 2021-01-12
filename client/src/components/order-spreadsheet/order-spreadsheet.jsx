import React, { useEffect, useRef } from "react";
import { orderTabs } from "../../enums";
import OrderProducts from "../order-products/order-products";
import style from "./order-spreadsheet.module.css";

export default function OrderSpreadsheet({
  orderList,
  setNewOrder,
  activeOrderTab,
  activeProduct,
  setActiveProduct,
  deleteBtnRef,
}) {
  const spreadsheetRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (activeOrderTab === orderTabs.NEW_ORDER) {
        if (
          deleteBtnRef.current &&
          spreadsheetRef.current &&
          !deleteBtnRef.current.isEqualNode(event.target) &&
          !spreadsheetRef.current.contains(event.target)
        ) {
          setActiveProduct(null);
        }
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [deleteBtnRef, spreadsheetRef, setActiveProduct, activeOrderTab]);

  return (
    <div className={style.spreadsheetContainer}>
      <table className={style.spreadsheet}>
        <tbody ref={spreadsheetRef}>
          <tr>
            <th>Название</th>
            <th>Кол-во</th>
            <th>Цена</th>
            <th>Итого</th>
          </tr>
          {orderList.map((product, index) => {
            return (
              <OrderProducts
                key={product.name}
                product={product}
                index={index}
                setNewOrder={setNewOrder}
                activeOrderTab={activeOrderTab}
                activeProduct={activeProduct}
                setActiveProduct={setActiveProduct}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
