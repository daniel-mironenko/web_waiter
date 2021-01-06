import React from "react";
import { useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import TableHeader from "../../components/table-header/table-header";
import TableMenu from "../../components/table-menu/table-menu"
import TableOrderV2 from "../../components/table-order-v2/table-order-v2";
import { getTables } from "../../redux-store/tables/selector";
import style from "./table.module.css";

export default function Table() {
  const tables = useSelector(getTables);

  const match = useRouteMatch();
  const table = tables.find(
    (it) => it.numberOfTable === Number(match.params.number)
  );

  return (
    <div className={style.gridContainer}>
      <div className={style.gridHeader}>
        <TableHeader table={table} />
      </div>
      <div className={style.gridOrder}>
        <TableOrderV2 />
      </div>
      <div className={style.gridMenu}>
        <TableMenu />
      </div>
    </div>
  );
}
