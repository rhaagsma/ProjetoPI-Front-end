import React, { useState, useEffect, useContext } from "react";
import {Button} from "src/components/ui/button";
import { Context } from 'src/services/context';
import CrudContent from "./cruds/CrudContent";
import { getAllBands, getAllCategories, getAllGenres, getAllProduct } from "src/services/http-commons";
const AdminPage = () => {

  const [selectedCrud, setSelectedCrud] = useState("products");
  const [data, setData] = useState([]);

  const fetchData = async (endpoint) => {
      const response = await endpoint();
        setData(response);
    }

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
  const handleEdit = async () => {
    try {
      
      const updatedItems = await fetchData(getSelectedEndpoint());
  
      setData(updatedItems);
    } catch (error) {
      
      console.error('Error fetching updated items:', error);
    }
  };
  
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
      <CrudContent selectedCrud={selectedCrud} initialData={data} onEdit= {handleEdit}/>
    </div>
  )
}

export default AdminPage;