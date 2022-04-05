import React from 'react'
import styles from "../styles/Navbar.module.css"
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
                <a className={styles.brand} href="#">ShopCoders</a>
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