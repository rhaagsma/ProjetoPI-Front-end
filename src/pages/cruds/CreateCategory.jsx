import React, { useState, useEffect } from 'react';
import { Button } from "src/components/ui/button";
import { Input } from 'src/components/ui/input';
import { useToast } from 'src/hooks/use-toast';
import { addCategory, updateCategory } from 'src/services/categories';

const CreateCategory = ({handleHide, data, refecth}) => {
  const { toast } = useToast();
  const [categoryName, setCategoryName] = useState('');

  const handleSaveCategory = async (e) => {
    e.preventDefault();
    const categoryData = {
      name: categoryName
    }

    try {
      if (data) {

        const response = await updateCategory(data.id, categoryData);
        if (response?.error) {
          toast({
            title: 'Ops! Houve um erro',
            description: 'Não foi possível atualizar a categoria. Por favor, tente novamente.',
            variant: 'destructive',
          })
          return
        }
      } else {
        
        const response = await addCategory(categoryData);
        if (response?.error) {
          toast({
            title: 'Ops! Houve um erro',
            description: 'Não foi possível adicionar a categoria. Por favor, tente novamente.',
            variant: 'destructive',
          })
          return
        }
      }
      setCategoryName('');
      refecth();

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
            Nome
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
            {data ? 'Atualizar Categoria' : 'Adicionar Categoria'}
          </Button>
          <Button onClick={handleHide}>Cancelar</Button>
        
          </div>
        </div>
      </form>
    </div>
  )
}

export default CreateCategory;