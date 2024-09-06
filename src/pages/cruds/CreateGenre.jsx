import React, { useState, useEffect } from 'react';
import { Button } from "src/components/ui/button";
import { saveGenre, updateGenre } from 'src/services/http-commons';
import { Input } from 'src/components/ui/input';

const CreateGenre = ({handleHide, data}) => {
  const [genreName, setGenreName] = useState('');

  const handleSaveGenre = async (e) => {
      e.preventDefault();
      const genreData = {
        name: genreName
      }
  
    try {
      if (data) {

        const response = await updateGenre(data.id, genreData);
        if (!response.ok) {
          throw new Error('Failed to update genre');
        }
      } else {
        
        const response = await saveGenre(genreData);
        if (!response.ok) {
          throw new Error('Failed to save genre');
        }
      }
      setGenreName('');

      console.log('Genre saved successfully');
    } catch (error) {
      console.error('Error saving genre:', error);
    }
  }
  useEffect(() => {
    
    if (data) {
      setGenreName(data.name)
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
          label="Genre Name"
          id="name"
          type="text"
          value={genreName}
          onChange={(e) => setGenreName(e.target.value)}
        />

          <div className="flex items-center justify-between">
            <Button onClick={handleSaveGenre}>
              {data ? 'Update Genre' : 'Save Genre'}
            </Button>
            <Button onClick={handleHide}>Cancel</Button>
        
          </div>
        </div>
      </form>
    </div>
  )
}


export default CreateGenre;