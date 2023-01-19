import Image from 'next/image'
import React from 'react'
import styles from '../../styles/ProductsBanner.module.css'

const ProductsBanner = () => {
    return (


        <div className={styles.pb_main}>
            <h2 className={styles.pb_header1}>Our top products for the season 🚀</h2>
            <p className={styles.pb_subheader1}>What are you waiting for ? Buy them now, before they expire !</p>


            <div className={styles.pb_cardsdiv}>

                <div className={styles.pb_cardmain}>

                    <div className={styles.pb_cardimgdiv}>
                        {/* img here */}
                        <Image src="https://i.ibb.co/LPkPf5j/4.png" width={300} height={280} alt="picture of  the products" />
                    </div>

                    <div className={styles.pb_cardtextdiv}>
                        <p >Linux T-Shirt</p>
                        <p>⭐⭐⭐⭐⭐</p>
                        <p>$ 50</p>
                    </div>


                </div>
                <div className={styles.pb_cardmain}>

                    <div className={styles.pb_cardimgdiv}>
                        {/* img here */}
                        <Image src="https://i.ibb.co/LPkPf5j/4.png" width={300} height={280} alt="picture of  the products" />
                    </div>

                    <div className={styles.pb_cardtextdiv}>
                        <p >Linux T-Shirt</p>
                        <p>⭐⭐⭐⭐⭐</p>
                        <p>$ 50</p>
                    </div>


                </div>
                <div className={styles.pb_cardmain}>

                    <div className={styles.pb_cardimgdiv}>
                        {/* img here */}
                        <Image src="https://i.ibb.co/LPkPf5j/4.png" width={300} height={280} alt="picture of  the products" />
                    </div>

                    <div className={styles.pb_cardtextdiv}>
                        <p >Linux T-Shirt</p>
                        <p>⭐⭐⭐⭐⭐</p>
                        <p>$ 50</p>
                    </div>


                </div>
                <div className={styles.pb_cardmain}>

                    <div className={styles.pb_cardimgdiv}>
                        {/* img here */}
                        <Image src="https://i.ibb.co/LPkPf5j/4.png" width={300} height={280} alt="picture of  the products" />
                    </div>

                    <div className={styles.pb_cardtextdiv}>
                        <p >Linux T-Shirt</p>
                        <p>⭐⭐⭐⭐⭐</p>
                        <p>$ 50</p>
                    </div>


                </div>
                <div className={styles.pb_cardmain}>

                    <div className={styles.pb_cardimgdiv}>
                        {/* img here */}
                        <Image src="https://i.ibb.co/LPkPf5j/4.png" width={300} height={280} alt="picture of  the products" />
                    </div>

                    <div className={styles.pb_cardtextdiv}>
                        <p >Linux T-Shirt</p>
                        <p>⭐⭐⭐⭐⭐</p>
                        <p>$ 50</p>
                    </div>


                </div>
                <div className={styles.pb_cardmain}>

                    <div className={styles.pb_cardimgdiv}>
                        {/* img here */}
                        <Image src="https://i.ibb.co/LPkPf5j/4.png" width={300} height={280} alt="picture of  the products" />
                    </div>

                    <div className={styles.pb_cardtextdiv}>
                        <p >Linux T-Shirt</p>
                        <p>⭐⭐⭐⭐⭐</p>
                        <p>$ 50</p>
                    </div>


                </div>
                <div className={styles.pb_cardmain}>

                    <div className={styles.pb_cardimgdiv}>
                        {/* img here */}
                        <Image src="https://i.ibb.co/LPkPf5j/4.png" width={300} height={280} alt="picture of  the products" />
                    </div>

                    <div className={styles.pb_cardtextdiv}>
                        <p >Linux T-Shirt</p>
                        <p>⭐⭐⭐⭐⭐</p>
                        <p>$ 50</p>
                    </div>


                </div>


            </div>
        </div>
    )
}

export default ProductsBanner