/* import React, { useContext, useEffect, useState } from 'react'
import styles from "../styles/Navbar.module.css"
import Link from 'next/link'
import { AiOutlineShoppingCart } from "react-icons/ai";
import ShopContext from '../context/ShopContext';
import { useUser } from "@auth0/nextjs-auth0";
import Image from "next/legacy/image";

const Navbar = () => {

    const [showdropdown, setshowdropdown] = useState(false);
    const { user, error, isLoading } = useUser();
    const context = useContext(ShopContext);
    const { state, setState } = context;


    return (
        <nav className={`navbar navbar-expand-lg navbar-light ${styles.navbar} `}>
            <div className={styles.navbarparent}>
                <Link href="/" passHref className={styles.brand}>


                    ShopCoders

                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className={`navbar-nav ms-auto mb-2 mb-lg-0 ${styles.navbarul}`}>



                        {showdropdown &&
                            <div className={styles.dropdowndiv}>
                                <Link href={"/products/shoptshirts"} passHref >
                                    <li className={`nav-item ${styles.navlinks}`}>
                                        T-Shirts
                                    </li>

                                </Link>
                                <Link href={"/products/shophoodies"} passHref>
                                    <li className={`nav-item ${styles.navlinks}`}>
                                        Hoodies
                                    </li>

                                </Link>
                                <Link href={"/products/shopstickers"} passHref>
                                    <li className={`nav-item ${styles.navlinks}`}>
                                        Stickers
                                    </li>

                                </Link>
                                <Link href={"/products/shopmugs"} passHref>
                                    <li className={`nav-item ${styles.navlinks}`}>
                                        Mugs
                                    </li>

                                </Link>
                            </div>
                        }

                        <Link href={"/products/shoptshirts"} passHref >
                            <li className={`nav-item ${styles.navlinks}`}>
                                T-Shirts
                            </li>

                        </Link>
                        <Link href={"/products/shophoodies"} passHref>
                            <li className={`nav-item ${styles.navlinks}`}>
                                Hoodies
                            </li>

                        </Link>
                        <Link href={"/products/shopstickers"} passHref>
                            <li className={`nav-item ${styles.navlinks}`}>
                                Stickers
                            </li>

                        </Link>
                        <Link href={"/products/shopmugs"} passHref>
                            <li className={`nav-item ${styles.navlinks}`}>
                                Mugs
                            </li>

                        </Link>


                        <li className={`nav-item ${styles.navlinks}`}>

                            {user ? (
                                <Image src={user.picture} alt="user" height={30} width={30} className={styles.userimage} onClick={() => { setState({ ...state, right: true }); }} />
                            ) : (
                                <AiOutlineShoppingCart fontSize={"1.5rem"} onClick={() => { setState({ ...state, right: true }); }} />
                            )}


                        </li>


                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navbar */

import React, { useContext, useEffect, useState } from 'react'
import styles from "../styles/Navbar.module.css"
import Link from 'next/link'
import { AiOutlineShoppingCart } from "react-icons/ai";
import ShopContext from '../context/ShopContext';
import { useUser } from "@auth0/nextjs-auth0";
import Image from "next/legacy/image";

const Navbar = () => {

    const [showdropdown, setshowdropdown] = useState(false);
    const { user, error, isLoading } = useUser();
    const context = useContext(ShopContext);
    const { state, setState } = context;


    return (
        <>
            <nav class="navbar navbar-expand-lg bg-none">
                <div class="container-fluid">
                    <Link href="/" passHref className={styles.brand}>


                        ShopCoders

                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarNavDropdown">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link " aria-current="page" href="/" passHref>Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link href="/products/shoptshirts" passHref class="nav-link" >Tshirts</Link>
                            </li>
                            <li class="nav-item">
                                <Link href="/products/shopstickers" passHref class="nav-link" >Stickers</Link>
                            </li>
                            <li class="nav-item">
                                <Link href="/products/shophoodies" passHref class="nav-link" >Hoodies</Link>
                            </li>


                            <li className={`nav-item ${styles.navlinks}`}>

                                {user ? (
                                    <Image src={user.picture} alt="user" height={30} width={30} className={styles.userimage} onClick={() => { setState({ ...state, right: true }); }} />
                                ) : (
                                    <AiOutlineShoppingCart fontSize={"1.5rem"} onClick={() => { setState({ ...state, right: true }); }} />
                                )}


                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar