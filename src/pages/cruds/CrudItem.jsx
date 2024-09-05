import React, {useState, useEffect} from "react"
import { Button } from "src/components/ui/button"
import { Input } from "src/components/ui/input"
import { getCategory, getBand, getGenre, getProduct,
         updateBand, updateCategory, updateGenre, updateProduct,
         deleteProduct, deleteBand, deleteCategory, deleteGenre
        } from "src/services/http-commons"
import CreateProduct from "./CreateProduct";
import CreateBand from "./CreateBand";
import CreateGenre from "./CreateGenre";
import CreateCategory from "./CreateCategory";

import ProductCard from "./CrudsCards/ProductCard";
import BandCard from "./CrudsCards/BandCard.jsx";
import CategoryCard from "./CrudsCards/CategoryCard";
import GenreCard from "./CrudsCards/GenreCard";

import Modal from "./modal";

const CrudItem = ({selectedCrud, item, onEdit }) => {
  
  const [bands, setBands] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [genres, setGenres] = useState([]);
  const [category, setCategory] = useState([]);
  const [data, setData] = useState({id: item.id,
                                    name: item.name, 
                                    description: item.description, 
                                    price: item.price, 
                                    quantity: item.quantity, 
                                    category: item.category,
                                    genres: item.genres,
                                    products: item.products,
                                    image: item.image,
                                    bands: item.bands});
  useEffect(() => {
    const fetchBandNames = async () => {
      if (item.bands && item.bands.length > 0) {
        const bandNames = await (item.bands.map(async (bandId) => {
          const band = await getBand(bandId);
            return band;
        }));
      
      }
    }
    
    const fetchCategoryName = async () => {
      if (item.category) {
        const category = await getCategory(item.category);
        setCategory(category);
      }

    }
    
    const fetchGenreNames = async () => {
      if (item.genres && item.genres.length > 0) {
        const genreNames = await (item.genres.map(async (genreId) => {
          const genre = await getGenre(genreId);
          setGenres(genreNames);
        }));
        
      }
    }
    
    const fetchProductName = async () => {
      if (item.products && item.products.length > 0) {
        const productNames = await (item.products.map(async (productId) => {
          const product = await getProduct(productId);
          return product;
        }));
        setProducts(productNames);
      }
    }

    fetchBandNames();
    fetchCategoryName();
    fetchGenreNames();
    fetchProductName();

    const newData = {
      id: item.id,
      name: item.name, 
      description: item.description, 
      price: item.price, 
      quantity: item.quantity, 
      category: category,
      genres: genres,
      products: products,
      image: item.image,
      bands: bands
    }    
    setData(newData)

  }, [item.bands, item.category, item.genres, item.products])

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
            <CreateProduct data={data} />
          ) : selectedCrud === "bands" ? (
            <CreateBand data={data} />
          ) : selectedCrud === "categories" ? (
            <CreateCategory data={data} />
          ) : selectedCrud === "genres" ? (
            <CreateGenre data={data} />
          ) : null}

        </Modal>
      )}
      {selectedCrud && (
        <>
          {selectedCrud === "products" ? (
            <ProductCard data={data} />
          ) : selectedCrud === "bands" ? (
            <BandCard data={data} />
          ) : selectedCrud === "categories" ? (
            <CategoryCard data={data} />
          ) : selectedCrud === "genres" ? (
            <GenreCard data={data} />
          ) : (
            <ProductCard data={data} />
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