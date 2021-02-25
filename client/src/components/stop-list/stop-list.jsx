import React, { Fragment, useEffect, useState } from "react";
import { Adapter } from "../../adapter";
import Api from "../../api";
import { useLoadStatus } from "../../hooks";
import FilterByCategory from "../filter-by-category/filter-by-category";
import LoaderMenu from "../loader-menu/loader-menu";
import OfficeBoardHeader from "../office-board-header/office-board-header";
import StopListSpreadsheet from "../stop-list-spreadsheet/stop-list-spreadsheet";

export default function StopList() {
  const { isLoaded, setIsLoaded, error, setError } = useLoadStatus();
  const [products, setProducts] = useState([]);
  const [catalogs, setCatalogs] = useState([]);
  const [activeFilter, setActiveFilter] = useState(`All categories`);

  async function fetchProducts() {
    try {
      const payload = await Api.getNotAvailableProducts();
      setProducts(Adapter.getProducts(payload));
      setCatalogs([...new Set(payload.map((it) => it.catalog))]);
      setIsLoaded(true);
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  function getProductsByActiveFilter() {
    if (activeFilter === `All categories`) {
      return products;
    }
    return products.filter((it) => it.catalog === activeFilter);
  }

  function getMarkupByLoadStatus() {
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <LoaderMenu />;
    } else {
      return (
        <>
          {Boolean(products.length) && (
            <FilterByCategory
              catalogs={catalogs}
              setActiveFilter={setActiveFilter}
            />
          )}
          <StopListSpreadsheet
            products={products}
            productsByFilter={getProductsByActiveFilter()}
          />
        </>
      );
    }
  }

  return (
    <Fragment>
      <OfficeBoardHeader>Stop list</OfficeBoardHeader>
      {getMarkupByLoadStatus()}
    </Fragment>
  );
}
