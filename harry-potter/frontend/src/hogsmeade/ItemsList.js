import React, { useState, useEffect } from "react";
import PotterApi from "../api/api";
import ItemCard from "./ItemCard";
import StoreCard from "./StoreCard";

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
        <h1 className="text-3xl font-bold text-white text-center">
          Our Stores
        </h1>
        <div className="flex justify-center flex-wrap gap-4">
          {stores &&
            Object.values(stores).map((store) => (
              <StoreCard
                key={store.id}
                id={store.id}
                name={store.name}
                description={store.description}
              />
            ))}
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white text-center">
          Online Shopping at Hogsmeade Village
        </h1>
        <div className="flex justify-center flex-wrap gap-4">
          {items &&
            Object.values(items).map((item) => (
              <ItemCard
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
