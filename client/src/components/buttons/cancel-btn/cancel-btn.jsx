import React from "react";
import style from "./cancel-btn.module.css";

const CancelBtn = React.forwardRef((props, ref) => {
  const { handler, text } = props;
  return (
    <button ref={ref} className={style.cancelBtn} onClick={handler}>
      {text}
    </button>
  );
});

export default CancelBtn;
