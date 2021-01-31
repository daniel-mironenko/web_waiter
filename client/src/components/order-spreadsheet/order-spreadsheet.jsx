import React, { useContext, useEffect, useRef } from "react";
import { OrderContext } from "../../contexts/order-provider";
import { orderTabs } from "../../enums";
import OrderProduct from "../order-product/order-product";
import style from "./order-spreadsheet.module.css";

export default function OrderSpreadsheet({ orderList }) {
  const spreadsheetRef = useRef();
  const { activeOrderTab, setActiveProduct, deleteBtnRef } = useContext(
    OrderContext
  );

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
    }

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
              <OrderProduct
                key={product.name}
                product={product}
                index={index}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
