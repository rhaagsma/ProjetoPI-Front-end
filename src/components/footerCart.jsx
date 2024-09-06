import React from 'react';

const FooterCart = ({totalPrice}) => {
    return (
        <div className="flex w-full h-12 p-4 bg-[#2D3344] items-center justify-end">
            <h1 className="text-white">TOTAL: R$ {totalPrice} </h1>
        </div>
    )
}

export default FooterCart