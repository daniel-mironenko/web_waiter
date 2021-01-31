import React, { useRef, useState } from "react";
import { orderTabs } from "../enums";

export const OrderContext = React.createContext();

export default function OrderProvider({ children, order }) {
  const deleteBtnRef = useRef();
  const [activeOrderTab, setActiveOrderTab] = useState(orderTabs.NEW_ORDER);
  const [newOrder, setNewOrder] = useState([]);
  const [activeProduct, setActiveProduct] = useState(null);
  const [isVisibleMoreOption, setIsVisibleMoreOption] = useState(false);
  const [isVisibleMoreOptionsPopup, setIsVisibleMoreOptionsPopup] = useState(
    false
  );
  const [currentOrderOption, setCurrentOrderOption] = useState(null);

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
      isVisibleMoreOptionsPopup,
      setIsVisibleMoreOptionsPopup,
      setCurrentOrderOption,
      currentOrderOption,
    }}>
      {children}
    </OrderContext.Provider>
  );
};
