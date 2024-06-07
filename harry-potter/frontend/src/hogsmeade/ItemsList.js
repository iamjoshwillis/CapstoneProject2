import React, { useState, useEffect } from "react";
import PotterApi from "../api/api";
import ItemDetail from "./ItemDetail";
import StoreDetail from "./StoreDetail";

//Show List of Items -> Routed at /hogsmeade
const ItemsList = () => {
  const [items, setItems] = useState(null);
  const [stores, setStores] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const fetchedItems = await PotterApi.getItems();
      const fetchedStores = await PotterApi.getStores();
      setItems(fetchedItems);
      setStores(fetchedStores);
    }
    fetchData();
  }, []);

  const getStoreName = (storeId) => {
    if (stores) {
      const store = stores.find((store) => store.id === storeId);
      return store ? store.name : "Unknown Store";
    }
    return "Loading..."; // Or you can return null or handle loading state accordingly
  };

  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl p-6 font-bold text-slate-100 text-center">
          Our Stores
        </h1>
        <div className="flex justify-center flex-wrap gap-4">
          {stores &&
            Object.values(stores).map((store) => (
              <StoreDetail
                key={store.id}
                id={store.id}
                name={store.name}
                description={store.description}
              />
            ))}
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-3xl p-6 font-bold text-slate-100 text-center">
          Browse Items at Hogsmeade Village
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items &&
            Object.values(items).map((item) => (
              <ItemDetail
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                store={getStoreName(item.store)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ItemsList;
