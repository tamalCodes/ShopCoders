"use client"

import React, { useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from "../../styles/Cart.module.css"
import useSWR from "swr";
import { showErrorToast } from '@/middleware/toastMessage';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSession } from "next-auth/react"

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const Cart = () => {

    const router = useRouter();
    const { data: session } = useSession()

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

    const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_SHOP_URL}/api/user/viewuserdetails?email=${session?.user?.email}`, fetcher, {
        revalidateOnFocus: false,
    });


    if (!data) return "I am loading...";
    if (error) return "there is an error";

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


            <div className={styles.cart_mainparent}>
                <div className={styles.cart_parent}>

                    <h1>Here's your cart </h1>


                    <div className={styles.cart_cardparent}>
                        {data?.user && data?.user?.cartproducts.map((product, index) => {
                            return (<>

                                <Link passHref href={`/products/${product._id}`} className={styles.pb_cardmain} key={index}>
                                    <div className={styles.cart_cartcard}>
                                        <Image src={product.img} width={380} height={450} alt="cart product" />

                                        <div className={styles.cart_cardtextdiv}>
                                            <div>
                                                <p>{product.name}</p>
                                                <p>{product.desc}</p>
                                            </div>


                                            <div>
                                                <hr className={styles.cart_cardhr} />
                                                <p className={styles.cart_cardprice}>${product.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>


                            </>)
                        })}
                    </div>




                </div>
            </div>

        </>
    )
}

export default Cart