import React, { useEffect, useState } from 'react'
import { Button } from 'src/components/ui/button'
import { saveShowCase, getAllProduct, getCategory } from 'src/services/http-commons'
import { Input } from 'src/components/ui/input'

const CreateShowCase = ({ handleHide, categoryId }) => {
  const [carrosselName, setCarrosselName] = useState('');
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [category, setCategory] = useState(null);

  const fetchProducts = async () => {
    try {
      const products = await getAllProduct();
      setAllProducts(products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  const fetchCategory = async () => {
    try {
      const category = await getCategory(categoryId);
      setCategory(category);
    } catch (error) {
      console.error('Error fetching category:', error);
    }
  }

  const handleSaveCarrossel = async (e) => {
    const carrosselData = {
      name: carrosselName,
      products: selectedProducts,
      category: categoryId
    }

    try {
      const response = await saveShowCase(carrosselData);
      if (!response.ok) {
        throw new Error('Failed to save carrossel');
      }

      setCarrosselName('');
      setSelectedProducts([]);

      console.log('Carrossel saved successfully');
    } catch (error) {
      console.error('Error saving carrossel:', error);
    }
  }

  useEffect(() => {
    fetchProducts();
    fetchCategory();
  }, []);

  const handleProductChange = (e) => {
    if (e.target.checked) {
      setSelectedProducts([...selectedProducts, e.target.value]);
    } else {
      setSelectedProducts(selectedProducts.filter((id) => id !== e.target.value));
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="carrosselName">
            Name
          </label>
          <Input
            type="text"
            id="carrosselName"
            value={carrosselName}
            onChange={(e) => setCarrosselName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Products
          </label>
          <div>
            {allProducts.map((product) => (
              <label key={product.id} className="inline-flex items-center mr-6">
                <input
                  type="checkbox"
                  name="product"
                  value={product.id}
                  onChange={handleProductChange}
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                <span className="ml-2 text-gray-700">{product.name}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Button onClick={handleSaveCarrossel}>
            Save Carrossel
          </Button>
          <Button onClick={handleHide}>Cancel</Button>
        </div>
      </form>
    </div>
  )
}

export default CreateShowCase