import React from 'react'
import TshirtCard from '../../components/TshirtCard'
import styles from "../../styles/Shoptshirts.module.css"
import Navbar from "../../components/Navbar.jsx"
import Hoodiescard from '../../components/Hoodiescard'
import connectToMongo from '../../middleware/db'
import products from "../../models/ProductSchema"


const Shophoodies = ({ allproducts }) => {
    return (
        <>
            <Navbar />
            <div className={`container-fluid ${styles.shirtpage_parent}`}>

                {allproducts.map((product) => {
                    return (
                        <Hoodiescard key={product._id} product={product} />
                    )
                })}

            </div>

        </>
    )
}

// get server side props
export async function getServerSideProps(context) {
    connectToMongo();
    let allproducts = await products.find({ category: "hoodie" });
    return {
        props: { allproducts: JSON.parse(JSON.stringify(allproducts)) },
    }
}

export default Shophoodies


