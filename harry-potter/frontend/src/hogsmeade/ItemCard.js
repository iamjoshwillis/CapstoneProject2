import React from "react";

const ItemCard = ({ id, name, store, price }) => {

  return (
    <div className="block max-w-sm p-1 bg-gray-900 border border-gray-200 rounded-lg shadow mx-2">
      <div className="border border-gray-300 rounded p-4">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{name}</h5>
        <p className="mb-3 font-normal text-gray-200">{store}</p>
        <p className="mb-3 font-normal text-gray-200">{price}</p>
      </div>
    </div>
);
};

export default ItemCard;