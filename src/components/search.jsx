import React, { ReactNode, useState } from 'react';
import { Input } from './ui/input';

//type LayoutProps = {
//    children: ReactNode;
//}

const Search = ({ pageName, text, setText, description, image }) => {
    return (
        <div className='flex flex-col justift-center gap-4 mb-4'>
            <div className='flex items-center gap-4'>
                {image ? <img src={image} alt={pageName} className='w-full max-w-[27vw] h-auto object-cover rounded' /> : null}
                <div className='flex flex-col gap-2'>
                    <h1 className='text-2xl font-bold'>{pageName}</h1>
                    {description ? <p className='text-sm text-gray-400'>{description}</p> : null}
                </div>
            </div>
            {/* <Input 
                placeholder='Busque produtos aqui' 
                value={text} 
                onChange={(e) => setText(e.target.value)}
            /> */}
        </div>
    )
}

export default Search