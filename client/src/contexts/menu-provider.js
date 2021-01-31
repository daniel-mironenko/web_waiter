import React, { useRef, useState } from "react";
import { convertToHashTable, getRootId } from "../utils/menu-helper";

export const MenuContext = React.createContext();

export default function MenuProvider({ children, products, catalogs }) {
  const menu = convertToHashTable([...catalogs, ...products]);
  const rootCatalogID = getRootId(menu);
  const [currentCatalog, setCurrentCatalog] = useState(rootCatalogID);
  const catalog = menu[currentCatalog];
  const [isActiveSearch, setIsActiveSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
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
      setIsActiveSearch,
      searchValue,
      setSearchValue,
      products
    }}>
      {children}
    </MenuContext.Provider>
  );
}