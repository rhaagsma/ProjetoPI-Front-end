import React, { useState } from 'react';
import { Button } from "src/components/ui/button";
import { saveCategory } from 'src/services/http-commons';
import { Input } from 'src/components/ui/input';

const CreateGenre = () => {
  const [categoryName, setCategoryName] = useState('');

  const SaveCategory = async (e) => {
    e.preventDefault();
    const category = {
      name: categoryName
    }

    try {
      const response = await saveCategory(category);

      if (!response.ok) {
        throw new Error('Failed to save category');
      }

      setCategoryName('');

      console.log('Category saved successfully');
    } catch (error) {
      console.error('Error saving category:', error);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <Input
          label="Category Name"
          id="name"
          type="text"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />

        <div className="flex items-center justify-between">
          <Button
            onClick={SaveCategory}
          >
            Save Category
          </Button>
        </div>
      </form>
    </div>
  )
}

export default CreateGenre;