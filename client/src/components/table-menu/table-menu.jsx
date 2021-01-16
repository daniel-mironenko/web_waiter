import React, { useContext, useRef, useState } from "react";
import style from "./table-menu.module.css";
import { useSelector } from "react-redux";
import { getMenu } from "../../redux-store/menu/selector";
import TableMenuHeader from "../table-menu-header/table-menu-header";
import TableMenuNav from "../table-menu-nav/table-menu-nav";
import { TableContext } from "../../contexts/table-provider";
import { orderTabs } from "../../enums";
import { getRootId } from "../../utils/menu-helper";

export default function TableMenu() {
  const menu = useSelector(getMenu);
  const { activeOrderTab } = useContext(TableContext);
  const rootCatalogID = getRootId(menu);
  const [currentCatalog, setCurrentCatalog] = useState(rootCatalogID);
  const catalog = menu[currentCatalog];
  const navRef = useRef();

  return (
    <section className={style.menuContainer}>
      <TableMenuHeader
        catalog={catalog}
        menu={menu}
        navRef={navRef}
        setCurrentCatalog={setCurrentCatalog}
        rootCatalogID={rootCatalogID}
      />
      <TableMenuNav
        menu={menu}
        catalog={catalog}
        currentCatalog={currentCatalog}
        setCurrentCatalog={setCurrentCatalog}
        navRef={navRef}
      />
      <div
        className={`${
          activeOrderTab !== orderTabs.NEW_ORDER && style.notAvailable
        }`}
      ></div>
    </section>
  );
}
