import React,   {useState, useEffect, useContext} from 'react'
import './css/Category.css'
import { Context } from '../services/context.tsx'
import {DataProduct} from '../components/type/DataProduct.ts'


const Category = (props) => {
    const { GetAllProduct } = useContext(Context);
    const [products, setProducts] = useState<DataProduct[]>([]);
    useEffect(() => {
        const fetchProducts = async () => {
          const response = await GetAllProduct();
            if (response) {
                const filteredProducts = response.data.filter(product => product.category === props.category);
                setProducts(filteredProducts);
            } else {
                console.error("Error fetching products");
    
            }
        };
        fetchProducts();
    }, [GetAllProduct, props.category]);

    return (
        <div className= 'category'>
            <img src={props.banner} alt="" />
            <div className="category-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="category-sort">
                    Sort by <img src="" alt="" />
                </div>
            </div>
            <div className="category-products">
                {products.map((product) => (
                    <div className="category-product" key={product.id}>
                        <img src={product.image} alt="" />
                        <div>
                            <p>{product.name}</p>
                            <p>{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Category