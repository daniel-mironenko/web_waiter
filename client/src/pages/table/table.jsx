import React from "react";
import TableHeader from "../../components/table-header/table-header";
import TableMenuWrapper from "../../components/table-menu-wrapper/table-menu-wrapper";
import TableOrder from "../../components/table-order/table-order";
import TableProvider from "../../contexts/table-provider.js";
import style from "./table.module.css";

export default function Table() {
  return (
    <TableProvider>
      <div className={style.container}>
        <TableHeader />
        <div className={style.gridContainer}>
          <TableOrder />
          <TableMenuWrapper />
        </div>
      </div>
    </TableProvider>
  );
}
