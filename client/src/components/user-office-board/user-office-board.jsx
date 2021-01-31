import React from "react";
import { privatOficeNavigation } from "../../enums";
import MyOrders from "../my-orders/my-orders";
import style from "./user-office-board.module.css"

export default function UserOfficeBoard ({activeSection}) {

  function renderSection() {
    console.log(activeSection, privatOficeNavigation.CLOSED_ORDERS)
    switch (activeSection) {
      case privatOficeNavigation.MY_ORDERS:
       return <MyOrders/>;
      
      case privatOficeNavigation.STOP_LIST:
        return <div className={style.warningContainer}><h1>Данный раздел находится в разроботке</h1></div>;
      
      case privatOficeNavigation.CLOSED_ORDERS:
        return <div className={style.warningContainer}><h1>Данный раздел находится в разроботке</h1></div>;
    
      default:
        return null;
    }
  }

  return (
    <main className={style.board}>
      {renderSection()}
    </main>
  );
};