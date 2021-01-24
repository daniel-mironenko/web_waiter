import React from "react";
import { useHistory } from "react-router-dom";
import style from "./error-page.module.css";

export default function ErrorPage({ message }) {
  const history = useHistory();
  return (
    <div className={style.errorPageContainer}>
      <div className={style.errorPageMessage}>
        <h1>{message}</h1>
        <button
          className={style.goBackBtn}
          onClick={() => {
            history.goBack();
          }}
        >
          Вернутся назад
        </button>
      </div>
    </div>
  );
}
