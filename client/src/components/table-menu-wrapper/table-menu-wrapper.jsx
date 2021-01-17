import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLoadStatus } from "../../hooks";
import { Operation as menuOperation } from "../../redux-store/menu/menu-reducer";
import LoaderMenu from "../loader-menu/loader-menu";
import TableMenuContainer from "../table-menu-container/table-menu-container";
import TableMenu from "../table-menu/table-menu";

export default function TableMenuWrapper() {
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
      return <TableMenu />;
    }
  }

  return <TableMenuContainer>{getChildrenByLoadStatus()}</TableMenuContainer>;
}
