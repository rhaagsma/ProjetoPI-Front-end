import React from 'react'
import { Button } from 'src/components/ui/button'
import Image from '../Image'

const GenreCard = ({ data }) => {
  return (
    <div className="flex justify-center items-center ">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <p>{data.name}</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Bands</label>
          <ul>
            {data.bands.map((band) => (
              <li key={band.id}>{band.name}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  )
}

export default GenreCard