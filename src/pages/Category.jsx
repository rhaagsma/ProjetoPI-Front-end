import Card from 'src/components/card';
import Layout from 'src/components/layout';
import React from 'react';
import Gato from 'src/components/assets/gati firte.png';

const Category = ({pageName}) => {
    return (
        <Layout>
            <h1 className='text-3xl font-semibold mb-4'>{pageName}</h1>
            <div className='grid grid-cols-4 gap-4'>
                <Card image= {Gato} name='gatito' price='5'/>
                <Card image= {Gato} name='gatito' price='5'/>
                <Card image= {Gato} name='gatito' price='5'/>
                <Card image= {Gato} name='gatito' price='5'/>
                <Card image= {Gato} name='gatito' price='5'/>
                <Card image= {Gato} name='gatito' price='5'/>
                <Card image= {Gato} name='gatito' price='5'/>
                <Card image= {Gato} name='gatito' price='5'/>
                <Card image= {Gato} name='gatito' price='5'/>
                <Card image= {Gato} name='gatito' price='5'/>
            </div>
        </Layout>
    )
}

export default Category