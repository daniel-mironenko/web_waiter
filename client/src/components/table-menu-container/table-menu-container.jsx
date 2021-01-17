import React from "react";

import style from "./table-menu-container.module.css";

export default function TableMenuContainer({ children }) {
  return <section className={style.menuContainer}>{children}</section>;
}
