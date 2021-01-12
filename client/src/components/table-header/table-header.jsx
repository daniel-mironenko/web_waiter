import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { TableContext } from "../../contexts/table-provider";
import { appRoute, orderTabs } from "../../enums";
import { getUserData } from "../../redux-store/user/selector";
import { getTime } from "../../utils/date-helper";
import style from "./table-header.module.css";

export default function TableHeader() {
  const userData = useSelector(getUserData);
  const history = useHistory();
  const { name, surname } = userData;
  const {
    activeOrderTab,
    setActiveOrderTab,
    table,
    setActiveProduct,
  } = useContext(TableContext);
  const { numberOfTable, numberOfGuests, startTime } = table;

  return (
    <header className={style.tableHeader}>
      <div className={style.headerButtons}>
        <button
          className={style.goBackBtn}
          onClick={() => {
            history.push(appRoute.PRIVAT_OFFICE);
          }}
        >
          Мои столы
        </button>
        {Object.values(orderTabs).map((it) => {
          return (
            <button
              key={it}
              className={`${style.navBtn} ${
                activeOrderTab === it && style.navBtnActive
              }`}
              onClick={() => {
                setActiveProduct(null);
                setActiveOrderTab(it);
              }}
            >
              {it}
            </button>
          );
        })}
      </div>
      <div className={style.headerInfo}>
        <p className={style.numberOfTable}>Стол №{numberOfTable}</p>
        <p className={style.numberOfGuests}>Кол-во гостей {numberOfGuests}</p>
      </div>
      <ul className={style.additionalInformation}>
        <li className={style.startTime}>{getTime(startTime)}</li>
        <li className={style.owner}>{`${name} ${surname}`}</li>
      </ul>
    </header>
  );
};
