import React  from "react";
import { privatOficeNavigation } from "../../enums";
import ClosedTables from "../closed-tables/closed-tables";
import MyTables from "../my-tables/my-tables";
import StopList from "../stop-list/stop-list";
import style from "./user-office-board.module.css"

export default function UserOfficeBoard ({activeSection}) {

  function renderSection() {
    switch (activeSection) {
      case privatOficeNavigation.MY_TABLES:
       return <MyTables />
      
      case privatOficeNavigation.STOP_LIST:
        return <StopList />
      
      case privatOficeNavigation.CLOSED_TABLES:
        return <ClosedTables />
    
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