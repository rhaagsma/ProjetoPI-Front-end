import React from "react";

const CrudItem = ({ selectedCrud, item, onEdit }) => {
  return (
    <div className={`flex flex-col p-4 bg-white shadow-sm rounded-md`}>
      <h3 className={`text-lg font-bold`}>
        {selectedCrud === "products" && `Product ID: ${item.id}`}
        {selectedCrud === "bands" && `Band ID: ${item.id}`}
        {selectedCrud === "genres" && `Genre ID: ${item.id}`}
        {selectedCrud === "categories" && `Category ID: ${item.id}`}
      </h3>
      <p className={`text-base`}>
        Name: {item.name}
      </p>
      {selectedCrud === "bands" && (
        <div>
          <ul className={`mt-4`}>
            <li className={`text-sm font-semibold`}>Genres:</li>
            {item.genres.map(genre => (
              <li key={genre.id} className={`text-sm`}>{genre.name}</li>
            ))}
          </ul>
          <ul className={`mt-4`}>
            <li className={`text-sm font-semibold`}>Products:</li>
            {item.products.map(product => (
              <li key={product.id} className={`text-sm`}>{product.name}</li>
            ))}
          </ul>
        </div>
      )}
      <button
        className={`mt-4 px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md`}
        onClick={() => onEdit(item)}
      >
        Edit
      </button>
    </div>
  );
};

export default CrudItem;