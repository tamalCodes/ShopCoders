import React, { useEffect } from 'react'
import TshirtCard from '../../components/TshirtCard'
import styles from "../../styles/Shoptshirts.module.css"
import Navbar from "../../components/Navbar.jsx"
import connectToMongo from '../../middleware/db'
import products from "../../models/ProductSchema"


const Shoptshirts = ({ allproducts }) => {
    // const [shirts, setshirts] = useState([]);




    return (
        <>
            <Navbar />
            <div className={`container-fluid ${styles.shirtpage_parent}`}>

                {allproducts.map((product) => {
                    return (
                        <TshirtCard key={product._id} product={product} />
                    )
                })
                }
                {/* <TshirtCard /> */}

            </div>

        </>
    )
}

// we have used this in place of useeFFECT
// because we are not using useEffect in this page
// we are calling connecttomongo and connecting to the database, then we are getting the data from the database
// and we are storing and passing them as props !!

export async function getServerSideProps(context) {
    connectToMongo();
    let allproducts = await products.find({ category: "tshirt" });
    return {
        props: { allproducts: JSON.parse(JSON.stringify(allproducts)) }, // will be passed to the page component as props
    }
}

export default Shoptshirts