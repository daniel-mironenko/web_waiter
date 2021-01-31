import React from "react";
import { orderMoreOptions } from "../../enums";
import style from "./order-more-options.module.css";

const OrderMoreOptions = React.forwardRef((props, ref) => {
  const { setIsVisibleMoreOptionsPopup, setCurrentOrderOption, setIsVisibleMoreOption } = props;
  return (
    <div ref={ref} className={style.moreOptionsContainer}>
      <ul className={style.moreOptionsList}>
        {Object.values(orderMoreOptions).map((it) => {
          return (
            <li
              key={it}
              onClick={() => {
                setIsVisibleMoreOption(false)
                setIsVisibleMoreOptionsPopup(true);
                setCurrentOrderOption(it);
              }}
            >
              {it}
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default OrderMoreOptions;
