import React, { useState } from "react";
import { orderTabs } from "../enums";

export const TableContext = React.createContext();

export default function TableProvider({ children }) {
  const [activeOrderTab, setActiveOrderTab] = useState(orderTabs.NEW_ORDER);

  return (
    <TableContext.Provider value={{ activeOrderTab, setActiveOrderTab }}>
      {children}
    </TableContext.Provider>
  );
}
