import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { orderTabs } from "../enums";
import { getTables } from "../redux-store/tables/selector";

export const TableContext = React.createContext();

export default function TableProvider({ children }) {
  const tables = useSelector(getTables);

  const [activeOrderTab, setActiveOrderTab] = useState(orderTabs.NEW_ORDER);
  const [newOrder, setNewOrder] = useState([]);

  const match = useRouteMatch();
  const table = tables.find(
    (it) => it.numberOfTable === Number(match.params.number)
  );


  return (
    <TableContext.Provider value={{ activeOrderTab, setActiveOrderTab, newOrder, setNewOrder, table }}>
      {children}
    </TableContext.Provider>
  );
}
