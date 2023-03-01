"use client"

import React, { useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from "../../styles/Cart.module.css"
import useSWR from "swr";
import { showErrorToast, showSuccessToast } from '@/middleware/toastMessage';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSession } from "next-auth/react"
import getStripe from "../../services/GetStripe";
import deleteicon from "../../public/assets/cart/deleteicon.png"
import { useSWRConfig } from 'swr'
import { AiOutlineMinusSquare } from "react-icons/ai";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const Cart = () => {

    const router = useRouter();
    const { mutate } = useSWRConfig()

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

    const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_SHOP_URL}/api/user/viewuserdetails`, fetcher, {
        revalidateOnFocus: false,
    });


    if (!data) return (<div className={styles.cart_emptydiv}>

        <h1> Your cart is loading </h1>
    </div>)
    if (error) return "there is an error";

    //* Stripe checkout
    const stripeCheckout = async () => {
        const stripe = await getStripe();

        const response = await fetch("/api/stripe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data?.user?.cartproducts),
        });

        if (response.status === 500) {
            return;
        }

        const stripeData = await response.json();
        const { error } = stripeData;
        if (error) {
            return;
        }

        stripe.redirectToCheckout({
            sessionId: stripeData.id,
        });
    };

    //* Remove from cart
    const removeFromCart = async (product) => {

        const cart = await fetch(
            `${process.env.NEXT_PUBLIC_SHOP_URL}/api/user/removefromcart`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(product),
            }
        );

        console.log(cart.status);

        if (cart.status !== 200) {
            showErrorToast("Something went wrong");
        } else {
            showSuccessToast("Removed from cart");
            mutate(`${process.env.NEXT_PUBLIC_SHOP_URL}/api/user/viewuserdetails`)
        }

    }

    //* Reduce cart
    const reduceCart = async (product) => {
        const cart = await fetch(
            `${process.env.NEXT_PUBLIC_SHOP_URL}/api/user/reducecartitems`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(product),
            }
        );

        if (cart.status !== 200) {
            showErrorToast("Something went wrong");
        } else {
            mutate(`${process.env.NEXT_PUBLIC_SHOP_URL}/api/user/viewuserdetails`)
        }
    }

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

                    {data?.user?.cartproducts.length > 0 ? <>

                        <h1>Here's your cart </h1>


                        <div className={styles.cart_cardparent}>
                            {data?.user?.cartproducts.map((product, index) => {
                                return (<>

                                    {/* <Link passHref href={`/products/${product._id}`} className={styles.pb_cardmain} key={index}> */}
                                    <div className={styles.cart_cartcard}>
                                        <Image src={product.img} width={380} height={450} alt="cart product" />

                                        <div className={styles.cart_cardtextdiv}>
                                            <div>
                                                <p>{product.name}</p>
                                                <p>{product.desc}</p>
                                                <br />
                                                <div className={styles.cart_qtydiv}>
                                                    <p>Quantity : {product.purchasedQty}</p>
                                                    {product.purchasedQty > 1 && <AiOutlineMinusSquare className={styles.qtybtn} onClick={() => {
                                                        reduceCart(product)
                                                    }} />}
                                                </div>
                                            </div>


                                            <div>
                                                <hr className={styles.cart_cardhr} />
                                                <div className={styles.cart_pricediv}>
                                                    <p className={styles.cart_cardprice}>₹ {product.totalPrice}</p>
                                                    <Image src={deleteicon} style={{ backgroundColor: "transparent" }} onClick={() => {
                                                        removeFromCart(product)
                                                    }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*   </Link> */}


                                </>)
                            })}
                        </div>
                        <br />
                        <br />

                        <hr />

                        <h1 style={{ fontSize: "40px" }} className={styles.carttotal}> Your cart total is : <span style={{ color: "#007c73", fontWeight: "600" }}>
                            ₹ {

                                data?.user && data?.user?.cartproducts.reduce((acc, curr) => {
                                    return acc + curr.totalPrice

                                }, 0)

                            }</span> </h1>




                        <div className={styles.cart_placeorderbtndiv}>
                            <button className={`btn ${styles.cart_placeorderbtn}`} onClick={() => {
                                if (status !== "authenticated") {
                                    showErrorToast("Please login to place order");
                                    return;
                                }
                                stripeCheckout();
                            }}>Place order</button>
                        </div>
                    </> : <div className={styles.cart_emptydiv}>

                        <h1> Your cart is empty </h1>
                        <Link href={"/products/tshirts"} passHref>
                            <button className={`btn ${styles.cart_placeorderbtn}`}>Add items to cart</button>
                        </Link>
                    </div>}


                </div>
            </div>

        </>
    )
}

export default Cart