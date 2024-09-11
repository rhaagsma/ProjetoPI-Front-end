import Layout from 'src/components/layout';
import React, { useEffect, useState } from 'react';
import CartItem from 'src/components/cartItem';
import { Button } from 'src/components/ui/button';
import FooterCart from 'src/components/footerCart';
import { useAuth } from 'src/services/context';
import { useNavigate } from 'react-router-dom';
import { finalizeC } from 'src/services/cart';
import { getUser } from 'src/services/users';
import { getUserId } from 'src/services/auth';
import { getAllAddresses } from 'src/services/address';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from 'src/components/ui/select';
import { useToast } from 'src/hooks/use-toast';

const Cart = ({pageName}) => {
    const { authenticated } = useAuth();
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [addresses, setAddresses] = useState([])
    const [selectedAddress, setSelectedAddress] = useState(null)
    const {toast} = useToast();

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

        if (authenticated) {
            try {
                const userId = getUserId()
                const res = await getAllAddresses(userId)
                setAddresses(res)
                if (res.length) setSelectedAddress(res[0]?.id)
            } catch (error) {
                console.log(error)
            }
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
                const userId = getUserId()
                const toSend = {
                    user: userId,
                    address: selectedAddress,
                    totalPrice: parseFloat(totalPrice),
                    date: new Date(),
                    items: data.map(el => ({productId: el.id, quantity: el.qtd}))
                }
                const res = await finalizeC(toSend)
                if(!res.error) {
                    toast({
                        title: 'Compra finalizada',
                        description: 'Sua compra foi finalizada com sucesso',
                        variant: 'success'
                    })
                    setData([])
                    setTotalPrice(0)
                    localStorage.removeItem("productsCart")
                } else {
                    toast({
                        title: 'Erro',
                        description: 'Erro ao finalizar compra',
                        variant: 'destructive'
                    })
                }
            } catch (error) {
                toast({
                    title: 'Erro',
                    description: 'Erro ao finalizar compra',
                    variant: 'destructive'
                })
            }
        } else {
            navigate('/login')
        }
    }

    useEffect(() => {
        initialize()
    }, [authenticated])


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
                            setProduct={(qtd) => {
                                const exists = localStorage.getItem("productsCart")
                                let JSONCart = exists ? JSON.parse(exists) : []
                                let newCart = JSONCart.map(el2 => el2.id === el.id ? {...el2, qtd: qtd} : el2)
                                localStorage.setItem("productsCart", JSON.stringify(newCart))
                                setData(newCart)

                                const total = newCart.reduce((acc, el) => acc + el.price * el.qtd, 0)
                                setTotalPrice(total)
                            }}
                        />
                    ))}
                    {!data.length ? <p>Nenhum produto encontrado</p> : null}
                </div>

                <FooterCart totalPrice={totalPrice}/>
                <div className="flex items-end justify-end gap-4">
                    {authenticated ? (
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-xl font-semibold'>Endereço de entrega</h1>
                            <Select value={selectedAddress} onValueChange={e => setSelectedAddress(e)}>
                                <SelectTrigger className="w-96">
                                    <SelectValue placeholder="Selecione o endereço de entrega" />
                                </SelectTrigger>
                                <SelectContent className="w-full">
                                    {addresses.map(el => (
                                        <SelectItem value={el.id} className="w-full">
                                            {el.name}: {el.street}, {el.number} {el.neighborhood ? ' - ' + el.neighborhood : ''} - {el.city}/{el.state}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    ) : null}
                    <Button className="w-fit" onClick={finalize}>Finalizar compra</Button>
                </div>
            </div>
        </Layout>
    )
}

export default Cart