
import mongoose from 'mongoose';
import Image from 'next/image';
import React from 'react'
import Navbar from '../../components/Navbar.jsx';
import Users from "../../models/UserSchema.js"
import styles from "../../styles/Usercart.module.css"
import { useUser } from "@auth0/nextjs-auth0";
import Link from 'next/link';

const Usercart = ({ singleuser }) => {

    const { user, error, isLoading } = useUser();

    return (


        <>

            <div className={styles.cart_mainparent}>

                <Navbar />

                <div className="container" style={{ marginTop: "5rem" }}>
                    <h3 className={styles.cart_cartusername}> Welcome to your cart </h3>
                </div>

                <div className={`container ${styles.cart_cartcardsparent}`}>



                    {singleuser.cartproducts.map((item, index) => {

                        return (
                            <>

                                <div className={`card ${styles.cartcard}`} >

                                    <div className="card-body">
                                        <Image src={item.img} alt="products" width={300} height={300} />
                                        <div className={styles.cart_details}>
                                            <h3>{item.name}</h3>
                                            <p>$ {item.price}</p>
                                        </div>
                                        <div className={styles.cart_quantity}>
                                            <p>{item.category}</p>
                                        </div>

                                        <Link href={`/detailed-product/${item.slug}`} passHref >View Product</Link>

                                    </div>
                                </div>


                            </>

                        )
                    })}




                </div>

            </div>



        </>
    )
}


export async function getServerSideProps(context) {

    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGO_URI);
    }

    let singleproduct = context.query.slug;
    let singleuser = await Users.findOne({ email: context.query.slug });

    return {
        props: {
            singleuser: JSON.parse(JSON.stringify(singleuser)),
        }, // will be passed to the page component as props
    }
}

export default Usercart







