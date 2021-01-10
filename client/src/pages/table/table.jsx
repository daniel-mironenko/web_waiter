import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import TableHeader from "../../components/table-header/table-header";
import TableMenu from "../../components/table-menu/table-menu";
import TableOrderV2 from "../../components/table-order-v2/table-order-v2";
import { orderTabs } from "../../enums";
import { getTables } from "../../redux-store/tables/selector";
import style from "./table.module.css";

export default function Table() {
  const tables = useSelector(getTables);
  const [activeOrderTab, setActiveOrderTab] = useState(orderTabs.NEW_ORDER);
  const [newOrder, setNewOrder] = useState([]);

  const match = useRouteMatch();
  const table = tables.find(
    (it) => it.numberOfTable === Number(match.params.number)
  );

  return (
    <div class={style.container}>
      <TableHeader
        table={table}
        activeOrderTab={activeOrderTab}
        setActiveOrderTab={setActiveOrderTab}
      />
      <div className={style.gridContainer}>
        <TableOrderV2 activeOrderTab={activeOrderTab} newOrder={newOrder}/>
        <TableMenu newOrder={newOrder} setNewOrder={setNewOrder}/>
      </div>
    </div>
  );
};
