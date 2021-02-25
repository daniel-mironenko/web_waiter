import React, { useContext } from "react";
import { OrderContext } from "../../contexts/order-provider";
import AdmitBtn from "../buttons/admit-btn/admit-btn";
import CancelBtn from "../buttons/cancel-btn/cancel-btn";
import style from "./options-popup-footer.module.css";

export default function OptionsPopupFooter({
  admitBtnRef,
  cancelBtnRef,
  admitHandler,
  admitBtnDisabled
}) {
  const { setIsVisibleMoreOptionsPopup } = useContext(OrderContext);

  function cancelHandler() {
    setIsVisibleMoreOptionsPopup(false);
  }


  return (
    <footer className={style.optionsPopupFooter}>
      <CancelBtn ref={cancelBtnRef} handler={cancelHandler} text={"Cancel"} />
      <AdmitBtn ref={admitBtnRef} handler={admitHandler} text={"Admit"} disabled={admitBtnDisabled}/>
    </footer>
  );
}
