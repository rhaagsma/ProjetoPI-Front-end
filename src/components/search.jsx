import React, { ReactNode, useState } from 'react';
import { Input } from './ui/input';

//type LayoutProps = {
//    children: ReactNode;
//}

const Search = ({ pageName, text, setText }) => {
    return (
        <div className='flex items-center gap-4 mb-4'>
            <h1 className='text-3xl font-semibold'>{pageName}</h1>
            {/* <Input 
                placeholder='Busque produtos aqui' 
                value={text} 
                onChange={(e) => setText(e.target.value)}
            /> */}
        </div>
    )
}

export default Search