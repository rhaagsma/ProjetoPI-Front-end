import Card from 'src/components/card';
import Layout from 'src/components/layout';
import React, { useEffect, useState } from 'react';
import { values } from './fake';

const Category = ({pageName}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // fazer o get ao bd
        setData(values);
    }, [])

    return (
        <Layout>
            <h1 className='text-3xl font-semibold mb-4'>{pageName}</h1>
            <div className='grid grid-cols-4 gap-4'>
                {data.map(el => <Card image={el.image} name={el.name} price={el.price}/>)}
                {/* <Card image= {Gato} name='gatito' price='5'/>
                <Card image= {Gato} name='gatito' price='5'/>
                <Card image= {Gato} name='gatito' price='5'/>
                <Card image= {Gato} name='gatito' price='5'/>
                <Card image= {Gato} name='gatito' price='5'/>
                <Card image= {Gato} name='gatito' price='5'/>
                <Card image= {Gato} name='gatito' price='5'/>
                <Card image= {Gato} name='gatito' price='5'/>
                <Card image= {Gato} name='gatito' price='5'/>
                <Card image= {Gato} name='gatito' price='5'/> */}
            </div>
        </Layout>
    )
}

export default Category