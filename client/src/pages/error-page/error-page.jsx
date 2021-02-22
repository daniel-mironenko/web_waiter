import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import style from "./error-page.module.css";

export default function ErrorPage({ message, isGoBack = true }) {
  const history = useHistory();

  useEffect(() => {
    document.title = `WebWaiter | Error`
  }, [])

  return (
    <div className={style.errorPageContainer}>
      <div className={style.errorPageMessage}>
        <h1>{message}</h1>
        {isGoBack && (
          <button
            className={style.goBackBtn}
            onClick={() => {
              history.goBack();
            }}
          >
            Вернутся назад
          </button>
        )}
      </div>
    </div>
  );
}
