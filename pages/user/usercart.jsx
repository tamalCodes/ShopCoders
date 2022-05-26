import React, { useEffect, useState } from 'react'
import { useUser } from "@auth0/nextjs-auth0";
import Navbar from "../../components/Navbar"
import styles from "../../styles/Usercart.module.css"
import styles2 from "../../styles/Shoptshirts.module.css"
import Link from 'next/link';
import Image from 'next/image';


const Usercart = () => {

    //* This is done to get the user details from the database
    //* We need the email from localstorage and we are sending it to the api
    //* so that we can get the cart data and use it to update the cart in this page

    const [creds, setcreds] = useState({ email: "" });
    const [cart, setcart] = useState([{}]);


    useEffect(() => {
        const useremail = localStorage.getItem("useremail");
        creds.email = useremail;

    }, []);

    const getUserfromDB = async () => {

        fetch("http://localhost:3000/api/user/viewuserdetails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(creds)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setcart(data.cartproducts);

            }
            )
            .catch(err => console.log(err));

    }


    useEffect(() => {
        getUserfromDB();
    }, []);

    return (

        <>
            <div className={styles.cart_mainparent}>

                <Navbar />

                <div className={`container ${styles.cart_parent}`}>


                    <h3>Hello there</h3>

                    {cart.map((item, index) => {
                        return (
                            <>



                                <Link href={`/detailed-product/${item.slug}`} passHref>
                                    <div className={`card ${styles2.shirtcard}`} >

                                        <div className="card-body" >
                                            {/* <Image height={300} width={300} src={item.img} className={`${styles2.product_cardimg}`} alt="..." /> */}

                                            <Image src={item.img} layout='fill' alt='ldlld' />
                                            <h5>{item.img}</h5>

                                            <h5 className={`card-title`}>{item.name}</h5>
                                            <p className={`card-text`}>{item.desc}</p>
                                            <p className={`card-text`}>${item.price}</p>


                                        </div>
                                    </div>
                                </Link>

                            </>

                        )
                    })}

                </div>

            </div>

        </>

    )
}

export default Usercart