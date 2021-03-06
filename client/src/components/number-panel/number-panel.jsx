import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import style from "./number-panel.module.css";
import { useDispatch } from "react-redux";
import { appRoute } from "../../enums";
import { Operation } from "../../redux-store/user/user-reducer";
import { shake } from "../../animations/animations";

export default function NumberPanel() {
  const [pass, setPass] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const numberPanelRef = useRef();

  function panelOnClick(evt) {
    const target = evt.target.dataset.panel;

    if (!isNaN(Number(target))) {
      if (pass.length < 4) setPass((prev) => [...prev, Number(target)]);
    } else if (target === "clear") {
      if (pass.length) setPass([]);
    } else if (target === "delete") {
      if (pass.length) setPass((prev) => prev.slice(0, -1));
    }
  }

  useEffect(() => {
    if (pass.length === 4) {
      dispatch(
        Operation.login(
          {
            pass: Number(pass.join("")),
            position: "waiter",
          },
          onSuccess,
          onError
        )
      );
    }
  }, [pass]);

  const onSuccess = () => {
    history.push(appRoute.PRIVAT_OFFICE);
  };

  function animationHandler() {
    setPass([]);
  }

  const onError = () => {
    shake(numberPanelRef.current, animationHandler);
  };

  return (
    <div ref={numberPanelRef} className={style.numberPanelContainer}>
      <ul className={style.passProgressContainer}>
        {new Array(4).fill("").map((_, index) => (
          <li
            key={index}
            className={`${style.passProgress} ${
              pass.length > index && style.fillProgress
            }`}
          ></li>
        ))}
      </ul>
      <ul className={style.numberList} onClick={panelOnClick}>
        <li data-panel={1}>1</li>
        <li data-panel={2}>2</li>
        <li data-panel={3}>3</li>
        <li data-panel={4}>4</li>
        <li data-panel={5}>5</li>
        <li data-panel={6}>6</li>
        <li data-panel={7}>7</li>
        <li data-panel={8}>8</li>
        <li data-panel={9}>9</li>
        <li data-panel={"clear"}>
          <b>C</b>
        </li>
        <li data-panel={0}>0</li>
        <li data-panel={"delete"}>
          <b>X</b>
        </li>
      </ul>
    </div>
  );
}
