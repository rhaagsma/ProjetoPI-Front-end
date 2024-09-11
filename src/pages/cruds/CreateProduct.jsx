import React, { useEffect, useState } from 'react'
import { Button } from 'src/components/ui/button'
import { Input } from 'src/components/ui/input'
import Image from './Image'
import { useToast } from 'src/hooks/use-toast'
import { getAllBands } from 'src/services/bands'
import { getAllCategories } from 'src/services/categories'
import { addProduct, updateProduct } from 'src/services/products'
import { cn } from 'src/lib/utils'

const CreateProduct = ({handleHide, data, refecth}) => {
  const { toast } = useToast();
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [selectedBands, setSelectedBands] = useState([]);
  const [existsBands, setExistsBands] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [productImage, setProductImage] = useState('');
  
  const [existCategories, setExistCategories] = useState([]);

  const fetchBands = async () => {
    try {
      const bands = await getAllBands();
      console.log('bandas', bands);
      setExistsBands(bands);
    } catch (error) {
      console.error('Error fetching bands:', error);
    }
  }

  const fetchCategories = async () => {
    try {
      const categories = await getAllCategories();
      console.log('categorias', categories);
      setExistCategories(categories);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  }

  const handleSaveProduct = async (e) => {
    e.preventDefault();

    const productData = {
      name: productName,
      image: productImage,
      description: productDescription,
      price: productPrice,
      quantity: productQuantity,
      bands: selectedBands,
      category: selectedCategory
    }

    try {
      if (data) {

        const response = await updateProduct(data.id, productData);
        if (response?.error) {
          toast({
            title: 'Ops! Houve um erro',
            description: 'Não foi possível atualizar o produto. Por favor, tente novamente.',
            variant: 'destructive',
          })
          return;
        }
      } else {
        
        const response = await addProduct(productData);
        if (response?.error) {
          toast({
            title: 'Ops! Houve um erro',
            description: 'Não foi possível adicionar o produto. Por favor, tente novamente.',
            variant: 'destructive',
          })
          return;
        }
      }

      setProductName('');
      setProductDescription('');
      setProductPrice('');
      setProductQuantity('');
      setSelectedBands([]);
      setSelectedCategory('');
      setProductImage('');
      refecth();

      console.log('Product saved successfully');
    } catch (error) {
      console.error('Error saving product:', error);
    }
  }

  useEffect(() => {
    fetchBands();
    fetchCategories();

    if (data) {

      setProductName(data.name);
      setProductDescription(data.description);
      setProductPrice(data.price);
      setProductQuantity(data.quantity);
      setSelectedBands(data.bands.map(band => band.id));
      setSelectedCategory(data.category.map(category => category.id));
      setProductImage(data.image);
    }
  }, [data]);
  
  return (
    <div className="flex justify-center items-center">
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
              <div 
                key={band.id} 
                className={"flex gap-2 items-center"}
                onClick={() => {
                  if (selectedCategory.includes(band.id)) {
                    setSelectedBands(selectedBands.filter((id) => id !== band.id));
                  } else {
                    setSelectedBands([...selectedBands, band.id]);
                  }
                }}
              >
                <div className={cn(selectedBands.includes(band.id) ? "bg-blue-500 border-blue-500" : "border-slate-500", "w-4 h-4 border rounded-sm flex items-center justify-center")}>
                  {selectedBands.includes(band.id) && <div className="w-2 h-2 bg-white rounded-sm"/>}
                </div>
                <span>{band.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
            Category
          </label>
          <div>
          {existCategories.map((category) => (
            <div 
              key={category.id} 
              className={"flex gap-2 items-center"}
              onClick={() => {
                if(selectedCategory === category.id) {
                  setSelectedCategory('');
                } else {
                  setSelectedCategory(category.id);
                }
              }}
            >
              <div className={cn(selectedCategory.includes(category.id) ? "bg-blue-500 border-blue-500" : "border-slate-500", "w-4 h-4 border rounded-sm flex items-center justify-center")}>
                {selectedCategory.includes(category.id) && <div className="w-2 h-2 bg-white rounded-sm"/>}
              </div>
              <span>{category.name}</span>
            </div>
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
          <Button onClick={handleSaveProduct}>
            {data ? 'Update Product' : 'Save Product'}
          </Button>
          <Button onClick={handleHide}>Cancel</Button>
        </div>
        
      </form>
    </div>
  )
}
export default CreateProduct