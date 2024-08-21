import React, {useState, useEffect} from "react"
import { Button } from "src/components/ui/button"
import { Input } from "src/components/ui/input"

import { getCategory, getBand, getGenre, getProduct,
         updateBand, updateCategory, updateGenre, updateProduct 
        } from "src/services/http-commons"


const CrudItem = ({ selectedCrud, item, onEdit }) => {
  const [Name, setName] = useState(item.name);
  const [Description, setDescription] = useState(item.description);
  const [Price, setPrice] = useState(item.price);
  const [Quantity, setQuantity] = useState(item.quantity);
  const [Band, setBand] = useState([]);
  const [Category, setCategory] = useState('');
  const [Genre, setGenre] = useState([]);
  const [Product, setProduct] = useState([]);
  const [Image, setImage] = useState(item.image);

  useEffect(() => {
    const fetchBandNames = async () => {
      if (item.bands && item.bands.length > 0) {
        const bandNames = await Promise.all(item.bands.map(async (bandId) => {
          const band = await getBand(bandId);
          return band.name;
        }));
        setBand(bandNames);
      }
    }
    
    const fetchCategoryName = async () => {
      if (item.category) {
        const category = await getCategory(item.category);
        setCategory(category.name);
      }
    }
    
    const fetchGenreNames = async () => {
      if (item.genres && item.genres.length > 0) {
        const genreNames = await Promise.all(item.genres.map(async (genreId) => {
          const genre = await getGenre(genreId);
          return genre.name;
        }));
        setGenre(genreNames);
      }
    }
    
    const fetchProductName = async () => {
      if (item.products && item.products.length > 0) {
        const productNames = await Promise.all(item.products.map(async (productId) => {
          const product = await getProduct(productId);
          return product.name;
        }));
        setProduct(productNames);
      }
    }

    fetchBandNames();
    fetchCategoryName();
    fetchGenreNames();
    fetchProductName();
  }, [item.bands, item.category, item.genres, item.products]);

  const handleEdit = () => {
    const updatedItem = {
      ...item,
      name: Name,
      description: Description,
      price: Price,
      quantity: Quantity,
      bands: Band,
      category: Category,
      genre: Genre,
      product: Product,
      image: Image,
    };
    switch (selectedCrud) {
      case "bands":
        updateBand(updatedItem);
        break;
      case "categories":
        updateCategory(updatedItem);
        break;
      case "genres":
        updateGenre(updatedItem);
        break;
      case "products":
        updateProduct(updatedItem);
        break;
      default:
        break;
    }
  }

  return (
    <div className={`flex flex-col p-4 bg-white shadow-sm rounded-md`}>
      {selectedCrud === "products" && (
        <>
          <Input
            className={`mt-2 px-2 py-1 rounded-md`}
            value={Image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Image URL"
          />
      
          <Input
            className={`mt-2 px-2 py-1 rounded-md`}
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            className={`mt-2 px-2 py-1 rounded-md`}
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Input
            className={`mt-2 px-2 py-1 rounded-md`}
            value={Price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <Input
            className={`mt-2 px-2 py-1 rounded-md`}
            value={Quantity}
            onChange={(e) => setQuantity(e.target.value)}
            
          />
          <Input
            className={`mt-2 px-2 py-1 rounded-md`}
            value={Band.join(', ')} 
            onChange={(e) => setBand(e.target.value.split(',').map(band => band.trim()))}
          />
          <Input
            className={`mt-2 px-2 py-1 rounded-md`}
            value={Category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </>
      )}

      {selectedCrud === "bands" && (
        <>
          <Input
            className={`mt-2 px-2 py-1 rounded-md`}
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            className={`mt-2 px-2 py-1 rounded-md`}
            value={Genre.join(', ')}
            onChange={(e) => setGenre(e.target.value.split(',').map(genre => genre.trim()))}
          />
        </>
      )}  

      {selectedCrud === "categories" && (
        <Input
          className={`mt-2 px-2 py-1 rounded-md`}
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
      )}

      {selectedCrud === "genres" && (
        <>
          <Input
            className={`mt-2 px-2 py-1 rounded-md`}
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            className={`mt-2 px-2 py-1 rounded-md`}
            value={Product.join(', ')} 
            onChange={(e) => setProduct(e.target.value.split(',').map(prod => prod.trim()))}
          />
        </>
      )}

      <Button
        
        onClick={handleEdit}
      >
        Edit
      </Button>
    </div>
  )
}

export default CrudItem;