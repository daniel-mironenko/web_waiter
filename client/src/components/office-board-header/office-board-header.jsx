import React from "react";
import style from "./office-board-header.module.css";

export default function OfficeBoardHeader({ children }) {
  return (
    <header className={style.officeBoardHeader}>
      <h2>{children}</h2>
    </header>
  );
}
