import React from 'react'
import Navbar from "../../components/Navbar.jsx"
import Image from 'next/image'
import Shoe from "../../public/assets/shoe.png"
import styles from "../../styles/DetailedProduct.module.css"
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import Rating from '@mui/material/Rating';

const Detailedproduct = () => {



    return (
        <>
            <div className={styles.parent}>
                <Navbar />

                <div className={`container ${styles.dp_parent}`}>

                    <Image src={Shoe} width={600} height={350} alt="shoe" className={styles.dp_shoeimg} />

                    <div className={styles.dp_shoeinfo}>
                        <span className={styles.dp_companyname}>Nike</span>
                        <h1> Air Max 270 B1</h1>

                        <div className={styles.dp_rating}>
                            <Rating name="read-only" value={4} readOnly />
                        </div>

                        <div className={styles.dp_desc_div}>

                            <p className={styles.dp_desc}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt ut, accusantium minima ipsam id corrupti eum ullam tempora nihil reprehenderit adipisci excepturi repellendus at esse iusto voluptatibus sint nemo. Temporibus.</p>
                        </div>

                        <hr />

                        <div className={styles.dp_buydiv}>
                            <div className={styles.dp_buydiv_price}>
                                <p>$58.00</p>
                            </div>

                            <div className={styles.dp_buydiv_button}>
                                <button className={`btn btn-warning ${styles.dp_buybutton}`}>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Detailedproduct