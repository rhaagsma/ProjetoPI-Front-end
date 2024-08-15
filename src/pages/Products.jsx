import Card from 'src/components/card';
import Layout from 'src/components/layout';
import React, { useEffect, useState } from 'react';
import { values, values2 } from './fake';
import { getAllProduct } from 'src/services/http-commons';
import Search from 'src/components/search';

const Products = ({pageName}) => {
    const [data, setData] = useState([]);

    async function initialize() {
        try {
            const res = await getAllProduct()
            setData(res)
        } catch (error) {
            setData(values,values2);   
        }
    }

    useEffect(() => {
        initialize()
    }, [data])

    return (
        <Layout>
            <Search pageName="Bandas"/>
            <div className='grid grid-cols-4 gap-4'>
                {data.map(el => <Card id={el.id} image={el.image} name={el.name} price={el.price}/>)}
                {!data.length ? <p>Nenhum produto encontrado</p> : null}
            </div>
        </Layout>
    )
}

export default Products