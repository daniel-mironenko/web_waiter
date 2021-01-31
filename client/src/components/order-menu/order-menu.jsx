import { useEffect, useState } from "react";
import { Adapter } from "../../adapter";
import Api from "../../api";
import MenuProvider from "../../contexts/menu-provider";
import { useLoadStatus } from "../../hooks";
import LoaderMenu from "../loader-menu/loader-menu";
import MenuNotAvailable from "../menu-not-available/menu-not-available";
import OrderMenuContainer from "../order-menu-container/order-menu-container";
import OrderMenuHeader from "../order-menu-header/order-menu-header";
import OrderMenuNav from "../order-menu-nav/order-menu-nav";

export default function OrderMenu() {
  const { isLoaded, setIsLoaded, error, setError } = useLoadStatus();
  const [products, setProducts] = useState([]);
  const [catalogs, setCatalogs] = useState([]);

  async function fetchMenu() {
    try {
      const menu = await Api.fetchMenu();
      const adaptedCatalogs = Adapter.getCatalogs(menu.catalogs);
      const adaptedProducts = Adapter.getProducts(menu.products);
      setCatalogs(adaptedCatalogs);
      setProducts(adaptedProducts);
      setIsLoaded(true);
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    fetchMenu();
  }, []);

  function getChildrenByLoadStatus() {
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <LoaderMenu />;
    } else {
      return (
        <MenuProvider products={products} catalogs={catalogs}>
          <OrderMenuHeader />
          <OrderMenuNav />
          <MenuNotAvailable />
        </MenuProvider>
      );
    }
  }

  return <OrderMenuContainer>{getChildrenByLoadStatus()}</OrderMenuContainer>;
}
