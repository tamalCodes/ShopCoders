"use client"

import { bearStore } from '@/global/store';
import React from 'react'
import Card from '../productCard/Card';

const Product = ({ products }) => {
    const selectedBrand = bearStore((state) => state.selectedBrand);

    return (
        <div className='flex flex-wrap gap-[1.5rem]'>
            {products?.map((item, index) => (
                <Card item={item} key={index} />
            ))}


        </div>
    )
}

export default Product