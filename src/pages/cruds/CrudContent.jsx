import React, { useState } from "react";
import CrudItem from "./CrudItem";
import CreateProduct from "./CreateProduct";

const CrudContent = ({ selectedCrud, initialData, onEdit }) => {
  const [data, setData] = useState(initialData || []);
  const [showCreateProduct, setShowCreateProduct] = useState(false);

  const handleAddItem = (newItem) => {
    setData([...data, newItem]);
  };

  const handleShowCreateProduct = () => {
    setShowCreateProduct(true);
  };

  const handleHideCreateProduct = () => {
    setShowCreateProduct(false);
  };

  return (
    <div>
      <h2>{selectedCrud.charAt(0).toUpperCase() + selectedCrud.slice(1)} Management</h2>
      {data.length ? (
        data.map(item => <CrudItem key={item.id} selectedCrud={selectedCrud} item={item} onEdit={onEdit} />)
      ) : (
        <p>Nenhum {selectedCrud} encontrado</p>
      )}

      <button type="button" onClick={handleShowCreateProduct}>Add New {selectedCrud}</button>

      {showCreateProduct && (
        <CreateProduct
          selectedCrud={selectedCrud}
          onAdd={handleAddItem}
          onHide={handleHideCreateProduct}
        />
      )}
    </div>
  );
};

export default CrudContent;