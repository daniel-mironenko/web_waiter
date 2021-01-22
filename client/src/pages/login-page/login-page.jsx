import React from "react";
import NumberPanel from "../../components/number-panel/number-panel";
import style from "./login-page.module.css";

export default function LoginPage() {
  return (
    <section className={style.loginContainer}>
      <NumberPanel />
    </section>
  );
}