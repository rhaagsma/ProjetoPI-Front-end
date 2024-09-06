import React, { useEffect, useState } from 'react';
import Layout from 'src/components/layout';
import { useParams } from 'react-router-dom';
import { getProduct } from 'src/services/http-commons';
import { Input } from 'src/components/ui/input';
import { Button } from 'src/components/ui/button';
import { values } from './fake';
import { Loader2 } from 'lucide-react';

const Product = ({ id, name }) => {
    const [qtd, setQtd] = useState(1)
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false)
    const { productId } = useParams()

    async function getOneProduct() {
        try {
            if (productId){
                const res = await getProduct(productId)
                setProduct(res)
            }
        } catch (error) {
            setProduct(values.filter(el => el.id === productId)[0])
        }
    }
      
    useEffect(() => {
        getOneProduct()
    }, [productId])

    function buy() {
        setLoading(true)
        const toSave = {
            id: product.id,
            name: product.name,
            description: product.description,
            image: product.image,
            qtd: qtd,
            price: product.price
        }
    
        const exists = localStorage.getItem("productsCart")
        let JSONCart = exists ? JSON.parse(exists) : []
    
        localStorage.setItem("productsCart", JSON.stringify([...JSONCart, toSave]))

        setTimeout(() => {
            setLoading(false)
            alert('Produto adicionado ao carrinho')
        }, 2000)
    }
    const exists = localStorage.getItem("productsCart");
    let JSONCart = exists ? JSON.parse(exists) : [];


    return (
        <Layout>
            <div id="na mesma linha" className='flex gap-4 mb-10'>
                <div id="div da imagem" className='w-[calc(50%-0.5rem)] flex flex-col gap-4 items-center' >
                    <img className='w-[80%] h-[80%] rounded bg-slate-200 object-cover object-top' src={product.image} alt={product.name} />
                    <div className='flex'>
                        <img className='w-12 h-12 rounded bg-slate-200 border-2 border-[#21242D]' src={product.image} alt={product.name} />
                    </div>
                </div>
                <div id="div do preco" className='w-[calc(50%-0.5rem)] flex flex-col gap-4'>
                    <h1 className='text-3xl font-semibold'>{product.name}</h1>
                    <div className='flex flex-col p-4 rounded shadow-lg bg-white gap-4'>
                        <div className='flex flex-col gap-px'>
                            <h3 className='text-xl text-green-700 font-semibold'>R${product.price}</h3>
                            <p className='text-slate-500'>Ou 10x de R${product.price / 10}</p>
                        </div>
                        <div className='w-full flex gap-4'>
                            <Input
                                type='number'
                                placeholder='Quantidade'
                                min={1}
                                value={qtd}
                                onChange={(e) => setQtd(e.target.value)}
                                className='w-[30%]' />
                            <Button className='w-[70%] flex gap-4' onClick={buy} disabled={loading}>
                                {loading ? <Loader2 className='h-4 w-4 animate-spin' /> : null}
                                Comprar
                            </Button>
                        </div>
                    </div>
                    <h2 className='font-semibold text-xl'>Descrição</h2>
                    <p>{product.description}</p>
                </div>
            </div>
        </Layout>
    )
}

export default Product