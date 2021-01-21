import React from "react";
import { useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import TableHeader from "../../components/table-header/table-header";
import TableMenu from "../../components/table-menu/table-menu";
import TableOrder from "../../components/table-order/table-order";
import TableProvider from "../../contexts/table-provider.js";
import { getTables } from "../../redux-store/tables/selector";
import ErrorPage from "../error-page/error-page";
import style from "./table.module.css";

export default function Table() {
  const tables = useSelector(getTables);
  const match = useRouteMatch();
  const table = tables.find(
    (it) => it.numberOfTable === Number(match.params.number)
  );

  if (!table) {
    return <ErrorPage message={`Не найдено заказ №${match.params.number}`} />
  }

  return (
    <TableProvider table={table}>
      <div className={style.container}>
        <TableHeader />
        <div className={style.gridContainer}>
          <TableOrder />
          <TableMenu />
        </div>
      </div>
    </TableProvider>
  );
}
