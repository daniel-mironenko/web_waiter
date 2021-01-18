import { useEffect } from "react";
import { useDispatch } from "react-redux";
import MenuProvider from "../../contexts/menu-provider";
import { useLoadStatus } from "../../hooks";
import { Operation as menuOperation } from "../../redux-store/menu/menu-reducer";
import LoaderMenu from "../loader-menu/loader-menu";
import MenuNotAvailable from "../menu-not-available/menu-not-available";
import TableMenuContainer from "../table-menu-container/table-menu-container";
import TableMenuHeader from "../table-menu-header/table-menu-header";
import TableMenuNav from "../table-menu-nav/table-menu-nav";

export default function TableMenu() {
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
          <TableMenuHeader />
          <TableMenuNav />
          <MenuNotAvailable />
        </MenuProvider>
      );
    }
  }

  return <TableMenuContainer>{getChildrenByLoadStatus()}</TableMenuContainer>;
}
