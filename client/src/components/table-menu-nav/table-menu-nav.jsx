import React, { useContext } from "react";
import { TableContext } from "../../contexts/table-provider";
import style from "./table-menu-nav.module.css";

export default function TableMenuNav({
  menu,
  catalog,
  setCurrentCatalog,
  navRef,
}) {
  const { setNewOrder } = useContext(TableContext);

  function updateNewOrder(product) {
    setNewOrder((prev) => {
      const clonePrev = [...prev];
      const index = clonePrev.findIndex((it) => it.name === product.name);
      if (index !== -1) {
        clonePrev[index].count = clonePrev[index].count + 1;
        return clonePrev;
      } else {
        return [
          ...prev,
          {
            name: product.name,
            count: 1,
            price: product.price,
            comment: null,
          },
        ];
      }
    });
  }

  return (
    <nav ref={navRef} className={style.menuNav}>
      <ul className={style.menuNavList}>
        {catalog.childrenId.map((child) => {
          const item = menu[child];
          return (
            <li
              key={item.name}
              className={`${style.menuNavItem}`}
              onClick={() => {
                if (item.type === "product") {
                  updateNewOrder(item);
                  return;
                }
                navRef.current.scroll(0, 0);
                setCurrentCatalog(item.id);
              }}
            >
              <div
                style={{ backgroundColor: item.color }}
                className={style.itemImgContainer}
              >
                {item.photo && <img src={item.photo} alt={item.name} />}
              </div>
              <div className={style.itemInfo}>
                <p className={style.ItemInfoTitle}>{item.name}</p>
                <p className={style.ItemInfoPrice}>
                  {item.type === "product" ? `$${item.price}` : ``}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
