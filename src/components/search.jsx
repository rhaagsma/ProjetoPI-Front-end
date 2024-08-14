import React, { ReactNode } from 'react';

//type LayoutProps = {
//    children: ReactNode;
//}

const Search = ({ pageName }) => {
    return (
        <div className='my-24 w-full flex items-center justify-center'>
            <h1 className='text-3xl font-semibold mb-4'>{pageName}</h1>
            
        </div>
    )
}

export default Search