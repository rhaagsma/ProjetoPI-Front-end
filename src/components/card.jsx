import React, { ReactNode } from 'react';

//type LayoutProps = {
//    children: ReactNode;
//}

const Card = ({image, name, price}) => {

    const handleClick = () => {
        alert("é os Guri")
    }

    return (
        <div onClick={handleClick} className='w-full h-96 rounded-md shadow-lg p-4 flex flex-col gap-4 items-center justify-between
        hover:scale-110 transition-all duration-300 bg-white cursor-pointer'>
            <img src={image} alt={name} className='w-full h-3/5 rounded-md bg-slate-200 object-cover'/>
            <h1 className='font-semibold text-xl'>{name}</h1>
            <h3 className='text-3xl h-full flex items-center justify-center font-bold'>R${price}</h3>
        </div>
    )
}

export default Card