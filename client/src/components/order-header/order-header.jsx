import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { OrderContext } from "../../contexts/order-provider";
import { appRoute, orderTabs } from "../../enums";
import { getUserData } from "../../redux-store/user/selector";
import { getTime } from "../../utils/date-helper";
import style from "./order-header.module.css";

export default function OrderHeader() {
  const userData = useSelector(getUserData);
  const history = useHistory();
  const { name, surname } = userData;
  const {
    activeOrderTab,
    setActiveOrderTab,
    order,
    setActiveProduct,
  } = useContext(OrderContext);
  const { id: orderId, tableNumber, guestsCount, dateStart } = order;

  return (
    <header className={style.tableHeader}>
      <div className={style.headerButtons}>
        <button
          className={style.goBackBtn}
          onClick={() => {
            history.push(appRoute.PRIVAT_OFFICE);
          }}
        >
          My orders
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
        <p className={style.numberOfTable}>Table №{tableNumber}</p>
        <p className={style.numberOfGuests}>Number of guests {guestsCount}</p>
      </div>
      <ul className={style.additionalInformation}>
        <li className={style.startTime}>Order: №{orderId}</li>
        <li className={style.startTime}>{getTime(dateStart)}</li>
        <li className={style.owner}>{`${name} ${surname}`}</li>
      </ul>
    </header>
  );
}
