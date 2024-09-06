import React, { useState, useEffect } from 'react';
import { Button } from "src/components/ui/button";
import { saveCategory, updateCategory } from 'src/services/http-commons';
import { Input } from 'src/components/ui/input';

const CreateCategory = ({handleHide, data}) => {
  const [categoryName, setCategoryName] = useState('');

  const handleSaveCategory = async (e) => {
    e.preventDefault();
    const categoryData = {
      name: categoryName
    }

    try {
      if (data) {

        const response = await updateCategory(data.id, categoryData);
        if (!response.ok) {
          throw new Error('Failed to update category');
        }
      } else {
        
        const response = await saveCategory(categoryData);
        if (!response.ok) {
          throw new Error('Failed to save category');
        }
      }
      setCategoryName('');

      console.log('Category saved successfully');
    } catch (error) {
      console.error('Error saving category:', error);
    }
  }
  useEffect(() => {
    
    if (data) {
      setCategoryName(data.name)
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
          label="Category Name"
          id="name"
          type="text"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />

        <div className="flex items-center justify-between">
          <Button onClick={handleSaveCategory}>
            {data ? 'Update Category' : 'Save Category'}
          </Button>
          <Button onClick={handleHide}>Cancel</Button>
        
          </div>
        </div>
      </form>
    </div>
  )
}

export default CreateCategory;