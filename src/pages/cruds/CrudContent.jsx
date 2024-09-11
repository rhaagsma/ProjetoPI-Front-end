import React, { useState } from "react";
import CrudItem from "./CrudItem";
import CreateProduct from "./CreateProduct";
import CreateGenre from "./CreateGenre";
import CreateCategory from "./CreateCategory";
import CreateBand from "./CreateBand";
import CreateShowCase from "./CreateShowCase";
import { Button } from "src/components/ui/button";

const translateCrud = (text) => {
  switch (text) {
    case "products":
      return "Produtos";
    case "genres":
      return "Gêneros";
    case "categories":
      return "Categorias";
    case "bands":
      return "Bandas";
    case "showcases":
      return "Showcases";
    default:
      return text;
  }
}

const CrudContent = ({ selectedCrud, initialData, refetch, setOpened }) => {
  console.log(selectedCrud, initialData)
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
          Gerenciamento de {translateCrud(selectedCrud)}
        </h2>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        
        {initialData.length ? (
          initialData.map(item => (
            <CrudItem key={item.id} selectedCrud={selectedCrud} item={item} setOpened={setOpened}/>
          ))
        ) : (
          <p className="text-gray-600">Nenhum {translateCrud(selectedCrud).toLowerCase().substring(0, translateCrud(selectedCrud).length - 1)} encontrado</p>
        )}
      </div>

      <div className="flex justify-center">
        <Button
          onClick={handleShowCreateItem}
        >
          Adicionar {translateCrud(selectedCrud)}
        </Button>
      </div>

      {showCreateItem && (
        <div className="mt-4">
          {selectedCrud === "products" ? (
            <CreateProduct  handleHide={handleHideCreateItem} refecth={refetch}/>
          ) : selectedCrud === "genres" ? (
            <CreateGenre  handleHide={handleHideCreateItem} refecth={refetch}/>
          ) : selectedCrud === "categories" ? (
            <CreateCategory  handleHide={handleHideCreateItem} refecth={refetch}/>
          ) : selectedCrud === "bands" ? (
            <CreateBand  handleHide={handleHideCreateItem} refecth={refetch}/>
          ) :  selectedCrud === "showcases" ? (
            <CreateShowCase  handleHide={handleHideCreateItem} refecth={refetch}/>
          ) : null}

        </div>
      )}
    </div>
  );
};

export default CrudContent;