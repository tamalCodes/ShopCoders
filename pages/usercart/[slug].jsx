import mongoose from 'mongoose';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar.jsx';
import Users from "../../models/UserSchema.js"
import styles from "../../styles/Usercart.module.css"
import { useUser } from "@auth0/nextjs-auth0";
import Link from 'next/link';
import { BsFillCartFill, BsFillHeartFill, BsFillEyeFill } from "react-icons/bs";
import Head from 'next/head';
import Script from 'next/script.js';
import getStripe from '../../service/GetStripe.js';
import { toast, ToastContainer } from 'react-toastify';




const Usercart = ({ singleuser }) => {

    const { user, error, isLoading } = useUser();
    const [sumprice, setsumprice] = useState(0);
    const [cart, setcart] = useState({ email: "", cartproducts: [] });
    const [creds, setcreds] = useState({ email: "" });

    //* Finding the email from local storage and saving it in the creds object

    useEffect(() => {
        const useremail = localStorage.getItem("useremail");
        creds.email = useremail;
    }, []);



    useEffect(() => {
        let sum = 0;
        for (let i = 0; i < singleuser.cartproducts.length; i++) {
            const element = singleuser.cartproducts[i].price;

            sum = sum + element;

            setsumprice(sum);
        }
    }, []);

    //* STRIPE PAYMENT

    const stripeCheckout = async () => {
        const stripe = await getStripe();

        const response = await fetch("/api/stripe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(singleuser.cartproducts)
        });

        if (response.status === 500) {
            return;
        }

        const data = await response.json();
        const { error } = data;
        if (error) {
            return;
        }




        stripe.redirectToCheckout({
            sessionId: data.id
        });



    }




    return (


        <>



            {user && <>

                <Head>
                    <title> {user.name.split(" ")[0]}&apos;s Cart </title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />

                </Head>



            </>}



            <div className={styles.cart_mainparent}>

                <Navbar />

                <div className="container" style={{ marginTop: "5rem" }}>
                    <h3 className={styles.cart_cartusername}> Welcome to your cart, {user && user.name.split(" ")[0]} </h3>
                </div>

                <div className={`container ${styles.cart_cartcardsparent}`}>



                    {singleuser.cartproducts.length > 0 && singleuser.cartproducts.map((item, index) => {

                        return (
                            <>




                                <div className={`card ${styles.itemscard_card}`} style={{ width: "18rem" }}>
                                    <Image src={item.img} className={`card-img-top ${styles.itemscard_img}`} alt="..." height={300} width={300} />

                                    <div className="card-body">

                                        <h5 className={`card-title ${styles.itemscard_title}`}>{item.name}</h5>




                                        <h5 className={styles.itemcard_price}>₹ {item.price}</h5>

                                        <Link href={`/detailed-product/${item.slug}`} passHref >

                                            <BsFillEyeFill
                                                size={20}
                                                style={{ fill: "#C70A80", marginRight: "1rem", cursor: "pointer" }}
                                            />

                                        </Link>

                                        <BsFillHeartFill
                                            size={20}
                                            style={{ fill: "#F24C4C", marginRight: "5px", cursor: "pointer" }}
                                        />

                                    </div>
                                </div>


                            </>

                        )
                    })}


                </div>

                <hr style={{ width: "70%", margin: "auto" }} />

                <div className="container" style={{ marginTop: "5rem", marginBottom: "5rem" }}>
                    <h3 className={styles.cart_cartusername}> Total Price of your order : ₹ {sumprice} </h3>
                    <br />

                    <button className={`btn btn-warning ${styles.cart_checkoutbtn}`} onClick={() => { stripeCheckout() }} > Pay with stripe </button>




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







