import React, { useContext, useRef, useState } from "react";
import style from "./table-menu.module.css";
import { useSelector } from "react-redux";
import { getMenu } from "../../redux-store/menu/selector";
import TableMenuHeader from "../table-menu-header/table-menu-header";
import TableMenuNav from "../table-menu-nav/table-menu-nav";
import { TableContext } from "../../contexts/table-provider";
import { orderTabs } from "../../enums";
import MenuPopup from "../menu-popup/menu-popup";

export default function TableMenu() {
  const menu = useSelector(getMenu);
  const { activeOrderTab } = useContext(TableContext);
  const [currentCatalog, setCurrentCatalog] = useState("menu");
  const catalog = menu.nodes[currentCatalog];
  const navRef = useRef();

  return (
    <section className={style.menuContainer}>
      <TableMenuHeader
        catalog={catalog}
        menu={menu}
        navRef={navRef}
        setCurrentCatalog={setCurrentCatalog}
      />
      <TableMenuNav
        menu={menu}
        currentCatalog={currentCatalog}
        setCurrentCatalog={setCurrentCatalog}
        navRef={navRef}
      />
      <div
        className={`${
          activeOrderTab !== orderTabs.NEW_ORDER && style.notAvailable
        }`}
      ></div>
      {/* <MenuPopup /> */}
    </section>
  );
}
