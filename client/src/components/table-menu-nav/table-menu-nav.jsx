import React, { Fragment, useContext } from "react";
import { useSelector } from "react-redux";
import { MenuContext } from "../../contexts/menu-provider";
import MenuCard from "../menu-card/menu-card";
import { getProducts } from "../../redux-store/menu/selector";
import style from "./table-menu-nav.module.css";

export default function TableMenuNav() {
  const { menu, catalog, navRef, isActiveSearch, searchValue } = useContext(
    MenuContext
  );
  const products = useSelector(getProducts);

  return (
    <nav ref={navRef} className={style.menuNav}>
      <ul className={style.menuNavList}>
        {isActiveSearch ? (
          <Fragment>
            {products
              .filter((it) => searchValue === it.name)
              .map((item) => {
                return <MenuCard key={item.name} item={item} />;
              })}
          </Fragment>
        ) : (
          <Fragment>
            {catalog.childrenId.map((child) => {
              const item = menu[child];
              return <MenuCard key={item.name} item={item} />;
            })}
          </Fragment>
        )}
      </ul>
    </nav>
  );
}
