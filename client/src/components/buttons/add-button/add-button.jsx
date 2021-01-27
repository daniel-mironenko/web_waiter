import React from "react";
import style from "./add-button.module.css";

const AddButton = React.forwardRef((props, ref) => {
  const { handler } = props;
  return (
    <div ref={ref} onClick={handler} className={style.addNewTableBtn}>
      +
    </div>
  );
});

export default AddButton;
