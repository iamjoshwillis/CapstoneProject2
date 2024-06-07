import React from "react";

const ItemDetail = ({ name, store, price }) => {

  return (
    <div className="flex font-sans p-1 rounded-lg">
      <div className="shadow-lg bg-gray-800 rounded-lg flex-auto p-6">
        <h5 className="text-2xl font-semibold text-slate-200">{name}</h5>
        <p className="mb-3 font-normal w-full flex-none text-md text-slate-100 mt-2">{store}</p>
        <p className="text-lg font-semibold text-slate-500">${price}</p>
      </div>
    </div>
);
};

export default ItemDetail;