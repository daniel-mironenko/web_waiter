import React, { useState } from "react";
import { useSelector } from "react-redux";
import { cardStatus } from "../../enums";
import { getClosedTables, getDaysClosedTables } from "../../redux-store/orders/selector";
import ClosedTablePopup from "../closed-table-popup/closed-table-popup";
import TableCard from "../table-card/table-card";
import style from "./closed-tables.module.css";

export default function ClosedTables() {
  const [activeTable, setActiveTable] = useState(null);
  const closedTables = useSelector(getClosedTables);
  const days = useSelector(getDaysClosedTables);

  function getAverageCheck(tables) {
    console.log(tables.length)
    return tables.reduce((acc, curr) => acc + curr.orderPrice, 0) / tables.length;
  }

  return (
    <div className={style.closedTablesContainer}>
      <h1 className={style.closedTablesTitle}>Закрытые столы</h1>
      {days.map((day) => {
        return (
          <section key={day} className={style.daySection}>
            <h3>Столы за: {day}</h3>
            <div className={style.closedTablesList}>
              {closedTables[day]
                .map((item) => {
                  return (
                    <div key={item.id} onClick={() => {
                      setActiveTable(item)
                    }}>
                      <TableCard
                        key={item.id}
                        table={item}
                        status={cardStatus.CLOSED}
                      />
                    </div>
                  );
                })}
            </div>
            <p className={style.averageCheck}>Средний чек за этот день: <strong>{getAverageCheck(closedTables[day])} руб</strong></p>
          </section>
        );
      })}

      {activeTable && <ClosedTablePopup table={activeTable} setActiveTable={setActiveTable}/>}
    </div>
  );
}
