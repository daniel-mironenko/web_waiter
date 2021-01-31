import React, {
  Fragment,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import { Adapter } from "../../adapter";
import Api from "../../api";
import { OrderContext } from "../../contexts/order-provider";
import { useLoadStatus } from "../../hooks";
import { Operation } from "../../redux-store/orders/orders-reducer";
import OptionsPopupFooter from "../options-popup-footer/options-popup-footer";
import { useHistory } from "react-router-dom";
import style from "./change-waiter.module.css";
import { appRoute } from "../../enums";

export default function ChangeWaiter({ errorHandler }) {
  const { order } = useContext(OrderContext);
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const [activeUser, setActiveUser] = useState(null);
  const { isLoaded, setIsLoaded, error, setError } = useLoadStatus();
  const admitBtnRef = useRef();
  const cancelBtnRef = useRef();
  const { id, waiterId: currentWaiterId } = order;
  const history = useHistory();

  async function fetchUsers() {
    try {
      const response = await Api.getUsersByPosition("waiter");
      const adaptedUsers = response.map((it) => Adapter.getUser(it));
      setIsLoaded(true);
      setUsers(adaptedUsers);
    } catch (error) {
      setError(error);
      console.error(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  function getUpdate() {
    return {
      id,
      waiterId: activeUser,
    };
  }

  function admitHandler() {
    cancelBtnRef.current.disabled = true;
    admitBtnRef.current.disabled = true;
    dispatch(Operation.updateAtiveOrder(getUpdate(), onSuccess, onError));
  }

  function onError() {
    errorHandler();
    admitBtnRef.current.disabled = false;
    cancelBtnRef.current.disabled = false;
  }

  function onSuccess() {
    history.push(appRoute.PRIVAT_OFFICE);
  }

  function getChangeWaiterSectionByloadStatus() {
    if (error) {
      return (
        <section className={style.changeWaiterLoadStatus}>
          Ошибка: {error.messege}
        </section>
      );
    } else if (!isLoaded) {
      return (
        <section className={style.changeWaiterLoadStatus}>Loading...</section>
      );
    } else {
      return (
        <section className={style.changeWaiterContainer}>
          <ul className={style.changeWaiterList}>
            {users
              .filter((it) => it.id !== currentWaiterId)
              .map((user) => {
                const { id: userId, name, surname } = user;
                return (
                  <li
                    key={userId}
                    className={`${style.changeWaiterItem} ${
                      activeUser === userId && `${style.changeWaiterItemActive}`
                    }`}
                    onClick={() => {
                      setActiveUser(userId);
                    }}
                  >{`${name} ${surname}`}</li>
                );
              })}
          </ul>
        </section>
      );
    }
  }

  return (
    <Fragment>
      {getChangeWaiterSectionByloadStatus()}
      <OptionsPopupFooter
        admitBtnRef={admitBtnRef}
        cancelBtnRef={cancelBtnRef}
        admitHandler={admitHandler}
        admitBtnDisabled={Boolean(!activeUser)}
      />
    </Fragment>
  );
}
