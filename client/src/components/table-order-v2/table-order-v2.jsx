import React from "react";
import style from "./table-order-v2.module.css";

export default function TableOrderV2() {
  return (
    <section className={style.tableOrderContainer}>
      <div className={style.spreadsheetContainer}>
        <table className={style.spreadsheet}>
          <tbody>
            <tr>
              <th>Название</th>
              <th>Кол-во</th>
              <th>Цена</th>
              <th>Итого</th>
            </tr>
            <tr>
              <td>Pepsi</td>
              <td className={style.countTableDate}>
                <button
                  className={`${style.countBtn} ${style.minusBtn}`}
                ></button>
                <span className={style.quantity}>1000</span>
                <button
                  className={`${style.countBtn} ${style.plusBtn}`}
                ></button>
              </td>
              <td>11.00</td>
              <td>11.00</td>
            </tr>
            <tr>
              <td>Cola</td>
              <td className={style.countTableDate}>
                <button
                  className={`${style.countBtn} ${style.minusBtn}`}
                ></button>
                <span className={style.quantity}>2</span>
                <button
                  className={`${style.countBtn} ${style.plusBtn}`}
                ></button>
              </td>
              <td>12.25</td>
              <td>24.50</td>
            </tr>
            <tr>
              <td>Pepsi</td>
              <td className={style.countTableDate}>
                <button
                  className={`${style.countBtn} ${style.minusBtn}`}
                ></button>
                <span className={style.quantity}>1000</span>
                <button
                  className={`${style.countBtn} ${style.plusBtn}`}
                ></button>
              </td>
              <td>11.00</td>
              <td>11.00</td>
            </tr>
            <tr>
              <td>Cola</td>
              <td className={style.countTableDate}>
                <button
                  className={`${style.countBtn} ${style.minusBtn}`}
                ></button>
                <span className={style.quantity}>2</span>
                <button
                  className={`${style.countBtn} ${style.plusBtn}`}
                ></button>
              </td>
              <td>12.25</td>
              <td>24.50</td>
            </tr>
            <tr>
              <td>Pepsi</td>
              <td className={style.countTableDate}>
                <button
                  className={`${style.countBtn} ${style.minusBtn}`}
                ></button>
                <span className={style.quantity}>1000</span>
                <button
                  className={`${style.countBtn} ${style.plusBtn}`}
                ></button>
              </td>
              <td>11.00</td>
              <td>11.00</td>
            </tr>
            <tr>
              <td>Cola</td>
              <td className={style.countTableDate}>
                <button
                  className={`${style.countBtn} ${style.minusBtn}`}
                ></button>
                <span className={style.quantity}>2</span>
                <button
                  className={`${style.countBtn} ${style.plusBtn}`}
                ></button>
              </td>
              <td>12.25</td>
              <td>24.50</td>
            </tr>
            <tr>
              <td>Pepsi</td>
              <td className={style.countTableDate}>
                <button
                  className={`${style.countBtn} ${style.minusBtn}`}
                ></button>
                <span className={style.quantity}>1000</span>
                <button
                  className={`${style.countBtn} ${style.plusBtn}`}
                ></button>
              </td>
              <td>11.00</td>
              <td>11.00</td>
            </tr>
            <tr>
              <td>Cola</td>
              <td className={style.countTableDate}>
                <button
                  className={`${style.countBtn} ${style.minusBtn}`}
                ></button>
                <span className={style.quantity}>2</span>
                <button
                  className={`${style.countBtn} ${style.plusBtn}`}
                ></button>
              </td>
              <td>12.25</td>
              <td>24.50</td>
            </tr>
            <tr>
              <td>Pepsi</td>
              <td className={style.countTableDate}>
                <button
                  className={`${style.countBtn} ${style.minusBtn}`}
                ></button>
                <span className={style.quantity}>1000</span>
                <button
                  className={`${style.countBtn} ${style.plusBtn}`}
                ></button>
              </td>
              <td>11.00</td>
              <td>11.00</td>
            </tr>
            <tr>
              <td>Cola</td>
              <td className={style.countTableDate}>
                <button
                  className={`${style.countBtn} ${style.minusBtn}`}
                ></button>
                <span className={style.quantity}>2</span>
                <button
                  className={`${style.countBtn} ${style.plusBtn}`}
                ></button>
              </td>
              <td>12.25</td>
              <td>24.50</td>
            </tr>
            <tr>
              <td>Pepsi</td>
              <td className={style.countTableDate}>
                <button
                  className={`${style.countBtn} ${style.minusBtn}`}
                ></button>
                <span className={style.quantity}>1000</span>
                <button
                  className={`${style.countBtn} ${style.plusBtn}`}
                ></button>
              </td>
              <td>11.00</td>
              <td>11.00</td>
            </tr>
            <tr>
              <td>Cola</td>
              <td className={style.countTableDate}>
                <button
                  className={`${style.countBtn} ${style.minusBtn}`}
                ></button>
                <span className={style.quantity}>2</span>
                <button
                  className={`${style.countBtn} ${style.plusBtn}`}
                ></button>
              </td>
              <td>12.25</td>
              <td>24.50</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={style.operationContainer}>
        <div className={style.sendOrderContainer}>
          <button className={`${style.operationBtn} ${style.sendOrderBtn}`}>
            Отправить заказ
          </button>
          <button
            className={`${style.operationBtn} ${style.sendOrderModificationBtn}`}
          ></button>
        </div>
        <div className={style.totalPriceContainer}>
          <b>Всего</b>
          <strong>$1250.35</strong>
        </div>
        <footer className={style.footerOperationContainer}>
          <button
            className={`${style.footerOperationBtn} ${style.additionalOptionsBtn}`}
          ></button>
          <button
            className={`${style.footerOperationBtn} ${style.printBtn}`}
          ></button>
          <button
            className={`${style.footerOperationBtn} ${style.closeTableBtn}`}
          >
            Закрыть стол
          </button>
        </footer>
      </div>
    </section>
  );
}
