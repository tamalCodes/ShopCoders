import React from 'react'
import { useUser } from "@auth0/nextjs-auth0";
import Navbar from "../../components/Navbar"
import styles from "../../styles/Usercart.module.css"

const Usercart = () => {
    const { user, error, isLoading } = useUser();


    return (

        <>
            <div className={styles.cart_mainparent}>

                <Navbar />

                <div className={`container ${styles.cart_parent}`}>
                    {user ? <div>user cart</div> : <div>please login</div>}
                </div>


            </div>

        </>

    )
}

export default Usercart