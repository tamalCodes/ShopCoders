import React, { useEffect, useState } from 'react'
import { useUser } from "@auth0/nextjs-auth0";
import Navbar from "../../components/Navbar"
import styles from "../../styles/Usercart.module.css"
import connectDb from '../../middleware/db'
import mongoose from 'mongoose';

const Usercart = () => {

    //* This is done to get the user details from the database
    //* We need the email from localstorage and we are sending it to the api
    //* so that we can get the cart data and use it to update the cart in this page
    const [creds, setcreds] = useState({ email: "" });
    const [cart, setcart] = useState([]);
    const [element, setelement] = useState({ slug: "" });

    const [cartproducts, setcartproducts] = useState([]);


    const additem = (singleitem) => {
        const newTodos = [...cartproducts];
        newTodos.push(singleitem);
        setcartproducts(newTodos);
    }


    useEffect(() => {
        const useremail = localStorage.getItem("useremail");
        creds.email = useremail;

    }, []);

    const getUserfromDB = async () => {

        fetch("http://localhost:3001/api/user/viewuserdetails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(creds)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setcart(data.cart);

            }
            )
            .catch(err => console.log(err));

    }


    useEffect(() => {
        getUserfromDB();
    }, []);


    useEffect(() => {
        if (!cart)
            return;

        for (let index = 0; index < cart.length; index++) {
            element.slug = cart[index];

            fetch("http://localhost:3001/api/products/viewproductbyid", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(element)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    additem(data);

                }
                )
                .catch(err => console.log(err));

        }
    }, [cart]);



    return (

        <>
            <div className={styles.cart_mainparent}>

                <Navbar />

                <div className={`container ${styles.cart_parent}`}>
                    {/* {user ? <div>user cart</div> : <div>please login</div>} */}
                    <h3>Hello there</h3>
                    {cartproducts.map((item, index) => {
                        return (
                            <div className={styles.cart_item} key={index}>
                                <h4>{item.name}</h4>
                            </div>
                        )
                    })}





                </div>


                {/* {userdetails.cart.map((product) => {
                    return (
                        <h3 key={1}>hello</h3>
                    )

                })} */}


            </div>

        </>

    )
}


export default Usercart