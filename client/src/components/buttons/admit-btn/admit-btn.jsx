import React from "react";
import style from "./admit-btn.module.css";

const AdmitBtn = React.forwardRef((props, ref) => {
  const { handler, text, disabled } = props;
  return (
    <button
      ref={ref}
      className={style.admitBtn}
      onClick={handler}
      disabled={disabled}
    >
      {text}
    </button>
  );
});

export default AdmitBtn;
