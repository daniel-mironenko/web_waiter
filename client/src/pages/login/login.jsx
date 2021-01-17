import React from "react";
import NumberPanel from "../../components/number-panel/number-panel";
import style from "./login.module.css";

export default function Login() {
  return (
    <section className={style.loginContainer}>
      <NumberPanel />
    </section>
  );
}