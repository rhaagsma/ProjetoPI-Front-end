import React, { useState, useEffect, useContext } from "react";
import { Button } from "src/components/ui/button";
import { Context } from 'src/services/context';
import CrudContent from "./cruds/CrudContent";
import { getAllBands, getAllCategories, getAllGenres, getAllProduct, getAllShowcases } from "src/services/http-commons";

const AdminPage = () => {

  const { GetAllProduct, GetAllBands, GetAllGenres, GetAllCategories, GetAllShowcases } = useContext(Context);
  const [selectedCrud, setSelectedCrud] = useState("products");
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
        const Products = await getAllProduct();
  
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
        const Productss = await getAllProduct();
  
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
    
  useEffect(() => {
    const fetchData = async () => {
      const [products, bands, genres, categories, showcases] = await Promise.all([
        getAllProduct(),
        getAllBands(),
        getAllGenres(),
        getAllCategories(),
        getAllShowcases()
      ]);

      setData({
        products: await fetchRelatedData('products', products),
        bands: await fetchRelatedData('bands', bands),
        genres: await fetchRelatedData('genres', genres),
        categories,
        showcases: await fetchRelatedData('showcases', showcases)
      });
    };


    fetchData();
  }, [GetAllBands, GetAllProduct, GetAllCategories, GetAllGenres, GetAllShowcases]);

  const handleButtonClick = (crud) => {
    setSelectedCrud(crud);
  }

  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center">
      <div className="flex flex-wrap gap-2 mb-4">
        <Button className="w-full sm:w-auto sm:flex-1" onClick={() => handleButtonClick("products")}>
          Manage Products
        </Button>
        <Button className="w-full sm:w-auto sm:flex-1" onClick={() => handleButtonClick("bands")}>
          Manage Bands
        </Button>
        <Button className="w-full sm:w-auto sm:flex-1" onClick={() => handleButtonClick("genres")}>
          Manage Genres
        </Button>
        <Button className="w-full sm:w-auto sm:flex-1" onClick={() => handleButtonClick("categories")}>
          Manage Categories
        </Button>
        <Button className="w-full sm:w-auto sm:flex-1" onClick={() => handleButtonClick("showcases")}>
          Manage ShowCase
        </Button>
      </div>
      <CrudContent selectedCrud={selectedCrud} initialData={data[selectedCrud]}/>
    </div>
  )
}

export default AdminPage;