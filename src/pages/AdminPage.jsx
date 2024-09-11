import React, { useState, useEffect, useContext } from "react";
import { Button } from "src/components/ui/button";
import { Context } from 'src/services/context';
import CrudContent from "./cruds/CrudContent";
import { getAllGenres } from "src/services/genres";
import { getAllBands } from "src/services/bands";
import { getAllProducts } from "src/services/products";
import { getAllCategories } from "src/services/categories";
import { getAllShowcases } from "src/services/showcase";
import { cn } from "src/lib/utils";

const AdminPage = () => {
  const [selectedCrud, setSelectedCrud] = useState("products");
  const [modalIsOpened, setModalIsOpened] = useState(false);
  const [data, setData] = useState({
    products: [],
    bands: [],
    genres: [],
    categories: [],
    showcase: [],
  });
  const fetchRelatedData = async (entity, data) => {
    switch (entity) {
      case 'products':
        const Bands = await getAllBands();
        const Categories = await getAllCategories();
  
        return data.map(product => {
          const productBands = Bands.filter(band => product.bands && product.bands.includes(band.id));
          const productCategories = Categories.filter(category => product.category && product.category.includes(category.id));
  
          return {
            ...product,
            bands: productBands,
            category: productCategories
          }
        });
  
      case 'bands':
        const Genres = await getAllGenres();
        const Products = await getAllProducts();
  
        return data.map(band => {
          const bandsGenres = Genres.filter(genre => band.genres && band.genres.includes(genre.id));
          const bandsProducts = Products.filter(product => band.products && band.products.includes(product.id));
  
          return {
            ...band,
            genres: bandsGenres,
            products: bandsProducts
          }
        });
  
      case 'genres':
        const Bandss = await getAllBands();
  
        return data.map(genre => {
          const genreBands = Bandss.filter(band => band.genres && band.genres.includes(genre.id));
  
          return {
            ...genre,
            bands: genreBands
          }
        });
  
      case 'showcases':
        const Productss = await getAllProducts();
  
        return data.map(showcase => {
          const showcaseProducts = Productss.filter(product => showcase.products && showcase.products.includes(product.id));
          
          return {
            ...showcase,
            products: showcaseProducts
          }
        });
  
      default:
        return data;
    }
  }

  const fecth = async () => {
    const resGenres = await getAllGenres();
    const resBands = await getAllBands();
    const resProduct = await getAllProducts();
    const resCategories = await getAllCategories();
    const resShowcases = await getAllShowcases();

    setData({
      products: await fetchRelatedData('products', resProduct),
      bands: await fetchRelatedData('bands', resBands),
      genres: await fetchRelatedData('genres', resGenres),
      categories: resCategories,
      showcases: await fetchRelatedData('showcases', resShowcases)
    });
  } 
    
  useEffect(() => {
    const fetchData = async () => {
      await fecth();
    };


    fetchData();
  }, []);

  useEffect(() => {
    if (modalIsOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [modalIsOpened])

  const handleButtonClick = (crud) => {
    setSelectedCrud(crud);
  }

  return (
    <div className={cn(modalIsOpened ? "overflow-y-hidden" : null, "container mx-auto p-4 flex flex-col items-center justify-center")}>
      <div className="flex flex-wrap gap-2 mb-4">
        <Button className="w-full sm:w-auto sm:flex-1" onClick={() => handleButtonClick("products")}>
          Gerenciar Produtos
        </Button>
        <Button className="w-full sm:w-auto sm:flex-1" onClick={() => handleButtonClick("bands")}>
          Gerenciar Bandas
        </Button>
        <Button className="w-full sm:w-auto sm:flex-1" onClick={() => handleButtonClick("genres")}>
          Gerenciar Gêneros
        </Button>
        <Button className="w-full sm:w-auto sm:flex-1" onClick={() => handleButtonClick("categories")}>
          Gerenciar Categorias
        </Button>
        <Button className="w-full sm:w-auto sm:flex-1" onClick={() => handleButtonClick("showcases")}>
          Gerenciar Showcases
        </Button>
      </div>
      <CrudContent selectedCrud={selectedCrud} initialData={data[selectedCrud]} refetch={fecth} setOpened={setModalIsOpened}/>
    </div>
  )
}

export default AdminPage;