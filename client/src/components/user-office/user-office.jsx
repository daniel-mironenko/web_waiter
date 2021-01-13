import React from "react";
import { privatOficeNavigation } from "../../enums";
import style from "./user-office.module.css";

export default function UserOffice({
  userData,
  setActiveSection,
  activeSection,
}) {
  const { name, surname, avatar, status } = userData;
  const fullName = `${name} ${surname}`;

  return (
    <section className={style.userOffice}>
      <header className={style.userInfo}>
        <div className={style.userInfoAvatar}>
          <img src={avatar} alt="avatar" width={62} height={62} />
        </div>
        <div>
          <span className={style.userInfoName}>{fullName}</span>
          <div className={style.userInfoTitle}>Личный кабинет</div>
        </div>
      </header>
      <nav className={style.userOfficeNavigation}>
        <ul className={style.userOfficeNavigationList}>
          {Object.values(privatOficeNavigation).map((it) => {
            return (
              <li
                key={it}
                className={`${style.userOfficeNavigationItem} ${
                  activeSection === it
                    ? `${style.userOfficeNavigationItemActive}`
                    : ``
                }`}
                onClick={() => {
                  setActiveSection(it);
                }}
              >
                {it}
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
}
