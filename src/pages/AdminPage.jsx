import React, { useState, useEffect, useContext } from "react";
import {Button} from "src/components/ui/button";
import { Context } from 'src/services/context';
import CrudContent from "./cruds/CrudContent";
import { 
        getCategory, getBand, getGenre, getProduct,
        getAllBands, getAllCategories, getAllGenres, getAllProduct 
        } from "src/services/http-commons";
const AdminPage = () => {

  const [selectedCrud, setSelectedCrud] = useState("products");
  const [data, setData] = useState([]);

  const fetchBand = async (response) => {
    if (response.bands && response.bands.length > 0) {
      const bands = [];
      for (let i = 0; i < response.bands.length; i++) {
        const band = await getBand(response.bands[i]);
        bands.push(band);
      }
      return { bands: bands };
    }
  }
  
  
  const fetchCategory = async (response) => {
    if (response.category) {
      const category = await getCategory(response.category);
      return { category: category };
    }

  }
  
  const fetchGenre = async (response) => {
    if (response.genres && response.genres.length > 0) {
      const genres = [];
      for (let i = 0; i < response.genres.length; i++) {
        const genre = await getGenre(response.genres[i]);
        genres.push(genre);
      }
      return { genres: genres };
    }
  }
  
  const fetchProduct = async (response) => {
    if (response.products && response.products.length > 0) {
      const products = [];
      for (let i = 0; i < response.products.length; i++) {
        const product = await getProduct(response.products[i]);
        products.push(product);
      }
      return { products: products };
    }
  }
  const fetchData = async (endpoint) => {
    const data = await endpoint();
    console.log(data);
    let updatedResponse = { ...data };
  
    if (selectedCrud === "products") {
      updatedResponse = { ...updatedResponse, ...await fetchGenre(updatedResponse) };
      updatedResponse = { ...updatedResponse, ...await fetchBand(updatedResponse) };
      updatedResponse = { ...updatedResponse, ...await fetchCategory(updatedResponse) };


    } else if (selectedCrud === "bands") {
      updatedResponse = { ...updatedResponse, ...await fetchGenre(updatedResponse) };
      updatedResponse = { ...updatedResponse, ...await fetchProduct(updatedResponse) };


    } else if (selectedCrud === "genres") {
      updatedResponse = { ...updatedResponse, ...await fetchGenre(updatedResponse) };
      updatedResponse = { ...updatedResponse, ...await fetchBand(updatedResponse) };


    } else if (selectedCrud === "categories") {
      updatedResponse = { ...updatedResponse, ...await fetchCategory(updatedResponse) };

    }
    
    setData(updatedResponse);
    console.log(updatedResponse);
  };

  useEffect(() => {
    if (selectedCrud === "products") {
      fetchData(getAllProduct);
    } else if (selectedCrud === "bands") {
      fetchData(getAllBands);
    } else if (selectedCrud === "genres") {
      fetchData(getAllGenres);
    } else if (selectedCrud === "categories") {
      fetchData(getAllCategories);
    }
  }, [selectedCrud]);

  const handleButtonClick = (crud) => {
    setSelectedCrud(crud);
  }
  
  const getSelectedEndpoint = () => {
    switch (selectedCrud) {
      case 'products':
        return getAllProduct;
      case 'bands':
        return getAllBands;
      case 'genres':
        return getAllGenres;
      case 'categories':
        return getAllCategories;
      default:
        return getAllProduct;
    }
  };

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
      </div>
      <CrudContent selectedCrud={selectedCrud} initialData={data}/>
    </div>
  )
}

export default AdminPage;