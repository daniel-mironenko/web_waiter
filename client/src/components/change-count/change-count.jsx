import React, { Fragment, useContext, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { OrderContext } from "../../contexts/order-provider";
import { orderMoreOptions } from "../../enums";
import { Operation } from "../../redux-store/orders/orders-reducer";
import OptionsPopupFooter from "../options-popup-footer/options-popup-footer";
import style from "./change-count.module.css";

export default function ChangeCount({ orderOption, errorHandler }) {
  const dispatch = useDispatch();
  const { order, setIsVisibleMoreOptionsPopup } = useContext(OrderContext);
  const [newValue, setNewValue] = useState(null);
  const admitBtnRef = useRef();
  const cancelBtnRef = useRef();

  let property = "";
  let placeholder = "";
  if (orderOption === orderMoreOptions.CHANGE_GUESTS_COUNT) {
    placeholder = "Enter the new number of guests";
    property = "guestsCount";
  } else if (orderOption === orderMoreOptions.CHANGE_TABLE_NUMBER) {
    placeholder = "Enter the new table number";
    property = "tableNumber";
  }

  function getUpdatedOrder() {
    return {
      id: order.id,
      [property]: newValue,
    };
  }

  function onSuccess() {
    setIsVisibleMoreOptionsPopup(false);
  }

  function onError() {
    errorHandler(() => {
      admitBtnRef.current.disabled = false;
      cancelBtnRef.current.disabled = false;
    });
  }

  function admitHandler() {
    cancelBtnRef.current.disabled = true;
    admitBtnRef.current.disabled = true;
    dispatch(Operation.updateAtiveOrder(getUpdatedOrder(), onSuccess, onError));
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
      <OptionsPopupFooter
        cancelBtnRef={cancelBtnRef}
        admitBtnRef={admitBtnRef}
        admitHandler={admitHandler}
        admitBtnDisabled={newValue === order[property] || !Boolean(newValue)}
      />
    </Fragment>
  );
}
