import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import TableHeader from "../../components/table-header/table-header";
import TableMenu from "../../components/table-menu/table-menu";
import TableOrder from "../../components/table-order/table-order";
import { getTables } from "../../redux-store/tables/selector";
import TableProvider from "../../contexts/table-provider.js";
import style from "./table.module.css";

export default function Table() {
  const tables = useSelector(getTables);
  const [newOrder, setNewOrder] = useState([]);
  const [activeProduct, setActiveProduct] = useState(null);

  const match = useRouteMatch();
  const table = tables.find(
    (it) => it.numberOfTable === Number(match.params.number)
  );

  return (
    <TableProvider>
      <div className={style.container}>
        <TableHeader table={table} setActiveProduct={setActiveProduct} />
        <div className={style.gridContainer}>
          <TableOrder
            table={table}
            activeProduct={activeProduct}
            setActiveProduct={setActiveProduct}
          />
          <TableMenu />
        </div>
      </div>
    </TableProvider>
  );
}
