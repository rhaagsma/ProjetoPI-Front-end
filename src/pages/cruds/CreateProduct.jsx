import React, { useState } from 'react';
import { Button } from "src/components/ui/button";
import { saveProduct } from 'src/services/http-commons';

const CreateProduct = () => {
    
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [bands, setBands] = useState([]);
  const [category, setCategory] = useState('');

  const SaveProduct = async (e) => {
    e.preventDefault();
    const product = {
      name: productName,
      description: productDescription,
      price: productPrice,
      quantity: productQuantity,
      bands: bands,
      category: category,
    };

    try {
      const response = await saveProduct(product);

      if (!response.ok) {
        throw new Error('Failed to save product');
      }

      setProductName('');
      setProductDescription('');
      setProductPrice('');
      setProductQuantity('');
      setBands([]);
      setCategory('');

      console.log('Product saved successfully');
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-full max-w-md p-8 bg-white rounded-lg shadow-md" onSubmit={SaveProduct}>
        <Input
          label="Product Name"
          id="name"
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />

        {/* Add more Input components for other product details */}

        <div className="flex items-center justify-between">
          <Button
            className="w-full sm:w-auto"
          >
            Save Product
          </Button>
        </div>
      </form>
    </div>
  );
};