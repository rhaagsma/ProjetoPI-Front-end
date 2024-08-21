import React, { useEffect, useState } from 'react'
import { Button } from 'src/components/ui/button'
import { saveProduct, getAllBands, getAllCategories } from 'src/services/http-commons'
import { Input } from 'src/components/ui/input'
import Image from './Image'

export default function CreateProduct() {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [selectedBands, setSelectedBands] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [productImage, setProductImage] = useState('');
  const [existsBands, setExistsBands] = useState([]);
  const [existCategories, setExistCategories] = useState([]);

  const fetchBands = async () => {
    try {
      const bands = await getAllBands();
      setExistsBands(bands);
    } catch (error) {
      console.error('Error fetching bands:', error);
    }
  }

  const fetchCategories = async () => {
    try {
      const categories = await getAllCategories();
      setExistCategories(categories);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  }

  const handleSaveProduct = async (e) => {
    e.preventDefault();
    console.log(selectedBands, selectedCategory);
    const product = {
      name: productName,
      image: "productImage",
      description: productDescription,
      price: productPrice,
      quantity: productQuantity,
      bands: selectedBands,
      category: selectedCategory
    }

    try {
      const response = await saveProduct(product);

      if (!response.ok) {
        throw new Error('Failed to save product');
      }

      setProductName('');
      setProductDescription('');
      setProductPrice('');
      setProductQuantity('');
      setSelectedBands([]);
      setSelectedCategory('');
      setProductImage('');

      console.log('Product saved successfully');
    } catch (error) {
      console.error('Error saving product:', error);
    }
  }

  useEffect(() => {
    fetchBands();
    fetchCategories();
  }, []);

  const handleBandChange = (e) => {
    
    setSelectedBands([...selectedBands, e.target.value]);
  }
  
  const handleCategoryChange = (e) => {
    
    setSelectedCategory(e.target.value);
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productName">
            Name
          </label>
          <Input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productDescription">
            Description
          </label>
          <textarea
            id="productDescription"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productPrice">
            Price
          </label>
          <Input
            type="number"
            id="productPrice"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bands">
            Bands
          </label>
          <div>
            {existsBands.map((band) => (
              <label key={band.id} className="inline-flex items-center mr-6">
                <input
                  type="radio"
                  name="band"
                  value={band.id}
                  onChange={handleBandChange}
                  className="form-radio h-4 w-4 text-blue-600"
                />
                <span className="ml-2 text-gray-700">{band.name}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
            Category
          </label>
          <div>
            {existCategories.map((category) => (
              <label key={category.id} className="inline-flex items-center mr-6">
                <input
                  type="radio"
                  name="category"
                  value={category.id}
                  onChange={handleCategoryChange}
                  className="form-radio h-4 w-4 text-blue-600"
                />
                <span className="ml-2 text-gray-700">{category.name}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productQuantity">
            Quantity
          </label>
          <Input
            type="number"
            id="productQuantity"
            value={productQuantity}
            onChange={(e) => setProductQuantity(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productImage">
            Image
          </label>
          <Image value={productImage} onChange={setProductImage} />
        </div>

        <div className="flex items-center justify-between">
          <Button onClick={(e) => handleSaveProduct(e)} >
          Save Product
          </Button>
        </div>
      </form>
    </div>
  )
}