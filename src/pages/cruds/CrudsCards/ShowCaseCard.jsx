import React from 'react'

const ShowCaseCard = ({ data }) => {

  const products = data.products;

  return (
    <div className="flex justify-center items-center ">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <p>{data.name}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Products</label>
          <ul>
            {products.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ShowCaseCard