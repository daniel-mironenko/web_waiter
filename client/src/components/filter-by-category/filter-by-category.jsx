import React from "react";
import style from "./filter-by-category.module.css";

export default function FilterByCategory() {
  return (
    <form className={style.filterByCategoryForm}>
      <input className={style.filterRadio} id="category" type="radio" name="category" />
      <label className={style.filterLable} htmlFor="category">Все категории</label>

      <input className={style.filterRadio} id="category1" type="radio" name="category" />
      <label className={style.filterLable} htmlFor="category1">Салаты</label>
    </form>
  );
}