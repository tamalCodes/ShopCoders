import React from 'react'
import Navbar from "../../components/Navbar.jsx"
import Image from 'next/image'
import Shoe from "../../public/assets/shoe.png"
import styles from "../../styles/DetailedProduct.module.css"
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import connectToMongo from '../../middleware/db.js'
import products from "../../models/ProductSchema"
import Rating from '@mui/material/Rating';

const Detailedproduct = ({ product }) => {



    return (
        <>
            <div className={styles.parent}>
                <Navbar />

                <div className={`container ${styles.dp_parent}`}>

                    <Image src={Shoe} width={600} height={350} alt="shoe" className={styles.dp_shoeimg} />

                    <div className={styles.dp_shoeinfo}>
                        <span className={styles.dp_companyname}>Nike</span>
                        <h1> {product.name}</h1>

                        <div className={styles.dp_rating}>
                            <Rating name="read-only" value={4} readOnly />
                        </div>

                        <div className={styles.dp_desc_div}>

                            <p className={styles.dp_desc}> {product.desc}</p>
                        </div>

                        <hr />

                        <div className={styles.dp_buydiv}>
                            <div className={styles.dp_buydiv_price}>
                                <p>  <strong>Price : </strong>${product.price} </p>
                                {product.qty === 0 ? <p className={styles.dp_outofstock}>Out of Stock</p> : <p><strong>Items left : </strong>{product.qty}</p>}

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



// getting the slug from the url
// and then i am using that same slug to get a product from the database
// slugs are unique so we can get the product from the database
// also then we are passing the product as props to the component

export async function getServerSideProps(context) {
    connectToMongo();
    let product = await products.findOne({ slug: context.query.slug });

    return {
        props: { product: JSON.parse(JSON.stringify(product)) }, // will be passed to the page component as props
    }
}

export default Detailedproduct