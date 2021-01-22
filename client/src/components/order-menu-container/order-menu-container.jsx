import React from "react";

import style from "./order-menu-container.module.css";

export default function OrderMenuContainer({ children }) {
  return <section className={style.menuContainer}>{children}</section>;
}
