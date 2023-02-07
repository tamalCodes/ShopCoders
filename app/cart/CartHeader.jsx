"use client"

import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import { showErrorToast } from '@/middleware/toastMessage';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSession } from "next-auth/react"

const CartHeader = () => {
    const router = useRouter();
    /*  useEffect(() => {
 
         if (Cookies.get('user_email')) {
             console.log(Cookies.get('user_email'));
         } else {
             showErrorToast("Please login to view your cart");
             router.push('/');
 
         }
     }, [Cookies.get('user_email')]); */

    const { status } = useSession({
        required: true,
        onUnauthenticated() {
            showErrorToast("Please login to view your cart");
            setTimeout(() => {
                router.push('/');
            }
                , 2000);
        },
    })

    return (

        <>
            <ToastContainer
                position="top-right"
                autoClose={800}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                pauseOnHover={false}
                closeButton={false}
                draggable={false}
                limit={1}
            />

            <h1>Here's your cart </h1>
        </>

    )
}

export default CartHeader