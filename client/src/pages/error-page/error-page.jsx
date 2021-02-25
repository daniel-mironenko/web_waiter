import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { documentTitle } from "../../enums";
import style from "./error-page.module.css";

export default function ErrorPage({ message, isGoBack = true }) {
  const history = useHistory();

  useEffect(() => {
    document.title = documentTitle.ERROR;
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
            Go Back
          </button>
        )}
      </div>
    </div>
  );
}
