import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { getMenu } from "../redux-store/menu/selector";
import { getRootId } from "../utils/menu-helper";

export const MenuContext = React.createContext();

export default function MenuProvider({ children }) {
  const menu = useSelector(getMenu);
  const rootCatalogID = getRootId(menu);
  const [currentCatalog, setCurrentCatalog] = useState(rootCatalogID);
  const catalog = menu[currentCatalog];
  const [isActiveSearch, setIsActiveSearch] = useState(false);
  const navRef = useRef();

  return (
    <MenuContext.Provider value={{
      menu,
      rootCatalogID,
      currentCatalog,
      setCurrentCatalog,
      catalog,
      navRef,
      isActiveSearch,
      setIsActiveSearch
    }}>
      {children}
    </MenuContext.Provider>
  );
}