import Link from 'next/link'
import React from 'react'
import styles from "./Card.module.css"
import Image from 'next/image'
import bag from "../../public/assets/navbar/bag.svg"

const Card = ({ item }) => {
    return (
        <Link href={`${item.productType}/${item._id}`} passHref >

            <div className={`${styles.product_main} bg-white p-[20px] w-[18rem] rounded-[8px] text-black font-poppins h-[26rem] `}>
                <Image src={item.productImage} className='bg-white rounded-[8px]' width={210} height={210} />

                <div className='flex flex-col justify-between'>
                    <h1 className=' text-[1.3rem] '>{item.productName}</h1>

                    <div className='mt-[2rem]'>
                        <p>⭐⭐⭐⭐⭐</p>


                        <div className='mt-[1rem] flex items-center justify-between '>
                            <p className='font-[600] font-mont text-[1.2rem]'>₹{" "} {item.productPrice} </p>
                            <Image src={bag} className='w-[1.5rem]' />
                        </div>
                    </div>
                </div>
            </div>


        </Link>
    )
}

export default Card