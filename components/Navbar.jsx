import React, { useState } from 'react'
import styles from "../styles/Navbar.module.css"
import Link from 'next/link'


const Navbar = () => {

    const [showdropdown, setshowdropdown] = useState(false);
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
                <Link href="/" passHref>

                    <p className={styles.brand}>
                        ShopCoders
                    </p>

                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                        <Link href={"/"} passHref>
                            <li className={`nav-item ${styles.navlinks}`}>
                                Home
                            </li>

                        </Link>

                        <Link href={"/about"} passHref>
                            <li className={`nav-item ${styles.navlinks}`}>
                                About us
                            </li>

                        </Link>


                        <li className={`nav-item ${styles.navlinks}`} onClick={() => { setshowdropdown(!showdropdown) }}>
                            Our products
                        </li>


                        {showdropdown &&
                            <div className={styles.dropdowndiv}>
                                <Link href={"/products/shoptshirts"} passHref>
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



                        <Link href={"/auth/signin"} passHref>
                            <li className={`nav-item ${styles.navlinks}`}>
                                Login
                            </li>

                        </Link>





                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navbar