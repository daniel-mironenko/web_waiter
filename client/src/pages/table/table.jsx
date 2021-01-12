import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import TableHeader from "../../components/table-header/table-header";
import TableMenu from "../../components/table-menu/table-menu";
import TableOrder from "../../components/table-order/table-order";
import { orderTabs } from "../../enums";
import { getTables } from "../../redux-store/tables/selector";
import style from "./table.module.css";

export default function Table() {
  const tables = useSelector(getTables);
  const [activeOrderTab, setActiveOrderTab] = useState(orderTabs.NEW_ORDER);
  const [newOrder, setNewOrder] = useState([]);
  const [activeProduct, setActiveProduct] = useState(null);

  const match = useRouteMatch();
  const table = tables.find(
    (it) => it.numberOfTable === Number(match.params.number)
  );

  return (
    <div className={style.container}>
      <TableHeader
        table={table}
        activeOrderTab={activeOrderTab}
        setActiveOrderTab={setActiveOrderTab}
        setActiveProduct={setActiveProduct}
      />
      <div className={style.gridContainer}>
        <TableOrder activeOrderTab={activeOrderTab} table={table} newOrder={newOrder} setNewOrder={setNewOrder} activeProduct={activeProduct} setActiveProduct={setActiveProduct}/>
        <TableMenu setNewOrder={setNewOrder} />
      </div>
    </div>
  );
};
