import React, { useState, useEffect } from "react";
import CrudItem from "./CrudItem";
import CreateProduct from "./CreateProduct";
import CreateGenre from "./CreateGenre";
import CreateCategory from "./CreateCategory";
import CreateBand from "./CreateBand";
import { Button } from "src/components/ui/button";

const CrudContent = ({ selectedCrud, initialData, onEdit }) => {

  const [showCreateItem, setShowCreateItem] = useState(false);

  const handleShowCreateItem = () => {
    setShowCreateItem(true);
  };

  const handleHideCreateItem = () => {
    setShowCreateItem(false);
  };

  return (
    <div className="p-4 grid grid-cols-1 gap-4">
      <div className="flex justify-center">
        <h2 className="text-xl font-bold mb-4">
          {selectedCrud.charAt(0).toUpperCase() + selectedCrud.slice(1)} Management
        </h2>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        
        {initialData.length ? (
          initialData.map(item => (
            <CrudItem key={item.id} selectedCrud={selectedCrud} item={item} />
          ))
        ) : (
          <p className="text-gray-600">Nenhum {selectedCrud} encontrado</p>
        )}
      </div>

      <div className="flex justify-center">
        <Button
          onClick={handleShowCreateItem}
        >
          Add New {selectedCrud}
        </Button>
      </div>

      {showCreateItem && (
        <div className="mt-4">
          {selectedCrud === "products" ? (
            <CreateProduct  handleHide={handleHideCreateItem} />
          ) : selectedCrud === "genres" ? (
            <CreateGenre  handleHide={handleHideCreateItem} />
          ) : selectedCrud === "categories" ? (
            <CreateCategory  handleHide={handleHideCreateItem} />
          ) : selectedCrud === "bands" ? (
            <CreateBand  handleHide={handleHideCreateItem} />
          ) : null}

        </div>
      )}
    </div>
  );
};

export default CrudContent;