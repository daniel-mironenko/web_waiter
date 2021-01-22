import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActiveOrders } from "../../redux-store/orders/selector";
import { ActionCreator as tableActionCreator } from "../../redux-store/orders/orders-reducer";
import style from "./new-table-popup.module.css";

export default function NewTablePopup({ setIsOpenNewTablePopup }) {
  const [isShowAlertTable, setIsShowAlertTable] = useState(false);
  const dispatch = useDispatch();
  const tables = useSelector(getActiveOrders);
  const [form, setForm] = useState({
    table: "",
    guests: "",
  });

  function checkExistNumberOfTable() {
    return tables.find((it) => it.numberOfTable === form.table);
  }

  function changeForm(evt) {
    setForm({ ...form, [evt.target.name]: Number(evt.target.value) });
  }

  return (
    <div className={style.newTablePopup}>
      <div className={style.newTableContainer}>
        <h3>Добавьте новый стол</h3>
        <form className={style.newTableForm}>
          <label>
            Номер стола
            <input
              className={style.newTableInput}
              type="number"
              name="table"
              onChange={(evt) => {
                setIsShowAlertTable(false);
                changeForm(evt);
              }}
            />
          </label>
          {isShowAlertTable && (
            <p className={style.newTableAlert}>Такой стол уже существует</p>
          )}
          <label>
            Количество гостей
            <input
              className={style.newTableInput}
              type="number"
              name="guests"
              onChange={changeForm}
            />
          </label>
          <div className={style.bottonContainer}>
            <button
              className={`${style.newTableBtn} ${style.createNewTable}`}
              type="submit"
              disabled={form.table < 0 || form.guests < 1}
              onClick={(evt) => {
                evt.preventDefault();

                if (checkExistNumberOfTable()) {
                  setIsShowAlertTable(true);
                  return;
                }

                const newTable = {
                  id: new Date(),
                  numberOfTable: form.table,
                  numberOfGuests: form.guests,
                  startTime: new Date(),
                  endTime: null,
                  order: [],
                };

                dispatch(tableActionCreator.addNewOpenTable(newTable));
                setIsOpenNewTablePopup(false);
              }}
            >
              Создать стол
            </button>
            <button
              className={`${style.newTableBtn} ${style.cancelNewTable}`}
              onClick={(evt) => {
                evt.preventDefault();
                setIsOpenNewTablePopup(false);
              }}
            >
              Отмена
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
