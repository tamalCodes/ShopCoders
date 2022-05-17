import React from 'react'
import { useUser } from "@auth0/nextjs-auth0";
import Navbar from "../../components/Navbar"
import styles from "../../styles/Usercart.module.css"
import connectDb from '../../middleware/db'
import User from "../../models/UserSchema.js";

const Usercart = ({ userdetails }) => {
    const { user, error, isLoading } = useUser();
    console.log(userdetails);


    return (

        <>
            <div className={styles.cart_mainparent}>

                <Navbar />

                <div className={`container ${styles.cart_parent}`}>
                    {user ? <div>user cart</div> : <div>please login</div>}
                </div>

                <p> {userdetails.cart[0]} </p>
                {/* {userdetails.cart.map((product) => {
                    return (
                        <h3 key={1}>hello</h3>
                    )

                })} */}


            </div>

        </>

    )
}

// we have used this in place of useeFFECT
// because we are not using useEffect in this page
// we are calling connecttomongo and connecting to the database, then we are getting the data from the database
// and we are storing and passing them as props !!

export async function getServerSideProps(context) {
    connectDb()

    let userdetails = await User.findOne({ name: "Tamal" });


    return {
        props: { userdetails: JSON.parse(JSON.stringify(userdetails)) }, // will be passed to the page component as props
    }
}

export default Usercart