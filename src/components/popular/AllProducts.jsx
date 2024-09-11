import Card from 'src/components/card';
import Layout from 'src/components/layout';
import React, { useEffect, useState } from 'react';
import Search from 'src/components/search';
import { v4 as uuidv4 } from 'uuid';
import { products } from '../../pages/fake';
import { getAllProduct } from 'src/services/http-commons';

const AllProducts = () => {
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
        <Layout>
            <div className="flex flex-col items-center">
                <h1 className='text-3xl font-semibold'>Produtos</h1>

                <hr className='h-2 w-36 bg-[#21242D] mt-2 rounded'/>

                <div className="w-full mt-4">
                    <div className='grid grid-cols-4 gap-4'>
                        {data.map(el => <Card id={el.id} image={el.image} name={el.name} price={el.price}/>)}
                        {!data.length ? <p>Nenhum produto encontrado</p> : null}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AllProducts