import React from "react";
import style from "./danger-button.module.css";

export default function DangerButton({ text }) {
  return <button className={style.btnDanger}>{text}</button>;
}
