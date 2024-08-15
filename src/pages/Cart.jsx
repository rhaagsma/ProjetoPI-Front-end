import Card from 'src/components/card';
import Layout from 'src/components/layout';
import React, { useEffect, useState } from 'react';
import { values } from './fake';

const Cart = ({pageName}) => {
    const [data, setData] = useState([]);

    async function initialize() {
        try {
            const res = await //vai precisar de uma função de get para os itens do carrinho
            setData(res)
        } catch (error) {
            setData(values);   
        }
    }

    useEffect(() => {
        initialize()
    }, [data])


const Cart = () => {
    return (
        <div className='grid grid-cols-4 gap-4'>
                {data.map(el => <Card id={el.id} image={el.image} name={el.name} price={el.price}/>)}
                {!data.length ? <p>Nenhum produto encontrado</p> : null}
        </div>
    )
}
}

export default Cart