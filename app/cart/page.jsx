
import React from 'react'
import styles from "../../styles/Cart.module.css"
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Cookies from 'js-cookie'
import { useStore } from '@/global/store'
import CartHeader from './CartHeader';

const Cart = async () => {






    return (
        <div className={styles.cart_mainparent}>
            <div className={styles.cart_parent}>

                <CartHeader />


                {/* {useStore.getState().cartLoading && <p>LOADING</p>} */}

            </div>
        </div>
    )
}

export default Cart