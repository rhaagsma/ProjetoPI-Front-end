import Layout from 'src/components/layout';
import React, { useEffect, useState } from 'react';
import CartItem from 'src/components/cartItem';
import { Button } from 'src/components/ui/button';
import FooterCart from 'src/components/footerCart';
import { useAuth } from 'src/services/context';
import { useNavigate } from 'react-router-dom';

const Cart = ({pageName}) => {
    const { authenticated } = useAuth();
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    async function initialize() {
        try {
            const exists = localStorage.getItem("productsCart")
            const res = exists ? JSON.parse(exists) : []

            const total = res.reduce((acc, el) => acc + el.price * el.qtd, 0)
            setTotalPrice(total)

            setData(res)
        } catch (error) {
            setData([]);   
        }
    }

    async function deleteItem(id) {
        const exists = localStorage.getItem("productsCart")
        let JSONCart = exists ? JSON.parse(exists) : []
        let newCart = JSONCart.filter(el => el.id !== id)
        localStorage.setItem("productsCart", JSON.stringify(newCart))
        setData(newCart)
    }

    async function finalize() {
        if (authenticated) {
            try {
                alert('Compra finalizada com sucesso')
                localStorage.removeItem("productsCart")
            } catch (error) {
                alert('Erro ao finalizar compra')
            }
        } else {
            navigate('/login')
        }
    }

    useEffect(() => {
        initialize()
    }, [])


    return (
        <Layout>
            <div className='grid grid-cols-1 gap-4'>
                <div className="flex w-full h-12 py-2 px-4 bg-[#2D3344]">    
                    <div className="w-[50%] flex items-center justify-start">
                        <h1 className="text-white">Produto</h1>
                    </div>
                    <div className="w-[12.5%] flex items-center justify-start">
                        <h1 className="text-white">Preço unitário</h1>
                    </div>
                    <div className="w-[12.5%] flex items-center justify-start">
                        <h1 className="text-white">Quantidade</h1>
                    </div>
                    <div className="w-[12.5%] flex items-center justify-start">
                        <h1 className="text-white">Subtotal</h1>
                    </div>
                    <div className="w-[12.5%] flex items-center justify-start">
                        <h1 className="text-white">Excluir</h1>
                    </div>
                </div>

                <div>
                    {data.map(el => (
                        <CartItem 
                            key={el.id}
                            id={el.id} 
                            image={el.image} 
                            name={el.name} 
                            price={el.price} 
                            description={el.description}
                            qtd={el.qtd}
                            deleteItem={() => deleteItem(el.id)}
                        />
                    ))}
                    {!data.length ? <p>Nenhum produto encontrado</p> : null}
                </div>

                <FooterCart totalPrice={totalPrice}/>
                <div className="flex items-center justify-end" onClick={finalize}>
                    <Button className="w-fit">Finalizar compra</Button>
                </div>
            </div>
        </Layout>
    )
}

export default Cart