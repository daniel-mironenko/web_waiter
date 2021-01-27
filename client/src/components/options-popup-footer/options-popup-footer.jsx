import React from "react";
import AdmitBtn from "../buttons/admit-btn/admit-btn";
import CancelBtn from "../buttons/cancel-btn/cancel-btn";
import style from "./options-popup-footer.module.css";

export default function OptionsPopupFooter({
  admitBtnRef,
  cancelBtnRef,
  cancelHandler,
  admitHandler,
}) {
  return (
    <footer className={style.optionsPopupFooter}>
      <CancelBtn ref={cancelBtnRef} handler={cancelHandler} text={"Отменить"} />
      <AdmitBtn ref={admitBtnRef} handler={admitHandler} text={"Принять"} />
    </footer>
  );
}
