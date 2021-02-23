import React, { useEffect } from "react";
import NumberPanel from "../../components/number-panel/number-panel";
import { documentTitle } from "../../enums";
import style from "./login-page.module.css";

export default function LoginPage() {

  useEffect(() => {
    document.title = documentTitle.LOGIN;
  }, [])

  return (
    <section className={style.loginContainer}>
      <NumberPanel />
      <div className={style.testUsersContainer}>
        <ul className={style.testUsersList}>
          <li>The 1st test user: PIN 1111</li>
          <li>The 2nd test user: PIN 5555</li>
          <li>The 3rd test user: PIN 7777</li>
        </ul>
      </div>
    </section>
  );
}