import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { appRoute, cardStatus } from "../../enums";
import { getTables } from "../../redux-store/tables/selector";
import AddButton from "../buttons/add-button/add-button";
import NewTablePopup from "../new-table-popup/new-table-popup";
import TableCard from "../table-card/table-card";
import style from "./my-tables.module.css";

export default function MyTables() {
  const tables = useSelector(getTables);
  const [isOpenNewTablePopup, setIsOpenNewTablePopup] = useState(false);

  return (
    <section className={style.myTablesContainer}>
      <header className={style.myTabelsHeader}>
        <h2 className={style.myTableCount}>
          Мои столы: <strong>{tables.length}</strong>
        </h2>
      </header>
      <div className={style.myTableBoard}>
        <section className={style.tablesList}>
          {tables.map((it) => (
            <Link key={it.id} to={`${appRoute.TABLE}/${it.numberOfTable}`}>
              <TableCard  table={it} status={cardStatus.OPEN}/>
            </Link>
          ))}
        </section>
      </div>

      {isOpenNewTablePopup && (
        <NewTablePopup setIsOpenNewTablePopup={setIsOpenNewTablePopup} />
      )}

      <AddButton setIsOpenNewTablePopup={setIsOpenNewTablePopup} />
    </section>
  );
}
