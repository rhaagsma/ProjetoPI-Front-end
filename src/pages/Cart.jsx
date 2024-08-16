import Card from 'src/components/card';
import Layout from 'src/components/layout';
import React, { useEffect, useState } from 'react';
import { values } from './fake';
import CartItem from 'src/components/cartItem';

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


    return (
        <Layout>
        <div className='grid grid-cols-1 gap-4'>
                {data.map(el => <CartItem id={el.id} image={el.image} name={el.name} price={el.price}/>)}
                {!data.length ? <p>Nenhum produto encontrado</p> : null}
        </div>
        </Layout>
    )
}

export default Cart