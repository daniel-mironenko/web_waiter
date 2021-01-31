import React, { Fragment, useContext } from "react";
import { MenuContext } from "../../contexts/menu-provider";
import MenuCard from "../menu-card/menu-card";
import Fuse from "fuse.js";
import style from "./order-menu-nav.module.css";

export default function OrderMenuNav() {
  const { menu, catalog, navRef, isActiveSearch, searchValue, products } = useContext(
    MenuContext
  );
  const fuse = new Fuse(products, {
    keys: ["name"]
  });
  const resultFuseSearch = fuse.search(searchValue);

  return (
    <nav ref={navRef} className={style.menuNav}>
      <ul className={style.menuNavList}>
        {isActiveSearch ? (
          <Fragment>
            {resultFuseSearch.map((product) => {
              return <MenuCard key={product.item.name} item={product.item} />;
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
