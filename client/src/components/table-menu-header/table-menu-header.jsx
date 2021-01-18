import React, { Fragment, useContext } from "react";
import style from "./table-menu-header.module.css";
import { MenuContext } from "../../contexts/menu-provider";

export default function TableMenuHeader() {
  const {
    catalog,
    menu,
    navRef,
    setCurrentCatalog,
    rootCatalogID,
  } = useContext(MenuContext);

  return (
    <header className={style.menuHeader}>
      <div className={style.goToContainer}>
        {catalog.parentId && (
          <Fragment>
            <button
              className={`${style.goToBtn} ${style.goBackBtn}`}
              onClick={() => {
                navRef.current.scroll(0, 0);
                setCurrentCatalog(catalog.parentId);
              }}
            >
              {menu[catalog.parentId].name}
            </button>
            {catalog.parentId !== rootCatalogID && (
              <button
                className={`${style.goToBtn} ${style.goHomeBtn}`}
                onClick={() => {
                  navRef.current.scroll(0, 0);
                  setCurrentCatalog(rootCatalogID);
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
}
