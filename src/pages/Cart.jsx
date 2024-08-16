import Layout from 'src/components/layout';
import React, { useEffect, useState } from 'react';
import { values } from './fake';
import CartItem from 'src/components/cartItem';
import FooterCart from 'src/components/footerCart';
import { Button } from 'src/components/ui/button';

const Cart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(savedCart);
    }, []);

    const [cartItems, setCartItems] = useState([])

    function getCartItems() {
        if(typeof window !== 'undefined') {
            const exists = localStorage.getItem("productsCart") 
            if (exists) {
                setCartItems(JSON.parse(exists))
            }
        }
    }
    
    useEffect(() => {
        getCartItems()
    }, [])


    return (
        <Layout>
            <div className='grid grid-cols-1 gap-4'>
                <div className='flex w-full h-12 py-2 px-4 bg-[#2D3244]'>
                    <div className='w-[50%] flex items-center justify-start'>
                        <h1 className='text-white'>Produto</h1>
                    </div>
                    <div className='w-[12.5%] flex items-center justify-start'>
                        <h1 className='text-white'>Preço Unitário</h1>
                    </div>
                    <div className='w-[12.5%] flex items-center justify-start'>
                        <h1 className='text-white'>Quantidade</h1>
                    </div>
                    <div className='w-[12.5%] flex items-center justify-start'>
                        <h1 className='text-white'>Subtotal</h1>
                    </div>
                    <div className='w-[12.5%] flex items-center justify-start'>
                        <h1 className='text-white'>Excluir</h1>
                    </div>
                </div>
                <div>
                    {cartItems.map(el =>
                        <CartItem
                            id={el.id}
                            image={el.image}
                            name={el.name}
                            price={el.price}
                            description={el.description}
                        />)}
                    {!cartItems.length ? <p>Nenhum produto adicionado ao carrinho</p> : null}
                </div>
                <FooterCart totalPrice={50}/> {/* falta incluir o preço total */}
                <div className='flex items-center justify-end'>
                    <Button className='w-fit'>Finalizar compra</Button>
                </div>
            </div>
        </Layout>
    )
}

export default Cart