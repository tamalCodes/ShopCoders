"use client"

import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/legacy/image";
import shoppingbtn from "../public/assets/Landing/ShopNowButton.png";
import ProductsBanner from "./ProductsBanner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Home = () => {

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={800}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover={false}
        closeButton={false}
        draggable={false}
        limit={1}
      />
      <div className={styles.home_mainparent}>

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



        <ProductsBanner />

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
      </div>

    </>
  );
};

export default Home;
