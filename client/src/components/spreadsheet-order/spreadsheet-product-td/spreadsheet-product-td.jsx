import React, { useRef } from "react";

export default function SpreadsheetProductTd({item, isNewOrder, openComments, setOpenComments}) {
  const commentAreaRef = useRef();

  return (
    <td>
        <div className={style.productContainer}>
          <div className={style.productTitle}> {item.name}</div>
          {item.comments.length > 0 && (
            <div className={style.commentAvailable} title={item.comments}>
              !
            </div>
          )}
          {isNewOrder && (
            <div
              className={style.addComments}
              onClick={() => {
                setOpenComments(item.name);
              }}
            ></div>
          )}
        </div>
        {openComments === item.name && (
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
  );
};
