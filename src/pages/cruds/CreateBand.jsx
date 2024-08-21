import React, { useEffect, useState } from 'react'
import { Button } from 'src/components/ui/button'
import { getAllGenres, saveBand} from 'src/services/http-commons'
import { Input } from 'src/components/ui/input'

export default function CreateBand() {
  const [bandName, setBandName] = useState('');
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [existGenres, setExistsGenres] = useState([]);

  const fetchGenres = async () => {
    try {
      const genres = await getAllGenres();
      setExistsGenres(genres);
    } catch (error) {
      console.error('Error fetching genres:', error);
    }
  }

  const handleSaveBand = async (e) => {
    e.preventDefault();
    console.log(selectedGenres);
    const band = {
      name: bandName,
      genres: selectedGenres
    }

    try {
      const response = await saveBand(band);

      if (!response.ok) {
        throw new Error('Failed to save band');
      }

      setBandName('');
      setSelectedGenres([]);

      console.log('Band saved successfully');
    } catch (error) {
      console.error('Error saving band:', error);
    }
  }

  useEffect(() => {
    fetchGenres()
  }, []);

  const handleGenreChange = (e) => {
    
    setSelectedGenres([...selectedGenres, e.target.value]);
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bandName">
            Name
          </label>
          <Input
            type="text"
            id="BandName"
            value={bandName}
            onChange={(e) => setBandName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="genre">
            Genre
          </label>
          <div>
            {existGenres.map((genre) => (
              <label key={genre.id} className="inline-flex items-center mr-6">
                <input
                  type="radio"
                  name="genre"
                  value={genre.id}
                  onChange={handleGenreChange}
                  className="form-radio h-4 w-4 text-blue-600"
                />
                <span className="ml-2 text-gray-700">{genre.name}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Button onClick={(e) => handleSaveBand(e)} >
          Save Band
          </Button>
        </div>
      </form>
    </div>
  )
}
