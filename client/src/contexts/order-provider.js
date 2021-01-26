import React, { useRef, useState } from "react";
import { orderTabs } from "../enums";

export const OrderContext = React.createContext();

export default function OrderProvider({ children, order }) {
  const deleteBtnRef = useRef();
  const orderMoreOptionsRef = useRef();
  const [activeOrderTab, setActiveOrderTab] = useState(orderTabs.NEW_ORDER);
  const [newOrder, setNewOrder] = useState([]);
  const [activeProduct, setActiveProduct] = useState(null);
  const [isVisibleMoreOption, setIsVisibleMoreOption] = useState(false);

  return (
    <OrderContext.Provider value={{
      activeOrderTab,
      setActiveOrderTab,
      newOrder, setNewOrder,
      order, activeProduct,
      setActiveProduct,
      deleteBtnRef,
      isVisibleMoreOption,
      setIsVisibleMoreOption,
      orderMoreOptionsRef
    }}>
      {children}
    </OrderContext.Provider>
  );
};
