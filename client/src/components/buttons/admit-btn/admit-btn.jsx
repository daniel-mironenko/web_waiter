import React from "react";
import style from "./admit-btn.module.css";

const AdmitBtn = React.forwardRef((props, ref) => {
  const { handler, text } = props;
  return (
    <button
      ref={ref}
      className={style.admitBtn}
      onClick={handler}
    >
      {text}
    </button>
  );
});

export default AdmitBtn;
