import React, { Fragment } from "react";
import FilterByCategory from "../filter-by-category/filter-by-category";
import OfficeBoardHeader from "../office-board-header/office-board-header";
import style from "./stop-list.module.css";

export default function StopList() {
  return (
    <Fragment>
      <OfficeBoardHeader>Стоп лист</OfficeBoardHeader>
      <FilterByCategory />
      <div className={style.tableContainer}>
        <table className={style.stopListTable}>
          <thead className={style.tableHeader}>
            <tr>
              <th>№</th>
              <th>Название продукта</th>
              <th>Ктегория</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Министроне</td>
              <td>Супы</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Цезарь</td>
              <td>Салаты</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Вишневый сок</td>
              <td>Соки</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Цезарь</td>
              <td>Салаты</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Вишневый сок</td>
              <td>Соки</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Цезарь</td>
              <td>Салаты</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Вишневый сок</td>
              <td>Соки</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Цезарь</td>
              <td>Салаты</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Вишневый сок</td>
              <td>Соки</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Цезарь</td>
              <td>Салаты</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Вишневый сок</td>
              <td>Соки</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Цезарь</td>
              <td>Салаты</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Вишневый сок</td>
              <td>Соки</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Цезарь</td>
              <td>Салаты</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Вишневый сок</td>
              <td>Соки</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Цезарь</td>
              <td>Салаты</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Вишневый сок</td>
              <td>Соки</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Цезарь</td>
              <td>Салаты</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Вишневый сок</td>
              <td>Соки</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Цезарь</td>
              <td>Салаты</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Вишневый сок</td>
              <td>Соки</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}
