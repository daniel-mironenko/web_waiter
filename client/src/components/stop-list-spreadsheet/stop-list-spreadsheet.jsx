import React from "react";
import style from "./stop-list-spreadsheet.module.css";

export default function StopListSpreadsheet({ products, productsByFilter }) {
  return (
    <div className={style.tableContainer}>
      <table className={style.stopListTable}>
        <thead className={style.tableHeader}>
          <tr>
            <th>№</th>
            <th>Product's name</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {products.length ? (
            <>
              {productsByFilter.map((it, index) => (
                <tr key={it.id}>
                  <td>{index + 1}</td>
                  <td>{it.name}</td>
                  <td>{it.catalog}</td>
                </tr>
              ))}
            </>
          ) : (
            <div className={style.emptyStopList}>
              <h2>All positions are available</h2>
            </div>
          )}
        </tbody>
      </table>
    </div>
  );
}
