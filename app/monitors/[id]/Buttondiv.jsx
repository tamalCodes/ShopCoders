"use client";

import Image from "next/image";
import React, { useState } from "react";
import cart from "../../../public/assets/Products/misc/cart.svg";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
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
    const [purchasedQty, setpurchasedQty] = useState(1);


    //* STRIPE PAYMENT

    const stripeCheckout = async () => {
        console.log(product);

        if (purchasedQty > 0) {
            product.totalPrice = product.productPrice * purchasedQty;
            product.purchasedQty = purchasedQty;
        } else {
            product.totalPrice = product.productPrice;
            product.purchasedQty = 1;
        }

        const stripe = await getStripe();

        const response = await fetch("/api/stripe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify([
                product
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


        const user = await fetch(`${process.env.NEXT_PUBLIC_SHOP_URL}/api/user/viewuserdetails`)
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

        if (purchasedQty > 0) {
            product.totalPrice = product.productPrice * purchasedQty;
            product.purchasedQty = purchasedQty;
        } else {
            product.totalPrice = product.productPrice;
            product.purchasedQty = 1;
        }

        console.log(product);


        const cart = await fetch(
            `${process.env.NEXT_PUBLIC_SHOP_URL}/api/user/addtocart`,
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
            showSuccessToast("Added to cart");
            mutate(`${process.env.NEXT_PUBLIC_SHOP_URL}/api/user/viewuserdetails`)
        }
    };

    const addQty = () => {

        setpurchasedQty(currentQty => {
            return currentQty + 1;
        })

        if (purchasedQty >= product.productQty) {
            setpurchasedQty(product.productQty);
        }
    };

    const removeQty = () => {
        setpurchasedQty(currentQty => {
            return currentQty - 1;
        })
        if (purchasedQty <= 0) {
            setpurchasedQty(0);
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

            <div className="flex items-center font-poppins text-[1.3rem] font-[600] select-none gap-[0.7rem] mt-[2rem] ">

                <AiOutlinePlusSquare onClick={addQty} className="w-[30px] h-[30px] bg-transparent cursor-pointer " />

                <p>{purchasedQty}</p>

                <AiOutlineMinusSquare onClick={removeQty} className="w-[30px] h-[30px] bg-transparent cursor-pointer " />


            </div>
            <div className="mt-[1rem] flex gap-[2rem]" >
                <button
                    className={"w-[30%] h-[3rem] bg-orange text-white font-poppins font-[600] text-[1rem] tracking-[1px] rounded-md"}
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

                <div className="flex items-center gap-[1rem] border-orange border-[3px] border-solid px-[1rem] font-poppins font-[600] text-[1rem] tracking-[1px] rounded-md cursor-pointer "
                    onClick={() => {

                        if (status !== "authenticated") {
                            showErrorToast("Please login to add to cart");
                            return;
                        }
                        handleCart();
                    }}
                >
                    <Image
                        src={cart}
                        width={28}
                        height={28}
                        alt=" picture of the products"
                    />
                    <p>Add to cart</p>
                </div>
            </div>
        </>
    );
};

export default Buttondiv;
