/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/legacy/image";
import sales from "../public/assets/sale.svg";
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


            <div className={styles.imagediv1}>
                <Image
                    src={mobilegh}
                    width={700}
                    height={700}
                    alt="wear"
                    className={styles.image1}
                />
            </div>

            {/* <div className={styles.imagediv2}  >

                

                <img src="https://i.ibb.co/L6bDrkF/Grand.png" alt="" onClick={() => { gotoproducts() }} className={styles.grandMobile} />

                <img src="https://i.ibb.co/KhJ619n/Landing-Banner.png" alt="" onClick={() => { gotoproducts() }} className={styles.grandDesktop} />





            </div> */}

            {/* <div className={styles.ImageBannerDiv1}>
                <div className={styles.ImageBannerDiv2} >
                    <Image src="https://i.ibb.co/3WDgNt7/Shop-Coders-LB2.png" height={90} width={728} className={styles.grandDesktop} priority alt="Grand new year sale" placeholder="shimmer" />
                </div>
            </div> */}


            <div className={styles.ImageBannerDiv1}>
                <div className={styles.ImageBannerDiv2}>
                    <Image src="https://i.ibb.co/DM53bY2/LB-XL-D.png" height={300} width={1500} className={styles.grandDesktop} priority alt="Grand new year sale" placeholder="shimmer" />
                </div>
            </div>


            <div id="products">
                <ProductsCarousel />
            </div>

            <hr className={styles.hrbar} />
            <br />
            <br />

            <div className={styles.landingContent}>


                <div className={styles.rowdesktop}>

                    <div
                        className={styles.imagediv2_textdiv}

                    >
                        <h2>Why shop with us ?</h2>
                        <p>
                            We at ShopCoders offer you official merchandise from all the
                            coding event. These are mostly left out/ not gave-away. We tied
                            up with 50+ official code companies like Github, Digital Ocean
                            to bring you the best of the swags at an affordable price !!
                        </p>
                        <p className={styles.imagediv2_textdiv_mobile_p}>
                            We at ShopCoders offer you official merchandise,the best  swags from all the
                            coding events at at an affordable price !
                        </p>

                        <div className={`${styles.exploreAndSales_btn_div}`}>
                            <button className={`btn btn-warning ${styles.explorebtn}`}  >Explore other products</button>
                        </div>
                    </div>

                    <div className={styles.imagediv2_imgdiv}>
                        <Image
                            src={whyshopwithus}
                            width={600}
                            height={400}
                            alt="wear"
                            className={styles.image1}
                            priority="true"
                        />
                    </div>

                </div>


            </div>

            <div className={styles.landingContent_mobile} >
                <Image
                    src={ShoppingBannerMobile}
                    width={500}
                    height={500}
                    alt="wear"
                    className={styles.image1}
                    priority="true"
                />
            </div>

            <br />
            <br />

            <div className={styles.landingContent}>


                <div className={styles.rowdesktop}>

                    <div className={styles.imagediv2_imgdiv}>
                        <Image
                            src={paylesswithus}
                            width={500}
                            height={500}
                            alt="wear"
                            className={styles.image1}
                            priority="true"
                        />
                    </div>

                    <div
                        className={styles.imagediv2_textdiv}

                    >
                        <h2>Pay less with us !</h2>
                        <p>
                            We at ShopCoders have ocassional sales, lottery days, and even
                            we sponser other hackathons where you can get to select a swag
                            as a winner. <br />
                            In case you want to gift it to someone, we provide huge
                            discounts from 20 all the way to 80% !!
                        </p>


                        <p className={styles.imagediv2_textdiv_mobile_p}>
                            We at ShopCoders have ocassional sales, lottery days, and even
                            we sponser other hackathons where you can get to select a swag
                            as a winner.
                        </p>

                        <div className={`${styles.exploreAndSales_btn_div}`}>
                            <button className={`btn btn-warning ${styles.explorebtn}`}  >Check out amazing sales</button>
                        </div>
                    </div>



                </div>

            </div>




        </>
    );
};

export default Homecontainer;
