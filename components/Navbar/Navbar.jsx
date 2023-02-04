"use client"

import React from 'react'
import styles from "./Navbar.module.css"
import Link from 'next/link'
import { usePathname } from "next/navigation"
import cart from "../../public/assets/Products/misc/cart.svg"
import Image from 'next/image'
import { useStore } from '@/global/store'


const Navbar = () => {

    const router = usePathname();
    const { cartArray } = useStore();



    return (
        <>
            <nav className={`navbar navbar-expand-lg bg-none ${styles.mainnav}`}>
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

                            <div className={styles.navbar_cartdiv}>
                                <Image src={cart} width={30} height={30} alt=" picture of the products" />
                                <span>{cartArray.length}</span>
                            </div>

                            {/* 
                            <li className={`nav-item ${styles.navlinks}`}>

                                {user ? (
                                    <Image src={user.picture} alt="user" height={30} width={30} className={styles.userimage} onClick={() => { setState({ ...state, right: true }); }} />
                                ) : (
                                    <AiOutlineShoppingCart fontSize={"1.5rem"} onClick={() => { setState({ ...state, right: true }); }} />
                                )}


                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar