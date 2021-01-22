import { useEffect } from "react";
import { useDispatch } from "react-redux";
import MenuProvider from "../../contexts/menu-provider";
import { useLoadStatus } from "../../hooks";
import { Operation as menuOperation } from "../../redux-store/menu/menu-reducer";
import LoaderMenu from "../loader-menu/loader-menu";
import MenuNotAvailable from "../menu-not-available/menu-not-available";
import OrderMenuContainer from "../order-menu-container/order-menu-container";
import OrderMenuHeader from "../order-menu-header/order-menu-header";
import OrderMenuNav from "../order-menu-nav/order-menu-nav";

export default function OrderMenu() {
  const { isLoaded, setIsLoaded, error, setError } = useLoadStatus();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(menuOperation.loadMenu(setIsLoaded, setError));
  }, []);

  function getChildrenByLoadStatus() {
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <LoaderMenu />;
    } else {
      return (
        <MenuProvider>
          <OrderMenuHeader />
          <OrderMenuNav />
          <MenuNotAvailable />
        </MenuProvider>
      );
    }
  }

  return <OrderMenuContainer>{getChildrenByLoadStatus()}</OrderMenuContainer>;
}
