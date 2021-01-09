import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { appRoute } from "../../enums";
import { getUserData } from "../../redux-store/user/selector";
import { getTime } from "../../utils/date-helper";
import style from "./table-header.module.css";

export default function TableHeader({ table }) {
  const userData = useSelector(getUserData);
  const history = useHistory();
  const { numberOfTable, numberOfGuests, startTime } = table;
  const { name, surname } = userData;

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
        <button className={`${style.navBtn} ${style.navBtnActive}`}>Новый заказ</button>
        <button className={style.navBtn}>История</button>
        <button className={style.navBtn}>Заказ</button>
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
}
