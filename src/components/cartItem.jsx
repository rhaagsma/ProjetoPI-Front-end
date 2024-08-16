import React, { ReactNode, useState } from 'react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import { Minus, Plus, Trash } from 'lucide-react';
import { Input } from './ui/input';

//type LayoutProps = {
//    children: ReactNode;
//}

const CartItem = ({ id, image, name, description, price }) => {
    const router = useNavigate();
    const [isHover, setIsHover] = useState(false)
    const [qtd, setQtd] = useState(1);

    const handleClick = () => {

    }

    function changeProductQtd(value) {
        if(typeof window !== 'undefined') {
            const exists = localStorage.getItem("productsCart") 
            if (exists) {
                const JSONCart = JSON.parse(exists)
                const FindProduct = JSONCart.findIndex((el) => el.id === id)
                if (FindProduct) {
                    JSONCart[FindProduct].qtd = value
                    localStorage.setItem("productsCart", JSON.stringify(JSONCart))
                }
            }
        }
    
        setQtd(value)
    }
    
    

    return (
        <div className='flex w-full p-4 bg-white'>
            <div className='w-[50%] flex items-center justify-start gap-4'>
                <img className='w-24 h-24 rounded object-cover' src={image} alt={name} />
                <div className='flex flex-col gap-2'>
                    <h1 className='text-lg font-semibold'>{name}</h1>
                    <p className='text-slate-500 text-sm'>{description}</p>
                </div>
            </div>
            <div className='w-[12.5%] flex items-center justify-start'>
                <h1>{price}</h1>
            </div>
            <div className='w-[12.5%] flex items-center justify-start'>
                <div className='flex w-full items-center justify-between pr-12'>
                    <Input type="number" value={qtd} min={1} onChange={(e) => changeProductQtd(e.target.value)}/>
                </div>
            </div>
            <div className='w-[12.5%] flex items-center justify-start'>
                <h1>{price}</h1> {/* falta multiplicar pela quantidade */}
            </div>
            <div className='w-[12.5%] flex items-center justify-start'>
                <Button variant="ghost" className='' Excluir>
                    <Trash size={20} className='text-red-600'></Trash>
                </Button>
            </div>
        </div>

    )
}

export default CartItem