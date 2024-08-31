import React from 'react'

const BandCard = ({ data }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <p>{data.name}</p>
        </div>
        <div className="mb-4">
          <ul>
            {data.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default BandCard