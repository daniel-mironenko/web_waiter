import React, { useRef, useState } from "react";
import { orderTabs } from "../enums";

export const TableContext = React.createContext();

export default function TableProvider({ children, table }) {
  const deleteBtnRef = useRef();
  const [activeOrderTab, setActiveOrderTab] = useState(orderTabs.NEW_ORDER);
  const [newOrder, setNewOrder] = useState([]);
  const [activeProduct, setActiveProduct] = useState(null);

  return (
    <TableContext.Provider value={{
      activeOrderTab,
      setActiveOrderTab,
      newOrder, setNewOrder,
      table, activeProduct,
      setActiveProduct,
      deleteBtnRef,
    }}>
      {children}
    </TableContext.Provider>
  );
};
