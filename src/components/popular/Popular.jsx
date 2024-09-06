import Card from 'src/components/card';
import Layout from 'src/components/layout';
import React, { useEffect, useState } from 'react';
import { getAllProduct } from 'src/services/http-commons';
import Search from 'src/components/search';
import "./Popular.css"
const Popular = () => {
    const [data, setData] = useState([]);

    async function initialize() {
        try {
            const res = await getAllProduct()
            setData(res)
        } catch (error) {
            console.log(error) 
        }
    }

    useEffect(() => {
        initialize()
    }, [])

    return (
        <div className="popular">
            <h1>Populares</h1>
            <hr />
            <Layout>
                <div className='grid grid-cols-4 gap-4'>
                    {data.map(el => <Card id={el.id} image={el.image} name={el.name} price={el.price}/>)}
                    {!data.length ? <p>Nenhum produto encontrado</p> : null}
                </div>
            </Layout>
            </div>
    )
}

export default Popular