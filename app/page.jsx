// "use client"

// import React, { useEffect, useState } from "react";
// import styles from "../styles/Home.module.css";
// import Image from "next/legacy/image";
// import shoppingbtn from "../public/assets/Landing/ShopNowButton.png";
// import ProductsBanner from "./ProductsBanner";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";


// const Home = () => {

//   return (
//     <>
//       <ToastContainer
//         position="top-right"
//         autoClose={800}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick={false}
//         rtl={false}
//         pauseOnFocusLoss
//         pauseOnHover={false}
//         closeButton={false}
//         draggable={false}
//         limit={1}
//       />
//       <div className={styles.home_mainparent}>

//         <div className={styles.herobanner} >

//           <div className={styles.hb_sub}>
//             <div className={styles.hb_textdiv}>

//               <span>Trade-in-offer</span>
//               <h1>Super value deal </h1>
//               <h2>On all products</h2>

//               <p>Save more with coupons & up to 70% off for black friday sale !</p>



//             </div>

//             <Image src={shoppingbtn} width={200} height={51} alt="shopping button " className={styles.hb_shopnowbtn} />



//           </div>

//         </div>
//       </div>

//     </>
//   );
// };

// export default Home;


"use client";

import React from "react";
import BestSellers from "@/components/bestseller/BestSellers";
import Herosection from "@/components/herosection/Herosection";

const Page = () => {
  return (
    <>
      <Herosection />
      <BestSellers />
    </>
  );
};

export default Page;
