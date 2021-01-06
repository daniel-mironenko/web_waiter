import React from "react";
import style from "./add-button.module.css";

export default function AddButton({setIsOpenNewTablePopup}) {
  return <div onClick={() => {
    setIsOpenNewTablePopup(true);
  }} className={style.addNewTableBtn}>+</div>;
}
