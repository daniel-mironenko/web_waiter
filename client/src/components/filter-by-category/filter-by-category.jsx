import React, { Fragment } from "react";
import style from "./filter-by-category.module.css";

export default function FilterByCategory({ catalogs, setActiveFilter }) {
  return (
    <form className={style.filterByCategoryForm}>
      <input
        className={style.filterRadio}
        id="Все категории"
        type="radio"
        name="category"
        defaultChecked={true}
        onChange={() => {
          setActiveFilter("Все категории");
        }}
      />
      <label
        className={style.filterLable}
        htmlFor="Все категории"
      >
        Все категории
      </label>

      {catalogs.map((it) => (
        <Fragment key={it}>
          <input
            className={style.filterRadio}
            id={it}
            type="radio"
            name="category"
            onChange={() => {
              setActiveFilter(it);
            }}
          />
          <label
            className={style.filterLable}
            htmlFor={it}
          >
            {it}
          </label>
        </Fragment>
      ))}
    </form>
  );
}
