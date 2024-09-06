import React, { useState, useEffect, useContext } from "react";
import { Button } from "src/components/ui/button";
import { Context } from 'src/services/context';
import CrudContent from "./cruds/CrudContent";
import { getAllBands, getAllCategories, getAllGenres, getAllProduct, getAllShowCases } from "src/services/http-commons";

const AdminPage = () => {
  const { GetAllProduct, GetAllBands, GetAllGenres, GetAllCategories, GetAllShowCases } = useContext(Context);
  const [selectedCrud, setSelectedCrud] = useState("products");
  const [data, setData] = useState({
    products: [],
    bands: [],
    genres: [],
    categories: [],
    showcase: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const [products, bands, genres, categories, showcase] = await Promise.all([
        getAllProduct(),
        getAllBands(),
        getAllGenres(),
        getAllCategories(),
        getAllShowCases()
      ]);

      setData({
        products: await fetchRelatedDataP(products),
        bands: await fetchRelatedDataB(bands),
        genres: await fetchRelatedDataG(genres),
        categories,
        showcase
      });
    };

    const fetchRelatedDataP = async (products) => {
      const bands = await getAllBands();
      const categories = await getAllCategories();

      return products.map(product => {
        const productBands = bands.filter(band => product.bands && product.bands.includes(band.id));
        const productCategories = categories.filter(category => product.category && product.category.includes(category.id));

        return {
          ...product,
          bands: productBands,
          category: productCategories
        }
      })
    }

    const fetchRelatedDataB = async (bands) => {
      const genres = await getAllGenres();
      const products = await getAllProduct();

      return bands.map(band => {
        const bandsGenres = genres.filter(genre => band.genres && band.genres.includes(genre.id));
        const bandsProducts = products.filter(product => band.products && band.products.includes(product.id));

        return {
          ...band,
          genres: bandsGenres,
          products: bandsProducts
        }
      })
    }

    const fetchRelatedDataG = async (genres) => {
      const bands = await getAllBands();

      return genres.map(genre => {
        const genreBands = bands.filter(band => band.genres && band.genres.includes(genre.id));

        return {
          ...genre,
          bands: genreBands
        }
      })
    }
    
    fetchData();
  }, [GetAllBands, GetAllProduct, GetAllCategories, GetAllGenres, GetAllShowCases]);

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
        <Button className="w-full sm:w-auto sm:flex-1" onClick={() => handleButtonClick("showcase")}>
          Manage ShowCase
        </Button>
      </div>
      <CrudContent selectedCrud={selectedCrud} initialData={data[selectedCrud]}/>
    </div>
  )
}

export default AdminPage;