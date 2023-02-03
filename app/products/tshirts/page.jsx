import React from 'react'
import styles from './tshirts.module.css'
import GH_Shirt4 from "../../../public/assets/Products/Shirt/GH_shirt5.webp"
import cart from "../../../public/assets/Products/misc/cart.svg"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

async function fetchallShirts() {
    const res = await fetch(
        `${process.env.SERVER_URL}/api/products/viewallproducts?category=tshirts`
    );
    return res.json();
}

const Tshirts = async () => {

    const alltshirts = fetchallShirts();
    const [tshirts] = await Promise.all([alltshirts]);


    return (
        <>
            <div className={styles.shirtpage_main}>
                <div className={styles.shirtpage_main_heading}>
                    <h1>We have all the Ts you&apos;ll ever need</h1>

                    <div className={`input-group mb-3 ${styles.searchmaindiv}`}>
                        <input type="text" class="form-control" placeholder="Enter product name" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                    </div>
                </div>
                <div className={styles.pb_cardsdiv}>
                    {tshirts.products?.map((product, index) => (
                        <Link passHref href={`/products/${product._id}`} className={styles.pb_cardmain}>
                            <div key={index}>
                                <div className={styles.pb_cardimgdiv}>
                                    <Image src={product.img} width={300} height={280} alt=" picture of the products" />
                                </div>
                                <div className={styles.pb_cardtextdiv}>
                                    <p>{product.name}</p>
                                    <p>⭐⭐⭐⭐⭐</p>
                                    <p>$ {product.price}</p>
                                    {/*   <p>{product.desc}</p> */}
                                </div>
                                <div className={styles.card_cart}>
                                    <Image src={cart} width={32} height={32} alt=" picture of the products" />
                                </div>
                            </div>

                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Tshirts