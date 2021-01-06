import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getNotAvailableProducts } from "../../redux-store/menu/selector";
import style from "./stop-list.module.css";

export default function StopList() {
  const [currentFilter, setCurrentFilter] = useState("Все");
  const products = useSelector(getNotAvailableProducts);
  const localisations = [
    "Все",
    ...new Set(products.map((it) => it.localisation)),
  ];
  const productsByFilter =
    currentFilter === "Все"
      ? products
      : products.filter((it) => it.localisation === currentFilter);

  return (
    <section className={style.stopListContainer}>
      <h1>Стоп лист</h1>
      <nav>
        <ul>
          {localisations.map((it) => (
            <li
              key={it}
              className={`${
                currentFilter === it ? `${style.activeFilter}` : ``
              } ${style.localisationFilter}`}
              onClick={() => {
                setCurrentFilter(it);
              }}
            >
              {it}
            </li>
          ))}
        </ul>
      </nav>

      <table className={style.stopListTable}>
        <tbody>
          <tr>
            <th>N</th>
            <th>Продукт</th>
            <th>Локализация</th>
            <th>Причина</th>
          </tr>
          {productsByFilter.map((it, index) => (
            <tr key={it.name}>
              <td>{index + 1}</td>
              <td>{it.name}</td>
              <td>{it.localisation}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
