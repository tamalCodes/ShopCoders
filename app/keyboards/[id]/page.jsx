import React from 'react'
import ProductCardLandscape from '@/components/productcard_landscape/ProductCardLandscape';



const Page = async ({ params: { id } }) => {

    return (
        <>

            <ProductCardLandscape id={id} />

        </>
    )
}

export default Page;