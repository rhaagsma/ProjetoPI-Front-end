import React, { useEffect, useState } from 'react';
import { Button } from 'src/components/ui/button';
import { Input } from 'src/components/ui/input';
import { Textarea } from 'src/components/ui/textarea';
import { useToast } from 'src/hooks/use-toast';
import { addBand, updateBand } from 'src/services/bands';
import { getAllGenres } from 'src/services/genres';
import Image from './Image';

const CreateBand = ({ handleHide, data, refecth }) => {
  const { toast } = useToast();
  const [bandName, setBandName] = useState('');
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [bandDescription, setBandDescription] = useState('');
  const [existGenres, setExistsGenres] = useState([]);
  const [bandImage, setBandImage] = useState('');
  

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
      description: bandDescription,
      image: bandImage,
    }

    try {
      if (data) {
        console.log(bandData)
        const response = await updateBand(data.id, bandData);
        if (response?.error) {
          toast({
            title: 'Ops! Houve um erro',
            description: 'Não foi possível atualizar a banda. Por favor, tente novamente.',
            variant: 'destructive',
          })
          return;
        }
        else{
          console.log(response);
        }

      }else {
        const response = await addBand(bandData);

        if (response?.error) {
          toast({
            title: 'Ops! Houve um erro',
            description: 'Não foi possível adicionar a banda. Por favor, tente novamente.',
            variant: 'destructive',
          })
          return
        }

        setBandName('');
        setSelectedGenres([]);
        refecth()
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
      setBandDescription(data.description);
    }
  }, [data]);

  return (
    <div className="flex justify-center items-center">
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
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bandDescription">
            Description
          </label>
          <Textarea
            type="text"
            id="BandDescription"
            value={bandDescription}
            onChange={(e) => setBandDescription(e.target.value)}
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
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bandImage">
              Image
            </label>
            <Image value={bandImage} onChange={setBandImage} />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Button onClick={handleSaveBand}>
            {data ? 'Atualizar banda' : 'Adicionar banda'}
          </Button>
          <Button onClick={handleHide}>Cancelar</Button>
        </div>

      </form>
    </div>
  )
}

export default CreateBand;