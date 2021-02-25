import React, { Fragment } from "react";
import style from "./filter-by-category.module.css";

export default function FilterByCategory({ catalogs, setActiveFilter }) {
  return (
    <form className={style.filterByCategoryForm}>
      <input
        className={style.filterRadio}
        id="All categories"
        type="radio"
        name="category"
        defaultChecked={true}
        onChange={() => {
          setActiveFilter("All categories");
        }}
      />
      <label className={style.filterLable} htmlFor="All categories">
        All categories
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
          <label className={style.filterLable} htmlFor={it}>
            {it}
          </label>
        </Fragment>
      ))}
    </form>
  );
}
