import React, { useState } from "react";
import CrudItem from "./CrudItem";
import CreateProduct from "./CreateProduct";
import CreateGenre from "./CreateGenre";
import CreateCategory from "./CreateCategory";
import CreateBand from "./CreateBand";

const CrudContent = ({ selectedCrud, initialData, onEdit }) => {
  const [newData, setNewData] = useState('')
  const [showCreateItem, setShowCreateItem] = useState(false);
  console.log(initialData)
  const handleAddItem = (newItem) => {
    setNewData([...newData, newItem]);
  };

  const handleShowCreateItem = () => {
    setShowCreateItem(true);
  };

  const handleHideCreateItem = () => {
    setShowCreateItem(false);
  };

  return (
    <div>
      <h2>{selectedCrud.charAt(0).toUpperCase() + selectedCrud.slice(1)} Management</h2>
      {initialData.length ? (
        initialData.map(item => <CrudItem selectedCrud={selectedCrud} item={item} onEdit={onEdit} />)
      ) : (
        <p>Nenhum {selectedCrud} encontrado</p>
      )}

      <button type="button" onClick={handleShowCreateItem}>Add New {selectedCrud}</button>

      {showCreateItem && (
        
        <div className="">
          {
            selectedCrud === "products"? <CreateProduct onAddItem={handleAddItem} handleHide={handleHideCreateItem} />:
            selectedCrud === "genres" ? <CreateGenre onAddItem={handleAddItem} handleHide={handleHideCreateItem} />:
            selectedCrud === "categories" ? <CreateCategory onAddItem={handleAddItem} handleHide={handleHideCreateItem} />: 
            selectedCrud === "bands" ? <CreateBand onAddItem={handleAddItem} handleHide={handleHideCreateItem} />: null
          }
        </div>
      )}
    </div>
  );
};

export default CrudContent;