"use client"

import React, { useEffect, useState } from 'react'
import styles from "./Navbar.module.css"
import Link from 'next/link'
import { usePathname } from "next/navigation"
import cart from "../../public/assets/Products/misc/cart.svg"
import Image from 'next/image'
import Authcard from '../auth/Auth'
import { useSession, signOut } from "next-auth/react"
import useSWR from "swr";
import { showErrorToast } from '@/middleware/toastMessage'

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Navbar = () => {

    const router = usePathname();
    const { data: session, status } = useSession()
    const [showauthmodal, setshowauthmodal] = useState(false);

    const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_SHOP_URL}/api/user/viewuserdetails?email=${session?.user?.email}`, fetcher, {
        revalidateOnFocus: false,
    });


    return (
        <>

            {showauthmodal && <Authcard setshowauthmodal={setshowauthmodal} showauthmodal={showauthmodal} />}


            <nav className={`navbar navbar-expand-lg bg-none sticky-top ${styles.mainnav}`}>
                <div className="container-fluid">
                    <Link href="/" passHref className={styles.brand}>


                        ShopCoders

                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavDropdown">
                        <ul className={`navbar-nav ms-auto mb-2 mb-lg-0 ${styles.navbarul}`}>
                            <li className="nav-item active">
                                <Link className={`nav-link ${router === "/" && "active"}`} aria-current="page" href="/" passHref>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/products/tshirts" passHref className={`nav-link ${router === "/products/tshirts" && "active"}`} >Tshirts</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/products/shopstickers" passHref className={`nav-link ${router === "/products/stickers" && "active"}`} >Stickers</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/products/shophoodies" passHref className={`nav-link ${router === "/products/hoodies" && "active"}`} >Hoodies</Link>
                            </li>


                            {status !== "authenticated" ? <button className={`btn ${styles.nav_loginbtn}`} onClick={() => {
                                setshowauthmodal(!showauthmodal)
                                document.body.style.overflow = "hidden"
                                document.body.getElementsByClassName("navbar")[0].style.pointerEvents = "none"

                            }}>Sign up now</button> : <>

                                <Link href="/cart" passHref>
                                    <div className={styles.navbar_cartdiv}>
                                        <Image src={cart} width={30} height={30} alt=" picture of the products" />
                                        <span>{data?.user?.cartproducts.length || 0}</span>
                                    </div>


                                </Link>

                                <button className={`btn ${styles.nav_loginbtn}`} onClick={() => {
                                    signOut()
                                    showErrorToast("You have been logged out successfully")

                                }}>Logout</button>


                            </>}

                        </ul>
                    </div>
                </div >
            </nav >
        </>
    )
}

export default Navbar