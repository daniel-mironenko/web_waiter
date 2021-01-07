import React, { useState } from "react";
import style from "./table-menu.module.css";
import { useSelector } from "react-redux";
import { getMenu } from "../../redux-store/menu/selector";

export default function TableMenu() {
  const menu = useSelector(getMenu);
  const [currentCatalog, setCurrentCatalog] = useState("menu");
  const catalog = menu.nodes[currentCatalog];

  return (
    <section className={style.menuContainer}>
      <header className={style.menuHeader}>
        <div className={style.goBackContainer}>
          {catalog.catalog && (
            <button
              className={style.goBackBtn}
              onClick={() => {
                setCurrentCatalog(catalog.catalog);
              }}
            >
              {menu.nodes[catalog.catalog].name}
            </button>
          )}
        </div>
        <div className={style.headerTitleContainer}>
          <p className={style.menuHeaderTitle}>{catalog.name}</p>
        </div>
        <div className={style.serachContainer}>
          <button className={style.searchBtn}></button>
        </div>
      </header>
      <nav className={style.menuNav}>
        <ul className={style.menuNavList}>
          {menu.graph[currentCatalog].map((it) => {
            const node = menu.nodes[it];
            return (
              <li
                className={style.menuNavItem}
                onClick={() => {
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
            );
          })}
        </ul>
      </nav>
    </section>
  );
}
