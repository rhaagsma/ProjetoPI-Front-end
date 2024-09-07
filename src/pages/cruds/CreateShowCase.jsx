import React, { useEffect, useState } from 'react'
import { Button } from 'src/components/ui/button'
import { saveShowcase, getAllProduct, updateShowcase } from 'src/services/http-commons'
import { Input } from 'src/components/ui/input'

const CreateShowCase = ({ handleHide, data }) => {
  const [carrosselName, setCarrosselName] = useState('');
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [existsProducts, setExistsProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const products = await getAllProduct();
      setExistsProducts(products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  const handleSaveCarrossel = async (e) => {
    const carrosselData = {
      name: carrosselName,
      products: selectedProducts,
    }

    try {
      if (data) {

        const response = await updateShowcase(data.id, carrosselData);
        if (!response.ok) {
          throw new Error('Failed to update band');
        }
        else{
          console.log(response);
        }

      }else {
      const response = await saveShowcase(carrosselData);
      if (!response.ok) {
        throw new Error('Failed to save carrossel');
      }

      setCarrosselName('');
      setSelectedProducts([]);
      }
      console.log('Carrossel saved successfully');
    } catch (error) {
      console.error('Error saving carrossel:', error);
    }
  }

  useEffect(() => {
    fetchProducts();

    if (data) {
      setCarrosselName(data.name);
      setSelectedProducts(data.products.map(product => product.id));
    }
  }, [data]);


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
            {existsProducts.map((product) => (
              <label key={product.id} className="inline-flex items-center mr-6">
                <input
                  type="checkbox"
                  name="product"
                  value={product.id}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedProducts([...selectedProducts, e.target.value]);
                      
                    } else {
                      setSelectedProducts(selectedProducts.filter((id) => id !== e.target.value));
                      
                    }
                  }}
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                <span className="ml-2 text-gray-700">{product.name}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Button onClick={handleSaveCarrossel}>
            {data ? 'Update Product' : 'Save Product'}
          </Button>
          <Button onClick={handleHide}>Cancel</Button>
        </div>
      </form>
    </div>
  )
}

export default CreateShowCase