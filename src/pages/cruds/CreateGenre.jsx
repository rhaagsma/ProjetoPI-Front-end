import React, { useState, useEffect } from 'react';
import { Button } from "src/components/ui/button";
import { Input } from 'src/components/ui/input';
import { addGenre, updateGenre } from 'src/services/genres';
import { useToast } from 'src/hooks/use-toast';

const CreateGenre = ({handleHide, data, refecth}) => {
  const { toast } = useToast();
  const [genreName, setGenreName] = useState('');

  const handleSaveGenre = async (e) => {
      e.preventDefault();
      const genreData = {
        name: genreName
      }
  
    try {
      if (data) {

        const response = await updateGenre(data.id, genreData);
        if (response?.error) {
          toast({
            title: 'Ops! Houve um erro',
            description: 'Não foi possível atualizar o gênero. Por favor, tente novamente.',
            variant: 'destructive',
          })
          return;
        }
      } else {
        
        const response = await addGenre(genreData);
        if (response?.error) {
          toast({
            title: 'Ops! Houve um erro',
            description: 'Não foi possível adicionar o gênero. Por favor, tente novamente.',
            variant: 'destructive',
          })
          return;
        }
      }
      setGenreName('');
      refecth();

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
          Nome
        </label>        
        <Input
          label="Nome do Gênero"
          id="name"
          type="text"
          value={genreName}
          onChange={(e) => setGenreName(e.target.value)}
        />

          <div className="flex items-center justify-between">
            <Button onClick={handleSaveGenre}>
              {data ? 'Atualizar Gênero' : 'Adicionar Gênero'}
            </Button>
            <Button onClick={handleHide}>Cancelar</Button>
        
          </div>
        </div>
      </form>
    </div>
  )
}


export default CreateGenre;