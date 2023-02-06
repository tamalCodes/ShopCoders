"use client"

import React, { useEffect, useState } from 'react'
import styles from "./Navbar.module.css"
import Link from 'next/link'
import { usePathname } from "next/navigation"
import cart from "../../public/assets/Products/misc/cart.svg"
import Image from 'next/image'
import { useStore } from '@/global/store'
import Authcard from '../auth/Auth'
import Cookies from 'js-cookie'

const Navbar = () => {

    const router = usePathname();
    const { cartArray } = useStore();

    const [showauthmodal, setshowauthmodal] = useState(false);
    const [isLoggedin, setisLoggedin] = useState(false);

    const fetchUserCart = async () => {
        console.log("fetching user cart");
        const cartdetails = await fetch(`${process.env.NEXT_PUBLIC_SHOP_URL}/api/user/viewuserdetails?email=${Cookies.get("user_email")}`).then(res => res.json());
        console.log(cartdetails);
        useStore.setState({ cartArray: cartdetails.user.cartproducts })
    }

    useEffect(() => {
        if (Cookies.get("user_email")) {
            console.log(Cookies.get("user_email"));
            setisLoggedin(true);
            fetchUserCart();
        } else {
            setisLoggedin(false);
        }
    }, [router === "/", Cookies.get("user_email")]);



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


                            {!isLoggedin ? <button className={`btn ${styles.nav_loginbtn}`} onClick={() => {
                                setshowauthmodal(!showauthmodal)
                                document.body.style.overflow = "hidden"
                                document.body.getElementsByClassName("navbar")[0].style.pointerEvents = "none"

                            }}>Login</button> : <Link href="/cart" passHref>
                                <div className={styles.navbar_cartdiv}>
                                    <Image src={cart} width={30} height={30} alt=" picture of the products" />
                                    <span>{cartArray.length}</span>
                                </div>

                            </Link>}

                        </ul>
                    </div>
                </div >
            </nav >
        </>
    )
}

export default Navbar