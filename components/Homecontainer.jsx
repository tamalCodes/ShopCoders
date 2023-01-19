/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/legacy/image";
import ShopCodersBanner from "../public/assets/Landing/ShopCodersBanner.png";
import whyshopwithus from "../public/assets/whyshop.png";
import mobilegh from "../public/assets/MobileGithubImage.jpg";
import { useUser } from "@auth0/nextjs-auth0";
import LandingBanner from "../public/assets/LandingBanner.png";
import paylesswithus from "../public/assets/payless.png";
import Link from "next/link";
import ProductsCarousel from "./LandingProductsCarousel/ProductsCarousel";
import Footer from "./Footer";
import ShoppingBannerMobile from "../public/assets/ShoppingBannerMobile.svg";
import LandingBannerDesktop from "../public/assets/LandingBannerDesktop.png";
import shoppingbtn from "../public/assets/Landing/ShopNowButton.png";
import ProductsBanner from "./LandingComponents/ProductsBanner";
import LandingBanner2 from "../public/assets/Landing/LandingBanner2.png";

const Homecontainer = () => {
    const { user, error, isLoading } = useUser();
    const [win, setwin] = useState();
    const [creds, setcreds] = useState({ email: "" });

    const addusertoDB = () => {
        fetch(
            //         `${process.env.NEXT_PUBLIC_SHOP_URL}/api/products/addproductstocart`,
            //         {
            //             method: "POST",
            //             headers: {
            //                 "Content-Type": "application/json",
            //             },
            //             body: JSON.stringify(creds),
            //         }
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch((err) => console.log(err));

        //     // console.log(creds);
    };

    const searchuserinDB = () => {
        fetch(`${process.env.NEXT_PUBLIC_SHOP_URL}/api/user/getoneuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(creds),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.sucess === "nosucess") {

                    addusertoDB();
                }
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        if (user) {

            localStorage.setItem("useremail", user.email);

            const useremail = localStorage.getItem("useremail");
            creds.email = useremail;

            searchuserinDB();
        }
    }, [user]);

    useEffect(() => {
        // window is accessible here.

        setwin(window.innerHeight);
    }, []);

    // onclick function to go to the #products div 
    const gotoproducts = () => {
        document.getElementById("products").scrollIntoView();
    };




    return (
        <>
            <div className={styles.herobanner} >

                <div className={styles.hb_sub}>
                    <div className={styles.hb_textdiv}>

                        <span>Trade-in-offer</span>
                        <h1>Super value deal </h1>
                        <h2>On all products</h2>

                        <p>Save more with coupons & up to 70% off for black friday sale !</p>



                    </div>

                    <Image src={shoppingbtn} width={200} height={51} alt="shopping button " className={styles.hb_shopnowbtn} />



                </div>

            </div>


            <ProductsBanner />





            <div className={styles.shopcoderbanner2main}>
                <div className={styles.shopcoderbanner2}>

                    <div>
                        <p>
                            A shop for coders, <br />
                            by coders
                        </p>
                    </div>

                    <span>
                        check out more of our amazing products below !
                    </span>

                </div>
            </div>



            <div className={styles.categorydiv}>

                <div className={styles.category_banner1}>
                    <div>

                        <p>buy 1 get one free</p>

                        <p>The best coder T&apos;s is on sale</p>

                        <button type="button" >Explore TShirts</button>

                    </div>
                </div>

                <div className={styles.category_banner2}>
                    <div>

                        <p>get&apos;em before they are sold     </p>

                        <p>Check out our limited edition hoodies</p>

                        <button type="button" >Explore Hoodies</button>

                    </div>
                </div>

            </div>
            <div className={styles.categorydiv2}>

                <div className={styles.category_banner3}>
                    <div>

                        <p> stickers, stickers, stickers  </p>

                        <p>Get your hands on some amazing stickers.</p>

                        <button type="button" >Explore stickers</button>

                    </div>
                </div>

            </div>




            {/*  <Footer /> */}

        </>
    );
};

export default Homecontainer;
