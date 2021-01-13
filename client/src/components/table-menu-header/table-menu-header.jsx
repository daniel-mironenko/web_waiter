import React, { Fragment } from "react";
import style from "./table-menu-header.module.css";

export default function TableMenuHeader({
  catalog,
  menu,
  navRef,
  setCurrentCatalog,
}) {
  return (
    <header className={style.menuHeader}>
      <div className={style.goToContainer}>
        {catalog.catalog && (
          <Fragment>
            <button
              className={`${style.goToBtn} ${style.goBackBtn}`}
              onClick={() => {
                navRef.current.scroll(0, 0);
                setCurrentCatalog(catalog.catalog);
              }}
            >
              {menu.nodes[catalog.catalog].name}
            </button>
            {catalog.catalog !== "menu" && (
              <button
                className={`${style.goToBtn} ${style.goHomeBtn}`}
                onClick={() => {
                  navRef.current.scroll(0, 0);
                  setCurrentCatalog("menu");
                }}
              >
                Главное меню
              </button>
            )}
          </Fragment>
        )}
      </div>
      <div className={style.headerTitleContainer}>
        <p className={style.menuHeaderTitle}>{catalog.name}</p>
      </div>
      <div className={style.serachContainer}>
        <button className={style.searchBtn}></button>
      </div>
    </header>
  );
};
