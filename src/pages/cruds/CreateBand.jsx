import React, { useEffect, useState } from 'react';
import { Button } from 'src/components/ui/button';
import { getAllGenres, saveBand, updateBand } from 'src/services/http-commons';
import { Input } from 'src/components/ui/input';

const CreateBand = ({ handleHide, data }) => {
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
    
    const bandData = {
      name: bandName,
      genres: selectedGenres,
      products: data.products
    }

    try {
      if (data) {
        console.log(bandData)
        const response = await updateBand(data.id, bandData);
        if (!response.ok) {
          throw new Error('Failed to update band');
        }
        else{
          console.log(response);
        }

      }else {
        const response = await saveBand(bandData);

        if (!response.ok) {
          throw new Error('Failed to save band');
        }

        setBandName('');
        setSelectedGenres([]);
      }
      console.log('Band saved successfully');
    } catch (error) {
      console.error('Error saving band:', error);
    }
  }
  

  useEffect(() => {
    fetchGenres();

    if (data) {
      
      console.log(data)
      setBandName(data.name);
      setSelectedGenres(data.genres.map((genre) => genre.id));
    }
  }, [data]);

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
                  type="checkbox"
                  name="genre"
                  value={genre.id}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedGenres([...selectedGenres, e.target.value]);
                      console.log(selectedGenres)
                    } else {
                      setSelectedGenres(selectedGenres.filter((id) => id !== e.target.value));
                      
                    }
                  }}
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                <span className="ml-2 text-gray-700">{genre.name}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Button onClick={handleSaveBand}>
            {data ? 'Update Product' : 'Save Product'}
          </Button>
          <Button onClick={handleHide}>Cancel</Button>
        </div>

      </form>
    </div>
  )
}

export default CreateBand;