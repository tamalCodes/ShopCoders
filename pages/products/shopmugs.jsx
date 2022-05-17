import React from 'react'
import TshirtCard from '../../components/TshirtCard'
import styles from "../../styles/Shoptshirts.module.css"
import Navbar from "../../components/Navbar.jsx"
import Mugscard from '../../components/Mugscard'
import products from "../../models/ProductSchema"
import connectDb from '../../middleware/db'


const Shopmugs = ({ allproducts }) => {
    return (
        <>
            <Navbar />

            <div className={`container-fluid ${styles.shirtpage_parent}`}>
                {allproducts.map((product) => {
                    return (
                        <Mugscard key={product._id} product={product} />
                    )
                })}

            </div>

        </>
    )
}


// get server side props
export async function getServerSideProps(context) {
    connectDb();
    let allproducts = await products.find({ category: "mugs" });
    return {
        props: { allproducts: JSON.parse(JSON.stringify(allproducts)) },
    }
}

export default Shopmugs

