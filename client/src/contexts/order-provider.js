import React, { useRef, useState } from "react";
import { orderTabs } from "../enums";

export const OrderContext = React.createContext();

export default function OrderProvider({ children, order }) {
  const deleteBtnRef = useRef();
  const [activeOrderTab, setActiveOrderTab] = useState(orderTabs.NEW_ORDER);
  const [newOrder, setNewOrder] = useState([]);
  const [activeProduct, setActiveProduct] = useState(null);

  return (
    <OrderContext.Provider value={{
      activeOrderTab,
      setActiveOrderTab,
      newOrder, setNewOrder,
      order, activeProduct,
      setActiveProduct,
      deleteBtnRef,
    }}>
      {children}
    </OrderContext.Provider>
  );
};
