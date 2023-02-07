"use client";

import Image from "next/image";
import React from "react";
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

    //* STRIPE PAYMENT

    const stripeCheckout = async () => {
        const stripe = await getStripe();

        const response = await fetch("/api/stripe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify([
                {
                    _id: "63dba5939d4e00c850a62b55",
                    name: "Developer Tshirt",
                    qty: "10",
                    size: "XL",
                    slug: "p5",
                    price: "100",
                    category: "tshirts",
                    desc: "A shirt for the devs, but not by the devs.",
                    img: "https://i.ibb.co/0FsVBt9/developer-removebg-preview.png",
                    __v: 0,
                },
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

    const handleCart = async () => {
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
                        handleCart();
                    }}
                />
            </div>
        </>
    );
};

export default Buttondiv;
