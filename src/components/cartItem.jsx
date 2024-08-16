import React, { useState } from 'react';
import { Button } from './ui/button';
import {useNavigate} from 'react-router-dom';
import { Trash } from 'lucide-react';
import { Input } from './ui/input';

//type LayoutProps = {
//    children: ReactNode;
//}

const CartItem = ({id, image, name, price, description, qtd, deleteItem}) => {
    return (
        <div className="flex w-full p-4 bg-white">    
            <div className="w-[50%] flex items-center justify-start gap-4">
                <img className="w-24 h-24 rounded object-cover" src={image} alt={name}/>
                <div className="flex flex-col gap-2">
                    <h1 className="text-lg font-semibold">{name}</h1>
                    <p className="text-slate-500 text-sm">{description}</p>
                </div>
            </div>
            <div className="w-[12.5%] flex items-center justify-start">
                <h1>R$ {price}</h1>
            </div>
            <div className="w-[12.5%] flex items-center justify-start">
                <div className='flex w-full items-center justify-between pr-12'>
                    <Input type="number" value={1} min={1}/>
                </div>
            </div>
            <div className="w-[12.5%] flex items-center justify-start">
                <h1>R$ {price*qtd}</h1>
            </div>
            <div className="w-[12.5%] flex items-center justify-start">
                <Button variant="ghost" onClick={deleteItem}>
                    <Trash size={20} className='text-red-600'/>
                </Button>
            </div>
        </div>
    )
}

export default CartItem