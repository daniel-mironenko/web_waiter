import React from "react";
import style from "./loader-menu.module.css";

export default function LoaderMenu() {
  return (
    <div className={style.loadingContainer}>
      <h1>Loading...</h1>
    </div>
  );
}
