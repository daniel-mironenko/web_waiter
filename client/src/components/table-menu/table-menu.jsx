import React, { Fragment, useRef, useState } from "react";
import style from "./table-menu.module.css";
import { useSelector } from "react-redux";
import { getMenu } from "../../redux-store/menu/selector";

export default function TableMenu() {
  const menu = useSelector(getMenu);
  const [currentCatalog, setCurrentCatalog] = useState("menu");
  const catalog = menu.nodes[currentCatalog];
  const navRef = useRef();

  return (
    <section className={style.menuContainer}>
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
      <nav ref={navRef} className={style.menuNav}>
        <ul className={style.menuNavList}>
          {menu.graph[currentCatalog].map((it) => {
            const node = menu.nodes[it];
            return (
              <Fragment>
                <li
                  key={node.name}
                  className={style.menuNavItem}
                  onClick={() => {
                    navRef.current.scroll(0, 0);
                    setCurrentCatalog(node.type);
                  }}
                >
                  <div
                    style={{ backgroundColor: node.color }}
                    className={style.itemImgContainer}
                  >
                    {node.photo && <img src={node.photo} alt={node.name} />}
                  </div>
                  <div className={style.itemInfo}>
                    <p className={style.ItemInfoTitle}>{node.name}</p>
                    <p className={style.ItemInfoPrice}>
                      {node.type === "product" ? `$${node.price}` : ``}
                    </p>
                  </div>
                </li>
              </Fragment>
            );
          })}
        </ul>
      </nav>
    </section>
  );
}
