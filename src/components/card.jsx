import React, { ReactNode, useState } from 'react';
import { Button } from './ui/button';
import {useNavigate} from 'react-router-dom';

//type LayoutProps = {
//    children: ReactNode;
//}

const Card = ({id, image, name, price}) => {
    const router = useNavigate();
    const [isHover, setIsHover] = useState(false)

    const handleClick = () => {
        router(`/product/${id}`)
    }

    return (
        <div 
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className='w-full h-[27rem] rounded-md shadow-lg p-4 flex flex-col gap-4 items-center justify-between
            hover:scale-110 transition-all duration-300 bg-white'
        >
            <img src={image} alt={name} className='w-full min-h-[70%] rounded-md bg-slate-200 object-cover'/>
            <h1 className='font-semibold text-xl'>{name}</h1>
            <h3 className='text-3xl h-full flex items-center justify-center font-bold'>R${price}</h3>
            { isHover ? (
                <div className='absolute p-4 bottom-0 w-full'>
                    <Button className='w-full cursor-pointer' onClick={handleClick} >Ver produto</Button>
                </div>
            )
             : null }
        </div>
    )
}

export default Card