import React, { ReactNode } from 'react';

//type LayoutProps = {
//    children: ReactNode;
//}

const Layout = ({ children }) => {
    return (
        <div className='my-24 w-full flex items-center justify-center'>
            <div className='max-w-7xl w-full'>
                {children}
            </div>
        </div>
    )
}

export default Layout