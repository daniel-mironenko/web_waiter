import React from "react";
import ChangeCount from "../change-count/change-count";
import style from "./more-options-popup.module.css";

export default function MoreOptionsPopup({ orderOption }) {
  return (
    <div className={style.moreOptionsPopupContainer}>
      <div className={style.orderOption}>
        <header className={style.orderOptionHeader}>{orderOption}</header>
        <ChangeCount orderOption={orderOption}/>
      </div>
    </div>
  );
}
