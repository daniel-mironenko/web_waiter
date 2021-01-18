import React, { useContext } from "react";
import { TableContext } from "../../contexts/table-provider";
import style from "./menu-not-available.module.css";
import { orderTabs } from "../../enums";

export default function MenuNotAvailable() {
  const {activeOrderTab} = useContext(TableContext);
  return (
    <div
      className={`${
        activeOrderTab !== orderTabs.NEW_ORDER && style.notAvailable
      }`}
    ></div>
  );
}
