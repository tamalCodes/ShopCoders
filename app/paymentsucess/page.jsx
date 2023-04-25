"use client";

import Image from "next/image";
import React, { useState } from "react";
import styles from "../../styles/Payment.module.css";
import signupbanner from "../../public/assets/auth/authbanner.png";
import { useSession } from "next-auth/react"
import { useSWRConfig } from 'swr'
import { useRouter } from 'next/navigation'

const Authcard = () => {
    const { mutate } = useSWRConfig()
    const { data: session, status } = useSession()
    const router = useRouter()


    const handleResetCart = async () => {

        const resetusercart = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/user/resetcart`)

        if (resetusercart.status === 200) {
            mutate(`${process.env.NEXT_PUBLIC_URL}/api/user/viewuserdetails`)
        }

        router.push("/")

    };

    return (
        <>


            <div className={styles.authparent}>
                <div className={styles.authsub}>

                    <div className={`${styles.auth_leftdiv} flex flex-col items-center justify-center`}>

                        <Image src={signupbanner} height={500} width={200} />
                    </div>


                    <div className={styles.auth_rightdiv} id="auth-rightdiv">
                        <p>Hi {session?.user?.name.split(" ")[0]}, <br /> your order has been made 🎉 <br /> <br /> You can track it in our <span onClick={() => {
                            handleResetCart();
                        }}>orders page</span>. Keep shopping ! </p>
                        <button
                            className={`btn ${styles.signup_btn}`}
                            onClick={() => {
                                handleResetCart();
                            }}
                        >
                            Back to shopping
                        </button>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Authcard;
