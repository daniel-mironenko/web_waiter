import React, {
  Fragment,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Adapter } from "../../adapter";
import Api from "../../api";
import { OrderContext } from "../../contexts/order-provider";
import { useLoadStatus } from "../../hooks";
import OptionsPopupFooter from "../options-popup-footer/options-popup-footer";
import style from "./change-waiter.module.css";

export default function ChangeWaiter() {
  const { order } = useContext(OrderContext);
  const [users, setUsers] = useState([]);
  const [activeUser, setActiveUser] = useState(null);
  const { isLoaded, setIsLoaded, error, setError } = useLoadStatus();
  const admitBtnRef = useRef();
  const cancelBtnRef = useRef();

  async function fetchUsers() {
    try {
      admitBtnRef.current.disabled = true;
      cancelBtnRef.current.disabled = true;
      const response = await Api.getUsersByPosition("waiter");
      const adaptedUsers = response.map((it) => Adapter.getUser(it));
      setIsLoaded(true);
      setUsers(adaptedUsers);
      admitBtnRef.current.disabled = false;
      cancelBtnRef.current.disabled = false;
    } catch (error) {
      setError(error);
      cancelBtnRef.current.disabled = false;
      console.error(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  function getChangeWaiterSectionByloadStatus() {
    if (error) {
      return  <section className={style.changeWaiterLoadStatus}>Ошибка: {error.messege}</section>;
    } else if (!isLoaded) {
      return <section className={style.changeWaiterLoadStatus}>Loading...</section>;
    } else {
      return (
        <section className={style.changeWaiterContainer}>
          <ul className={style.changeWaiterList}>
            {users.map((user) => {
              const { id, name, surname } = user;
              return (
                <li
                  key={id}
                  className={`${style.changeWaiterItem} ${
                    activeUser === id && `${style.changeWaiterItemActive}`
                  }`}
                  onClick={() => {
                    setActiveUser(id);
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
      />
    </Fragment>
  );
}
