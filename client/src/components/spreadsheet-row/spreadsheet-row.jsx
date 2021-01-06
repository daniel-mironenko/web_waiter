import React, { Fragment, useRef } from "react";
import { menuNavigationMode } from "../../enums";
import style from "./spreadsheet-row.module.css";

export default function SpreadsheetRow({
  item,
  index,
  isNewOrder,
  setNewOrder,
  openComments,
  setOpenComments,
  setActiveMode,
  activeMode,
}) {
  const commentAreaRef = useRef();

  function removeProduct(product) {
    setNewOrder((prev) => prev.filter((it) => it.orderId !== product.orderId));
  }

  function changeCounter(product, bool) {
    setNewOrder((prev) => {
      const index = prev.findIndex((it) => it.orderId === product.orderId);
      const currentProduct = prev[index];
      bool ? currentProduct.count++ : currentProduct.count--;
      currentProduct.totalPrice = currentProduct.count * currentProduct.price;
      return [...prev];
    });
  }

  function changeComments(product, comment) {
    setNewOrder((prev) => {
      const index = prev.findIndex((it) => it.orderId === product.orderId);
      prev[index].comments = comment;
      return [...prev];
    });
  }

  return (
    <tr key={item.name} className={style.tableOrdered}>
      <td> {index + 1}</td>
      <td>
        <div className={style.productContainer}>
          <div className={style.productTitle}> {item.name}</div>
          <div className={style.iconContainer}>
            {item.comments && (
              <div className={style.commentAvailable} title={item.comments} />
            )}
            {!isNewOrder && (
              <div
                className={style.orderTime}
                title={`${item.timeOrder.getHours()}:${item.timeOrder.getMinutes()}`}
              />
            )}
            {isNewOrder && (
              <Fragment>
                <div
                  className={style.addAdditive}
                  onClick={() => {
                    setActiveMode(() => ({
                      mode: menuNavigationMode.ADDITIVE,
                      activeProduct: item,
                      currentCatalog: "menu",
                    }));
                  }}
                />
                <div
                  className={style.addComments}
                  onClick={() => {
                    setOpenComments(item.orderId);
                  }}
                ></div>
              </Fragment>
            )}
          </div>
        </div>
        {openComments === item.orderId && (
          <div className={style.commentContainer}>
            <textarea
              ref={commentAreaRef}
              className={style.commentArea}
              name=""
              id=""
              rows="3"
              placeholder={`Комментарий`}
              defaultValue={item.comments}
            ></textarea>
            <div>
              <button
                onClick={() => {
                  changeComments(item, commentAreaRef.current.value);
                  setOpenComments(null);
                }}
                className={style.closeCommentArea}
              >
                Записать
              </button>
              <button
                onClick={() => {
                  setOpenComments(null);
                }}
                className={style.closeCommentArea}
              >
                Отмена
              </button>
            </div>
          </div>
        )}
      </td>
      <td>
        {isNewOrder && (
          <button
            onClick={() => {
              changeCounter(item, false);
            }}
            className={style.tableOrderChangeCount}
            disabled={item.count <= 1}
          >
            -
          </button>
        )}
        {item.count}
        {isNewOrder && (
          <button
            onClick={() => {
              changeCounter(item, true);
            }}
            className={style.tableOrderChangeCount}
          >
            +
          </button>
        )}
      </td>
      <td>
        <div>
          {item.totalPrice} руб
          {isNewOrder && (
            <span
              onClick={() => {
                removeProduct(item);
              }}
              className={style.tableOrderDeleteIcon}
            ></span>
          )}
        </div>
      </td>
    </tr>
  );
}
