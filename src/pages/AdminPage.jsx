import React, { useState, useEffect, useContext } from "react";
import {Button} from "src/components/ui/button";
import { Context } from 'src/services/context';
import CrudContent from "./cruds/CrudContent";

const AdminPage = () => {

  const { GetAllBands, GetAllCategories, GetAllGenres, GetAllProduct} = useContext(Context);
  const [selectedCrud, setSelectedCrud] = useState("products");
  const [data, setData] = useState([]);

  const fetchData = async (endpoint) => {
    try {
      const response = await endpoint();
      if (response.status === 200) {
        setData(response.data);
      } else {
        console.error("API request failed:", response);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (selectedCrud === "products") {
      fetchData(GetAllProduct);
    } else if (selectedCrud === "bands") {
      fetchData(GetAllBands);
    } else if (selectedCrud === "genres") {
      fetchData(GetAllGenres);
    } else if (selectedCrud === "categories") {
      fetchData(GetAllCategories);
    }
  }, [selectedCrud]);

  const handleButtonClick = (crud) => {
    setSelectedCrud(crud);
  }

  return (
    <div className="container mx-auto p-4 flex flex-col sm:flex-row items-center justify-center">
      <div className="flex flex-wrap gap-2">
        <Button className="w-full sm:w-auto" onClick={() => handleButtonClick("products")}>
          Manage Products
        </Button>
        <Button className="w-full sm:w-auto" onClick={() => handleButtonClick("bands")}>
          Manage Bands
        </Button>
        <Button className="w-full sm:w-auto" onClick={() => handleButtonClick("genres")}>
          Manage Genres
        </Button>
        <Button className="w-full sm:w-auto" onClick={() => handleButtonClick("categories")}>
          Manage Categories
        </Button>
      </div>

      <CrudContent selectedCrud={selectedCrud} data={data} />
    </div>
  )
}

export default AdminPage;