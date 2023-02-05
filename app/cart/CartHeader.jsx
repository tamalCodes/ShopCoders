"use client"

import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import { showErrorToast } from '@/middleware/toastMessage';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartHeader = () => {
    const router = useRouter();
    useEffect(() => {

        if (Cookies.get('name')) {
            console.log("i am here");
        } else {
            showErrorToast("Please login to view your cart");


        }
    }, [Cookies.get('name')]);

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

            <h1>Here's your cart</h1>
        </>

    )
}

export default CartHeader