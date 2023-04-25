"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Cart.module.css";
import useSWR from "swr";
import { showErrorToast, showSuccessToast } from "@/middleware/toastMessage";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSession } from "next-auth/react";
import getStripe from "../../services/GetStripe";
import deleteicon from "../../public/assets/cart/deleteicon.png";
import { useSWRConfig } from "swr";
import { AiOutlineMinusSquare } from "react-icons/ai";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const Cart = () => {
    const router = useRouter();
    const { mutate } = useSWRConfig();

    const { status } = useSession({
        required: true,
        onUnauthenticated() {
            showErrorToast("Please login to view your cart");
            setTimeout(() => {
                router.push("/");
            }, 2000);
        },
    });

    const { data, error } = useSWR(
        `${process.env.NEXT_PUBLIC_SHOP_URL}/api/user/viewuserdetails`,
        fetcher,
        {
            revalidateOnFocus: false,
        }
    );

    if (!data)
        return (
            <div className={styles.cart_emptydiv}>
                <h1> Your cart is loading </h1>
            </div>
        );
    if (error) return "there is an error";

    //* Stripe checkout
    const stripeCheckout = async () => {
        const stripe = await getStripe();

        const response = await fetch("/api/stripecart", {
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
            mutate(`${process.env.NEXT_PUBLIC_SHOP_URL}/api/user/viewuserdetails`);
        }
    };

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
            mutate(`${process.env.NEXT_PUBLIC_SHOP_URL}/api/user/viewuserdetails`);
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

            <div className="px-2" >
                <div >
                    {data?.user?.cartproducts.length > 0 ? (
                        <>
                            {/* <h1 className=" font-poppins text-[2rem] mt-[3rem] " >Here's your cart </h1> */}

                            <div className="flex flex-wrap justify-start gap-[3rem] items-center">
                                {data?.user?.cartproducts.map((product, index) => {

                                    return (
                                        <>
                                            <div className={`${styles.product_main} bg-white  rounded-[8px] text-black font-poppins w-[30rem]  mt-[3rem]  `} >
                                                <div className='flex flex-col p-[2.5rem] ' >
                                                    <Image src={product.productImage} width={240} height={240} alt="detailed picture of the tshirt" />

                                                    <div >
                                                        <h1 className='text-[1.8rem]  '>{product.productName}</h1>

                                                        {/* <p className='mt-[1rem] text-[1rem] '>{product.productDescription}</p> */}

                                                        <p className='mt-[1.8rem] text-[1.5rem] font-poppins' >Unit price:{" "}
                                                            <span className="text-orange font-[600] font-mont">₹ {product.productPrice}</span>
                                                        </p>

                                                        <div className={styles.cart_qtydiv}>
                                                            <p>Quantity:  <span className="text-orange font-[600]">{product.purchasedQty}</span> </p>
                                                            {product.purchasedQty > 1 && (
                                                                <AiOutlineMinusSquare
                                                                    className={styles.qtybtn}
                                                                    onClick={() => {
                                                                        reduceCart(product);
                                                                    }}
                                                                />
                                                            )}
                                                        </div>

                                                        <div>
                                                            <hr className={styles.cart_cardhr} />
                                                            <div className={styles.cart_pricediv}>


                                                                <p className=' text-[2rem] font-mont text-orange font-[600] ' > ₹ {product.totalPrice}</p>

                                                                <Image
                                                                    src={deleteicon}
                                                                    style={{ backgroundColor: "transparent" }}
                                                                    onClick={() => {
                                                                        removeFromCart(product);
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>



                                                    </div>
                                                </div>
                                            </div>
                                            {/* </Link> */}
                                        </>
                                    );
                                })}
                                <div className={`${styles.product_main} border-orange border-solid border-[3px]  rounded-[8px] text-black font-poppins w-[30rem]  mt-[3rem] h-[20rem]  `} >
                                    <div className='flex flex-col p-[2.5rem] ' >


                                        <div >
                                            <h1 className='text-[1.5rem] text-center '>Thanks for shopping with us</h1>



                                            <h1 className="font-poppins text-[600] text-[1.5rem] text-center mt-[2rem] ">
                                                {" "}
                                                Your cart total is<br />

                                                <span className="text-orange font-mont text-[600] font-[1.8rem] ">
                                                    ₹{" "}
                                                    {data?.user &&
                                                        data?.user?.cartproducts.reduce((acc, curr) => {
                                                            return acc + curr.totalPrice;
                                                        }, 0)}
                                                </span>

                                            </h1>

                                            <div className="flex mt-[2rem]" >
                                                <button
                                                    className="bg-orange px-[30px] py-3 font-poppins text-[1.2rem] rounded-md text-white mx-auto"
                                                    onClick={() => {
                                                        if (status !== "authenticated") {
                                                            showErrorToast("Please login to place order");
                                                            return;
                                                        }
                                                        stripeCheckout();
                                                    }}
                                                >
                                                    Place order
                                                </button>
                                            </div>



                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <br />

                            <hr />

                            {/**/}


                        </>
                    ) : (
                        <div className={styles.cart_emptydiv}>
                            <h1 className="text-[600] font-poppins text-[2rem] "> Your cart is empty </h1>
                            <Link href={"/keyboards"} passHref>
                                <button
                                    className="bg-orange px-[30px] py-3 font-poppins text-[1.2rem] rounded-md text-white mx-auto mt-[2rem]"

                                >
                                    Continue shopping
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Cart;
