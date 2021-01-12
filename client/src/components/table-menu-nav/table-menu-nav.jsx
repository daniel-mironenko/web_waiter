import React, { useContext } from "react";
import { TableContext } from "../../contexts/table-provider";
import style from "./table-menu-nav.module.css";

export default function TableMenuNav({
  menu,
  currentCatalog,
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
          },
        ];
      }
    });
  }

  return (
    <nav ref={navRef} className={style.menuNav}>
      <ul className={style.menuNavList}>
        {menu.graph[currentCatalog].map((it) => {
          const node = menu.nodes[it];
          return (
            <li
              key={node.name}
              className={style.menuNavItem}
              onClick={() => {
                if (node.type === "product") {
                  updateNewOrder(node);
                  return;
                }
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
          );
        })}
      </ul>
    </nav>
  );
}
