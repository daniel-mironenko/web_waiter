import React, { useContext } from "react";
import { MenuContext } from "../../contexts/menu-provider";
import { OrderContext } from "../../contexts/order-provider";
import style from "./menu-card.module.css";

export default function MenuCard({ item }) {
  const { setNewOrder, setCurrentProduct } = useContext(OrderContext);
  const { setCurrentCatalog, navRef } = useContext(MenuContext);

  function updateNewOrder(product) {
    setNewOrder((prev) => {
      const clonePrev = [...prev.map(it => ({...it}))];
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
            productId: product.id,
          },
        ];
      }
    });
  }

  return (
    <li
      className={`${style.menuNavItem} ${
        item.type === "product" && !item.isAvailable && style.notAvailable
      }`}
      onClick={() => {
        if (item.type === "product") {
          if (!item.isAvailable) return;
          updateNewOrder(item);
          setCurrentProduct(item.id);
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
        {item.photo && <img src={item.photo} alt={""} />}
      </div>
      <div className={style.itemInfo}>
        <p className={style.ItemInfoTitle}>{item.name}</p>
        <p className={style.ItemInfoPrice}>
          {item.type === "product" ? `$${item.price.toFixed(2)}` : ``}
        </p>
      </div>
    </li>
  );
}
