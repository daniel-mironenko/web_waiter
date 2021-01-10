import React from "react";
import { orderTabs } from "../../enums";
import OrderOperations from "../order-operations/order-operations";
import TableOrderProduct from "../table-order-product/table-order-product";
import style from "./table-order-v2.module.css";

export default function TableOrderV2({ activeOrderTab, newOrder }) {
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
            {activeOrderTab === orderTabs.NEW_ORDER &&
              newOrder.map((it) => (
                <TableOrderProduct product={it}/>
              ))}
          </tbody>
        </table>
      </div>
      <OrderOperations activeOrderTab={activeOrderTab} newOrder={newOrder}/>
    </section>
  );
}
