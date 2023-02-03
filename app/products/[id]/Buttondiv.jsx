"use client"

import Image from 'next/image';
import React from 'react'
import cart from "../../../public/assets/Products/misc/cart.svg"
import styles from "./SingleProduct.module.css";

const Buttondiv = () => {
    return (
        <>
            <div className={styles.product_btndiv}>
                <button className={`${styles.buybtn} btn`}>Buy now</button>


                <Image src={cart} width={32} height={32} alt=" picture of the products" />


            </div>
        </>
    )
}

export default Buttondiv