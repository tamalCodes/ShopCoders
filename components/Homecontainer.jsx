import React, { useEffect, useState } from 'react'
import styles from "../styles/Home.module.css";
import Image from "next/image";
import sales from "../public/assets/sale.svg";
import whyshopwithus from "../public/assets/whyshopwithus.svg";
import mobilegh from "../public/assets/MobileGithubImage.jpg"
import { useUser } from '@auth0/nextjs-auth0';
import HomeParticles from './HomeParticles';
import Shoplanding from "../public/assets/Shoplanding.svg"
import paylesswithus from "../public/assets/paylesswithus.svg";


const Homecontainer = () => {
    const { user, error, isLoading } = useUser();
    const [win, setwin] = useState();

    useEffect(() => {
        if (!user) {
            return
        }
        console.log(user);
        localStorage.setItem('useremail', user.email);
    }, [user]);

    useEffect(() => {
        // window is accessible here.
        console.log("window.innerHeight", window.innerHeight);
        setwin(window.innerHeight);
    }, []);

    return (<>
        <HomeParticles />

        <div className={styles.imagediv1}>
            <Image src={mobilegh} width={700} height={700} alt="wear" className={styles.image1} />
        </div>

        <div className={styles.imagediv2}>
            <div className="row">
                <div className="col-lg-6 col-sm-12"><Image src={Shoplanding} width={800} height={800} alt="wear" className={styles.image1} /></div>

                <div className="col-lg-6 col-sm-12"> <div className={styles.imagediv2_textdiv}>
                    <h3>Wear the Code 🥑</h3>
                    <p>Welcome to ShopCoders, a place for the coders by the coders to get you some premium quality merchendise !!</p>
                    <button className={`btn btn-warning ${styles.explorebtn}`}>Explore</button>

                </div></div>
            </div>


        </div>

        <hr className={styles.hrbar} />


        <div className={styles.imagediv2}>

            <div className={`row ${styles.rowdesktop}`}>

                <div className="col-lg-6 col-sm-12">
                    <div className={styles.imagediv2_textdiv} style={{ paddingLeft: "10rem" }}>
                        <h3>Why shop with us ?</h3>
                        <p> We at ShopCoders offer you official merchandise from all the coding event. These are mostly left out/ not gave-away. We tied up with 50+ official code companies like Github, Digital Ocean to bring you the best of the swags at an affordable price !! </p>


                    </div>

                </div>

                <div className="col-lg-6 col-sm-12">
                    <Image src={whyshopwithus} width={800} height={800} alt="wear" className={styles.image1} />
                </div>


            </div>

            <div className={`row ${styles.rowmobile}`}>

                <div className="col-lg-6 col-sm-12">
                    <Image src={whyshopwithus} width={800} height={800} alt="wear" className={styles.image1} />
                </div>

                <div className="col-lg-6 col-sm-12">
                    <div className={styles.imagediv2_textdiv}>
                        <h3>Why shop with us ?</h3>
                        <p>We at ShopCoders offer you official merchandise from all the coding event. These are mostly left out/ not gave-away. We tied up with 50+ official code companies like Github, Digital Ocean to bring you the best of the swags at an affordable price !! </p>


                    </div>

                </div>
            </div>


        </div>


        <hr className={styles.hrbar} />


        <div className={styles.imagediv2} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
            <div className="row">
                <div className="col-lg-6 col-sm-12"><Image src={paylesswithus} width={750} height={750} alt="wear" className={styles.image1} /></div>

                <div className="col-lg-6 col-sm-12"> <div className={styles.imagediv2_textdiv} style={{ paddingLeft: "10rem" }}>
                    <h3>Pay less with us !!</h3>
                    <p>We at ShopCoders have ocassional sales, lottery days, and even we sponser other hackathons where you can get to select a swag as a winner !! <br />
                        In case you want to gift it to someone, we provide huge discounts from 20 all the way to 80% !!
                    </p>


                </div></div>
            </div>


        </div>

        {/* <div className={` ${styles.shopwithusdiv}`}>

            <div className={` ${styles.shopwithus_textdiv}`}>
                <h2>Why shop with us ?</h2>
                <p>We at ShopCoders offer you official merchandise from all the coding event. These are mostly left out/ not gave-away. We tied up with 50+ official code companies like Github, Digital Ocean to bring you the best of the swags at an affordable price !! </p>
            </div>

            <div className={` ${styles.shopwithus_imagediv}`}>

                <Image src={shopwithus} width={500} height={500} alt="shop" />

            </div>


        </div>


        <div className={` ${styles.shopwithusdiv2}`}>


            <div className={` ${styles.shopwithus2_imagediv}`}>

                <Image src={payment} width={500} height={500} alt="shop" />

            </div>


            <div className={` ${styles.shopwithus2_textdiv}`}>
                <h2>Pay less with us !! </h2>
                <p>We at ShopCoders have ocassional sales, lottery days, and even we sponser other hackathons where you can get to select a swag as a winner !! <br />
                    In case you want to gift it to someone, we provide huge discounts from 20 all the way to 80% !!
                </p>
            </div>


        </div> */}






    </>

    )
}

export default Homecontainer