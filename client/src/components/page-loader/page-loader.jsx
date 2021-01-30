import React from "react";
import style from "./page-loader.module.css";

export default function PageLoader() {
  return (
    <div className={style.pageLoaderContainer}>
      <div className={style.loader}>Загрузка...</div>
    </div>
  );
}
