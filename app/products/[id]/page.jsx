import Image from 'next/image';
import React from 'react'
import Buttondiv from './Buttondiv';
import styles from "./SingleProduct.module.css";


async function fetchproductdetails(id) {
    const res = await fetch(
        `${process.env.SERVER_URL}/api/products/viewproductbyid?id=${id}`
    );

    if (res.status !== 200) {
        console.log("something went wrong");
        return null;
    }

    return res.json();
}



const Singleproduct = async ({ params: { id } }) => {

    const productdetails = fetchproductdetails(id);
    const [product] = await Promise.all([productdetails]);

    console.log(product.product);


    return (
        <>
            {product.product && <div className={styles.singleproduct_main}>
                <div className={styles.productbox}>
                    <Image src={product.product.img} width={300} height={300} alt="detailed picture of the tshirt" />

                    <div className={styles.product_textdiv}>
                        <h1>{product.product.name}</h1>

                        <p>{product.product.desc}</p>

                        <p>${product.product.price}</p>

                        <p>Available qty : {product.product.qty} </p>

                        <Buttondiv />
                    </div>
                </div>
            </div>}

        </>
    )
}

export default Singleproduct