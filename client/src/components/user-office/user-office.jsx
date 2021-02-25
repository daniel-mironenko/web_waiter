import React from "react";
import { privatOficeNavigation } from "../../enums";
import { useDispatch } from "react-redux";
import style from "./user-office.module.css";
import { Operation as userOperation } from "../../redux-store/user/user-reducer";

export default function UserOffice({
  userData,
  setActiveSection,
  activeSection,
}) {
  const { name, surname, photo } = userData;
  const fullName = `${name} ${surname}`;
  const dispatch = useDispatch();

  return (
    <section className={style.userOffice}>
      <header className={style.userInfo}>
        <div className={`${style.userInfoAvatar} ${style.noPhoto}`}>
          {photo && <img src={photo} alt="avatar" width={62} height={62} />}
        </div>
        <div>
          <span className={style.userInfoName}>{fullName}</span>
          <div className={style.userInfoTitle}>Private office</div>
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
                  if (it === privatOficeNavigation.EXIT) {
                    dispatch(userOperation.logout());
                  }
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
