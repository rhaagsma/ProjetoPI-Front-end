import Card from 'src/components/card';
import Layout from 'src/components/layout';
import React, { useEffect, useState } from 'react';
import Search from 'src/components/search';
import { useParams } from 'react-router-dom';
import { getAllProducts } from 'src/services/products';
import { getAllBands } from 'src/services/bands';
import { getAllCategories } from 'src/services/categories';

const Products = () => {
    const [data, setData] = useState([]);
    const [band, setBand] = useState({})
    const [category, setCategory] = useState({})
    const { bandId, categoryId } = useParams()

    async function initialize() {
        if(bandId) {
            const bands = await getAllBands()
            try {
                const res = await getAllProducts()
                setData(res.filter(el => el.bands.includes(bandId)))
            } catch (error) {
                // setData(products.filter(el => el.bands.includes(bandId)))
                // setData(values,values2);   
            }
            const band = bands.find(el => el.id === bandId)
            setBand(band)
        } else if (categoryId) {
            const categories = await getAllCategories()
            try {
                const res = await getAllProducts()
                setData(res.filter(el => el.category === categoryId))
            } catch (error) {
                // setData(products.filter(el => el.category === categoryId))
                // setData(values,values2);   
            }
            const category = categories.find(el => el.id === categoryId)
            setCategory(category)
        }
    }

    useEffect(() => {
        initialize()
    }, [bandId, categoryId])

    return (
        <Layout>
            <Search 
                pageName={bandId ? band?.name : categoryId ? category?.name : ''} 
                description={bandId && band?.description} 
                image={bandId && band?.image}
            />
            <div className='grid grid-cols-4 gap-4'>
                {data?.map(el => <Card id={el?.id} image={el?.image} name={el?.name} price={el?.price}/>)}
                {!data.length ? <p>Nenhum produto encontrado</p> : null}
            </div>
        </Layout>
    )
}

export default Products