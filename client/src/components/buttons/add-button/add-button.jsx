import React from "react";
import style from "./add-button.module.css";

export default function AddButton({setIsOpenNewOrderPopup}) {
  return <div onClick={() => {
    setIsOpenNewOrderPopup(true);
  }} className={style.addNewTableBtn}>+</div>;
}
