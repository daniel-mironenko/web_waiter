import React, { Fragment, useContext, useState } from "react";
import { OrderContext } from "../../contexts/order-provider";
import { orderMoreOptions } from "../../enums";
import style from "./change-count.module.css";

export default function ChangeCount({ orderOption }) {
  const {order, setIsVisibleMoreOptionsPopup} = useContext(OrderContext);
  const [newValue, setNewValue] = useState(null);

  let property = ""
  let placeholder = "";
  if (orderOption === orderMoreOptions.CHANGE_GUESTS_COUNT) {
    placeholder = "Впишите новое количестово гостей";
    property = "guestsCount";
  } else if (orderOption === orderMoreOptions.CHANGE_TABLE_NUMBER) {
    placeholder = "Впишите новый номер стола";
    property = "tableNumber"
  }

  function getUpdatedOrder() {
    return {
      ...order,
      [property]: newValue
    }
  }

  return (
    <Fragment>
      <form className={style.changeCountContainer}>
        <input
          type="number"
          name="change-count"
          placeholder={placeholder}
          className={style.changeCountInput}
          onChange={(evt) => {
            setNewValue(Number(evt.target.value));
          }}
        />
      </form>
      <footer className={style.changeCountFooter}>
        <button className={style.cancelBtn} onClick={() => {
          setIsVisibleMoreOptionsPopup(false);
        }}>Отменить</button>
        <button className={style.admitBtn} onClick={() => {
          getUpdatedOrder();
        }}>Принять</button>
      </footer>
    </Fragment>
  );
}
