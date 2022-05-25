import React, { useEffect, useState } from 'react'
import Navbar from "../../components/Navbar.jsx"
import Image from 'next/image'
import styles from "../../styles/DetailedProduct.module.css"
import Products from "../../models/ProductSchema.js";
import Rating from '@mui/material/Rating';
import Head from "next/head";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useUser } from '@auth0/nextjs-auth0'
import mongoose from 'mongoose'
import axios from "axios";
import { getsingleuser } from '../../service/ShopApi.js';
import { CallEndRounded } from '@mui/icons-material';


const Detailedproduct = ({ singleproduct }) => {

    //* This is done to get the user details from the database
    //* We need the email from localstorage and we are sending it to the api
    //* so that we can get the cart data and use it to update the cart in this page
    const [creds, setcreds] = useState({ email: "" });
    const [cart, setcart] = useState({ email: "", cartproducts: [] });
    const [oldproducts, setoldproducts] = useState([]);
    const [newproducts, setnewproducts] = useState([]);



    useEffect(() => {
        const useremail = localStorage.getItem("useremail");
        creds.email = useremail;
        setnewproducts(singleproduct);

    }, []);


    useEffect(() => {
        fetch("http://localhost:3000/api/user/viewuserdetails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(creds)
        })
            .then(res => res.json())
            .then(data => {


                cart.cartproducts = data.cartproducts;
                setoldproducts(data.cartproducts);

            }
            )
            .catch(err => console.log(err));
    }, []);




    // we are basically adding items to the cart and then we are reloading it
    // oldproducrs have the prodducts that are already there in the database
    // newproducts have the products that are to be added to the cart
    // and then finally we are concating it.

    const addproducttocart = async (e) => {
        e.preventDefault();

        cart.email = creds.email;
        cart.cartproducts = oldproducts.concat(newproducts);

        fetch("http://localhost:3000/api/products/addproductstocart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cart)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            }
            )
            .catch(err => console.log(err));

        console.log(cart);


        setoldproducts([]);
        alert("Product added to cart");
        window.location.reload();




    }


    return (
        <>
            <Head>
                <title>ShopCoders | Product</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.parent}>
                <Navbar />

                <div className={`row ${styles.dp_parent}`} >
                    <div className="col-lg-6">

                        <Image src={singleproduct.img} width={700} height={650} alt="shoe" className={styles.dp_shoeimg} />

                    </div>
                    <div className="col-lg-6">

                        <div className={styles.dp_shoeinfo}>
                            <span className={styles.dp_companyname}>Nike</span>
                            <h1> {singleproduct.name}</h1>

                            <div className={styles.dp_rating}>
                                <Rating name="read-only" value={4} readOnly />
                            </div>

                            <div className={styles.dp_desc_div}>

                                <p className={styles.dp_desc}> {singleproduct.desc}</p>
                            </div>

                            <hr />

                            <div className={styles.dp_buydiv}>
                                <div className={styles.dp_buydiv_price}>
                                    <p>  <strong>Price : </strong>${singleproduct.price} </p>
                                    {singleproduct.qty === 0 ? <p className={styles.dp_outofstock}>Out of Stock</p> : <p><strong>Items left : </strong>{singleproduct.qty}</p>}

                                </div>

                                <div className={styles.dp_buydiv_button}>
                                    <button className={`btn btn-warning ${styles.dp_buybutton}`}  >Buy Now</button>
                                    <AiOutlineShoppingCart className={styles.shoppingcart} onClick={(e) => { addproducttocart(e) }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}



// getting the slug from the url
// and then i am using that same slug to get a product from the database
// slugs are unique so we can get the product from the database
// also then we are passing the product as props to the component

export async function getServerSideProps(context) {

    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGO_URI);
    }


    let singleproduct = await Products.findOne({ slug: context.query.slug });

    return {
        props: {
            singleproduct: JSON.parse(JSON.stringify(singleproduct)),
        }, // will be passed to the page component as props
    }
}

export default Detailedproduct