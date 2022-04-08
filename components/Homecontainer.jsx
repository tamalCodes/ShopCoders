import React from 'react'
import styles from "../styles/Home.module.css";
import Image from "next/image";
import sales from "../public/assets/sale.svg";
import shopwithus from "../public/assets/shopwithus.svg";
import payment from "../public/assets/payment.svg";

const Homecontainer = () => {
    return (<>

        <div className={styles.imagediv1}>
            <Image src={sales} width={1500} height={600} alt="wear" />
        </div>

        <div className={styles.shopwithusdiv}>

            <div className={styles.shopwithus_textdiv}>
                <h2>Why shop with us ?</h2>
                <p>We at ShopCoders offer you official merchandise from all the coding event. These are mostly left out/ not gave-away. We tied up with 50+ official code companies like Github, Digital Ocean to bring you the best of the swags at an affordable price !! </p>
            </div>

            <div className={styles.shopwithus_imagediv}>

                <Image src={shopwithus} width={500} height={500} alt="shop" />

            </div>


        </div>


        <div className={styles.shopwithusdiv2}>


            <div className={styles.shopwithus2_imagediv}>

                <Image src={payment} width={500} height={500} alt="shop" />

            </div>


            <div className={styles.shopwithus2_textdiv}>
                <h2>Why shop with us ?</h2>
                <p>We at ShopCoders offer you official merchandise from all the coding event. These are mostly left out/ not gave-away. We tied up with 50+ official code companies like Github, Digital Ocean to bring you the best of the swags at an affordable price !! </p>
            </div>


        </div>
    </>

    )
}

export default Homecontainer