import React from 'react'
import bestSellerData from "./static/bestSellerdata"
import Card from '../productCard/Card'

const BestSellers = () => {
    return (
        <div className='mt-[3rem]'>
            <h1 className='blackheader2  max_mobile:blackheader_mobile max_tab:blackheader_tab '>Best Sellers</h1>
            <hr className='border-[2px] border-solid border-orange w-[15%] m-auto' />

            <div className='flex gap-[2rem] flex-wrap justify-center items-center mt-[4rem]'>

                {bestSellerData.map((item, index) => {
                    return (

                        <Card item={item} key={index} />
                    )
                })}
            </div>


        </div>
    )
}

export default BestSellers