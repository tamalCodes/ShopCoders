import React from 'react'
import Navbar from "../../components/Navbar.jsx"
import Image from 'next/image'
import Shoe from "../../public/assets/shoe.png"
import styles from "../../styles/DetailedProduct.module.css"
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import Rating from '@mui/material/Rating';

const Detailedproduct = () => {

    const [value, setValue] = React.useState(3);

    return (
        <>
            <Navbar />
            <div className={`container ${styles.detailedproduct_parentmain}`}>
                <div className={`container-fluid ${styles.detailedproduct_parent}`}>

                    <Image src={Shoe} width={500} height={300} alt="Nike" />
                    <div className={styles.detailedproduct_textdiv}>
                        <p className={styles.detailedproduct_brandname}>Nike</p>
                        <h1>Air Max M1</h1>
                        <Rating name="read-only" value={value} readOnly className={styles.detailedproduct_ratings} />
                        <p className={styles.detailedproduct_desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione eaque dolorum quos fugit, qui perferendis incidunt facere blanditiis ipsa nihil iusto commodi officiis praesentium amet, placeat iste est, itaque nostrum?</p>


                        <hr className={styles.detailedproduct_textdivhr} />


                        <div className={styles.detailedproduct_btnandprice}>
                            <h4>$58.00</h4>



                            <div >
                                <button className={`btn btn-warning ${styles.detailedproduct_buybtn}`}>Buy now</button>
                                <FavoriteTwoToneIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Detailedproduct