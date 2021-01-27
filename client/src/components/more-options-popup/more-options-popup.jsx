import React, { useRef } from "react";
import { shake } from "../../animations/animations";
import ChangeCount from "../change-count/change-count";
import style from "./more-options-popup.module.css";

export default function MoreOptionsPopup({ orderOption }) {
  const popupRef = useRef(); 

  function errorHandler() {
    shake(popupRef.current);
  }

  return (
    <div className={style.moreOptionsPopupContainer}>
      <div ref={popupRef} className={style.orderOption}>
        <header className={style.orderOptionHeader}>{orderOption}</header>
        <ChangeCount orderOption={orderOption} errorHandler={errorHandler}/>
      </div>
    </div>
  );
}
