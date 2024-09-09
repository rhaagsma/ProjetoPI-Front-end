import Card from 'src/components/card';
import Layout from 'src/components/layout';
import React, { useEffect, useState } from 'react';
import { values, values2, bands, products } from './fake';
import { getAllProduct } from 'src/services/http-commons';
import Search from 'src/components/search';
import { useParams } from 'react-router-dom';

const Products = () => {
    const [data, setData] = useState([]);
    const [band, setBand] = useState({})
    const { bandId } = useParams()

    async function initialize() {
        if(bandId) {
            try {
                const res = await getAllProduct()
                // setData(res.filter(el => el.bands.includes(bandId))) <- descomentar para usar a API
                setData(products.filter(el => el.bands.includes(bandId)))
            } catch (error) {
                setData(products.filter(el => el.bands.includes(bandId)))
                // setData(values,values2);   
            }
            const band = bands.find(el => el.id === bandId)
            setBand(band)
        }
    }

    useEffect(() => {
        initialize()
    }, [bandId])

    return (
        <Layout>
            <Search pageName={band?.name} description={band?.description} image={band?.image}/>
            <div className='grid grid-cols-4 gap-4'>
                {data?.map(el => <Card id={el?.id} image={el?.image} name={el?.name} price={el?.price}/>)}
                {!data.length ? <p>Nenhum produto encontrado</p> : null}
            </div>
        </Layout>
    )
}

export default Products