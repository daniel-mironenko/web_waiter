import React, { useState } from "react";
import { orderTabs } from "../enums";

export const TableContext = React.createContext();

export default function TableProvider({ children }) {
  const [activeOrderTab, setActiveOrderTab] = useState(orderTabs.NEW_ORDER);
  const [newOrder, setNewOrder] = useState([]);


  return (
    <TableContext.Provider value={{ activeOrderTab, setActiveOrderTab, newOrder, setNewOrder }}>
      {children}
    </TableContext.Provider>
  );
}
