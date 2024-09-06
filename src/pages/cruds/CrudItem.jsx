import React, {useState, useEffect} from "react"
import { Button } from "src/components/ui/button"
import { getCategory, getBand, getGenre, getProduct,
         deleteProduct, deleteBand, deleteCategory, deleteGenre
        } from "src/services/http-commons"
import CreateProduct from "./CreateProduct";
import CreateBand from "./CreateBand";
import CreateGenre from "./CreateGenre";
import CreateCategory from "./CreateCategory";
import CreateShowCase from "./CreateShowCase";

import ProductCard from "./CrudsCards/ProductCard";
import BandCard from "./CrudsCards/BandCard.jsx";
import CategoryCard from "./CrudsCards/CategoryCard";
import GenreCard from "./CrudsCards/GenreCard";

import Modal from "./modal";

const CrudItem = ({selectedCrud, item}) => {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = async (e) => {
    const confirmation = window.confirm('Are you sure you want to delete this item?');
  
    if (confirmation) {
      try {
        switch (selectedCrud) {
          case 'products':
            await deleteProduct(item.id);
            break;
          case 'bands':
            await deleteBand(item.id);
            break;
          case 'categories':
            await deleteCategory(item.id);
            break;
          case 'genres':
            await deleteGenre(item.id);
            break;
          case 'showcase':
            await deleteGenre(item.id);
            break;
          default:
            break;
        }
      } catch (error) {
        console.error(error);
        alert('Failed to delete item');
      }
    }
  }


  return (
    <div className="flex flex-col p-4 bg-white shadow-sm rounded-md">
      {showModal && (
        <Modal>
          {selectedCrud === "products" ? (
            <CreateProduct data={item} />
          ) : selectedCrud === "bands" ? (
            <CreateBand data={item} />
          ) : selectedCrud === "categories" ? (
            <CreateCategory data={item} />
          ) : selectedCrud === "genres" ? (
            <CreateGenre data={item} />
          ) : selectedCrud === "showcase" ? (
            <CreateGenre data={item} />
          ) : null}

        </Modal>
      )}
      {selectedCrud && (
        <>
          {selectedCrud === "products" ? (
            <ProductCard data={item} />
          ) : selectedCrud === "bands" ? (
            <BandCard data={item} />
          ) : selectedCrud === "categories" ? (
            <CategoryCard data={item} />
          ) : selectedCrud === "genres" ? (
            <GenreCard data={item} />
          ) : selectedCrud === "showcase" ? (
            <GenreCard data={item} />
          ) : (
            <ProductCard data={item} />
          )}
        </>
      )}
      <div className="flex items-center justify-between py-3">
        <Button onClick={() => setShowModal(true)}>
          Edit
        </Button>
        <Button className="bg-red-500" onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </div>
  )
}

export default CrudItem;