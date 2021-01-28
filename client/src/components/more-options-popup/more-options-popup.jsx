import React, { useRef } from "react";
import { shake } from "../../animations/animations";
import { orderMoreOptions } from "../../enums";
import ChangeCount from "../change-count/change-count";
import ChangeWaiter from "../change-waiter/change-waiter";
import style from "./more-options-popup.module.css";

export default function MoreOptionsPopup({ orderOption }) {
  const popupRef = useRef();

  function errorHandler() {
    shake(popupRef.current);
  }

  function getCurrentOrderOption() {
    switch (orderOption) {
      case orderMoreOptions.CHANGE_GUESTS_COUNT:
      case orderMoreOptions.CHANGE_TABLE_NUMBER:
        return (
          <ChangeCount orderOption={orderOption} errorHandler={errorHandler} />
        );

      case orderMoreOptions.CHANGE_WAITER:
        return <ChangeWaiter errorHandler={errorHandler} />;

      default:
        return;
    }
  }

  return (
    <div className={style.moreOptionsPopupContainer}>
      <div ref={popupRef} className={style.orderOption}>
        <header className={style.orderOptionHeader}>{orderOption}</header>
        {getCurrentOrderOption()}
      </div>
    </div>
  );
}
