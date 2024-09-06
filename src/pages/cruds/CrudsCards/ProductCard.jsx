import React from 'react'
import { Button } from 'src/components/ui/button'
import Image from '../Image'

const ProductCard = ({ data }) => {
  const category = data.category;
  const bands = data.bands;
  console.log(data);
  
  return (
    <div className="flex justify-center items-center ">
      <div className="w-full max-w-md p-5 bg-white rounded-lg shadow-md">

        <div className="mb-4">
          <img src={data.image}/>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <p>{data.name}</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
          <p>{data.description}</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Price</label>
          <p>{data.price}</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Bands</label>
          <ul>
            {bands.map((band) => (
              <li key={band.id}>{band.name}</li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Category</label>
          <ul>
            {category.map((category) => (
              <li key={category.id}>{category.name}</li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Quantity</label>
          <p>{data.quantity}</p>
        </div>



      </div>
    </div>
  )
}

export default ProductCard