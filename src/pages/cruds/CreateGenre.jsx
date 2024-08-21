import React, { useState } from 'react';
import { Button } from "src/components/ui/button";
import { saveGenre } from 'src/services/http-commons';
import { Input } from 'src/components/ui/input';

const CreateGenre = () => {
  const [genreName, setGenreName] = useState('');

  const SaveGenre = async (e) => {
    e.preventDefault();
    const genre = {
      name: genreName
    }

    try {
      const response = await saveGenre(genre);

      if (!response.ok) {
        throw new Error('Failed to save genre');
      }

      setGenreName('');

      console.log('Genre saved successfully');
    } catch (error) {
      console.error('Error saving genre:', error);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <Input
          label="Genre Name"
          id="name"
          type="text"
          value={genreName}
          onChange={(e) => setGenreName(e.target.value)}
        />

        <div className="flex items-center justify-between">
          <Button
            onClick={SaveGenre}
          >
            Save Genre
          </Button>
        </div>
      </form>
    </div>
  )
}

export default CreateGenre;