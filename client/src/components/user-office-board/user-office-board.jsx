import React from "react";
import { privatOficeNavigation } from "../../enums";
import MyOrders from "../my-orders/my-orders";
import StopList from "../stop-list/stop-list";
import style from "./user-office-board.module.css"

export default function UserOfficeBoard ({activeSection}) {

  function renderSection() {
    switch (activeSection) {
      case privatOficeNavigation.MY_ORDERS:
       return <MyOrders/>;
      
      case privatOficeNavigation.STOP_LIST:
        return <StopList />;
      
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