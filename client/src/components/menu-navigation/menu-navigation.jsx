import React from "react";
import { useSelector } from "react-redux";
import { menuNavigationMode } from "../../enums";
import { getMainMenu, getAdditiveMenu } from "../../redux-store/menu/selector";
import style from "./menu-navigation.module.css";

export default function MenuNavigation({
  setNewOrder,
  activeMode,
  setActiveMode,
}) {
  const { mode, currentCatalog } = activeMode;
  const getMenuByType =
    mode === menuNavigationMode.MAIN ? getMainMenu : getAdditiveMenu;
  const menu = useSelector(getMenuByType);

  const isGoToBack = menu[currentCatalog].parent ? true : false;

  function addProduct(product) {
    setNewOrder((prev) => {
      const newProduct = Object.assign({}, product, {
        count: 1,
        totalPrice: product.price,
        timeOrder: new Date(),
        comments: null,
        orderId: prev.length + 1,
      });
      return [...prev, newProduct];
    });
  }

  return (
    <nav
      className={`${style.menuNavigation} ${
        mode === menuNavigationMode.MAIN
          ? `${style.menuNavigationMain}`
          : `${style.menuNavigationAdditive}`
      }`}
    >
      <ul className={style.menuList}>
        {mode === menuNavigationMode.ADDITIVE && (
          <li
            onClick={() => {
              setActiveMode(() => ({
                mode: menuNavigationMode.MAIN,
                activeProduct: null,
                currentCatalog: "menu",
              }));
            }}
            className={`${style.menuItem} ${style.menuItemGoBackToHome}`}
          ></li>
        )}
        {isGoToBack && (
          <li
            onClick={() => {
              setActiveMode((prev) => ({
                ...prev,
                currentCatalog: menu[currentCatalog].parent,
              }));
            }}
            className={`${style.menuItem} ${style.menuItemGoBack}`}
          ></li>
        )}
        {menu[currentCatalog].children.map((it) => {
          return (
            <li key={it.name}>
              <button
                className={style.menuItem}
                onClick={() => {
                  if (it.type === "product") {
                    addProduct(it);
                    return;
                  }
                  setActiveMode((prev) => ({
                    ...prev,
                    currentCatalog: it.type,
                  }));
                }}
                disabled={it.type === "product" && !it.isAvailable}
              >
                {it.name}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
