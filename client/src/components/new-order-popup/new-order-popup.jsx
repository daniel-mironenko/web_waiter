import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Operation as OrderOperation } from "../../redux-store/orders/orders-reducer";
import { getUserData } from "../../redux-store/user/selector";
import { shake } from "../../animations/animations";
import style from "./new-order-popup.module.css";

export default function NewOrderPopup({ setIsOpenNewOrderPopup }) {
  const { id } = useSelector(getUserData);
  const cancelBtnRef = useRef();
  const admitNewOrderBtnRef = useRef();
  const newOrderContainerRef = useRef();

  const dispatch = useDispatch();
  const [form, setForm] = useState({
    table: "",
    guests: "",
  });

  function changeForm(evt) {
    setForm({ ...form, [evt.target.name]: Number(evt.target.value) });
  }

  function onSuccessNewOrder() {
    setIsOpenNewOrderPopup(false);
  }

  function onErrorNewOrder() {
    shake(newOrderContainerRef.current, () => {
      admitNewOrderBtnRef.current.disabled = false;
      cancelBtnRef.current.disabled = false;
    });
  }

  return (
    <div className={style.NewOrderPopup}>
      <div ref={newOrderContainerRef} className={style.newTableContainer}>
        <h3>Добавьте новый стол</h3>
        <form className={style.newTableForm}>
          <label>
            Номер стола
            <input
              className={style.newTableInput}
              type="number"
              name="table"
              onChange={(evt) => {
                changeForm(evt);
              }}
            />
          </label>
          <label>
            Количество гостей
            <input
              className={style.newTableInput}
              type="number"
              name="guests"
              onChange={changeForm}
            />
          </label>
          <div className={style.buttonContainer}>
            <button
              ref={admitNewOrderBtnRef}
              className={`${style.newTableBtn} ${style.createNewTable}`}
              type="submit"
              disabled={form.table < 0 || form.guests < 1}
              onClick={(evt) => {
                evt.preventDefault();
                admitNewOrderBtnRef.current.disabled = true;
                cancelBtnRef.current.disabled = true;
                const newOrder = {
                  tableNumber: form.table,
                  guestsCount: form.guests,
                  waiterId: id,
                };
                dispatch(
                  OrderOperation.addNewActiveOrder(
                    newOrder,
                    onSuccessNewOrder,
                    onErrorNewOrder
                  )
                );
              }}
            >
              Создать заказ
            </button>
            <button
              ref={cancelBtnRef}
              className={`${style.newTableBtn} ${style.cancelNewTable}`}
              onClick={() => {
                setIsOpenNewOrderPopup(false);
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
