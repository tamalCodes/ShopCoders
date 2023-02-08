"use client";

import Image from "next/image";
import React, { useState } from "react";
import cart from "../../../public/assets/Products/misc/cart.svg";
import styles from "../../../styles/SingleProduct.module.css";
import { showErrorToast, showSuccessToast } from "@/middleware/toastMessage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import getStripe from "../../../services/GetStripe";
import { useSWRConfig } from 'swr'
import { useSession } from "next-auth/react"

const Buttondiv = ({ product }) => {
    const { mutate } = useSWRConfig()
    const { data: session, status } = useSession()
    const [creds, setcreds] = useState({
        name: "",
        email: "",
    });


    //* STRIPE PAYMENT

    const stripeCheckout = async () => {
        const stripe = await getStripe();

        const response = await fetch("/api/stripe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify([
                product.product
            ]),
        });

        if (response.status === 500) {
            return;
        }

        const data = await response.json();
        const { error } = data;
        if (error) {
            return;
        }

        stripe.redirectToCheckout({
            sessionId: data.id,
        });
    };

    //* ADDING TO CART

    const handleCart = async () => {

        const user = await fetch(`${process.env.NEXT_PUBLIC_SHOP_URL}/api/user/viewuserdetails?email=${session?.user?.email}`)
        const userData = await user.json();

        if (userData.user === null) {
            creds.name = session.user.name;
            creds.email = session.user.email;
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_SHOP_URL}/api/user/adduser`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(creds),
                    }
                );

                if (res.status !== 200) {
                    showErrorToast("Something went wrong");

                } else {
                    setcreds({
                        name: "",
                        email: "",
                    })
                }
            } catch (error) {
                showErrorToast(error);
            }
        }



        const cart = await fetch(
            `${process.env.NEXT_PUBLIC_SHOP_URL}/api/user/addtocart`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(product.product),
            }
        );

        if (cart.status !== 200) {
            showErrorToast("Something went wrong");
        } else {
            showSuccessToast("Added to cart");
            mutate(`${process.env.NEXT_PUBLIC_SHOP_URL}/api/user/viewuserdetails?email=${session?.user?.email}`)
        }
    };

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
            <div className={styles.product_btndiv}>
                <button
                    className={`${styles.buybtn} btn`}
                    onClick={() => {
                        if (status !== "authenticated") {
                            showErrorToast("Please login to place order");
                            return;
                        }
                        stripeCheckout();
                    }}
                >
                    Buy now
                </button>

                <Image
                    src={cart}
                    width={32}
                    height={32}
                    alt=" picture of the products"
                    onClick={() => {

                        if (status !== "authenticated") {
                            showErrorToast("Please login to add to cart");
                            return;
                        }
                        handleCart();
                    }}
                />
            </div>
        </>
    );
};

export default Buttondiv;
