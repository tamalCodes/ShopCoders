
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import styles from "../../styles/Cart.module.css"
import CartFooter from './CartFooter';
import CartHeader from './CartHeader';
import { cookies } from 'next/headers';



async function fetchUserCart() {
    const nextCookies = cookies();
    const useremail = nextCookies.get("user_email")?.value;
    const cartdetails = await fetch(
        `${process.env.NEXT_PUBLIC_SHOP_URL}/api/user/viewuserdetails?email=${useremail}`,
        { cache: "no-store" }
    ).then((res) => res.json())

    console.log(cartdetails);

    return cartdetails;
}

const Cart = async () => {

    const nextCookies = cookies();
    const useremail = nextCookies.get("user_email")?.value;

    const cartdetails = await fetch(
        `${process.env.NEXT_PUBLIC_SHOP_URL}/api/user/viewuserdetails?email=${useremail}`).then((res) => res.json())

    console.log(cartdetails);


    return (
        <div className={styles.cart_mainparent}>
            <div className={styles.cart_parent}>

                <CartHeader />


                <div className={styles.cart_cardparent}>
                    {cartdetails.user && cartdetails.user.cartproducts.map((product, index) => {
                        return (<>

                            <Link passHref href={`/products/${product._id}`} className={styles.pb_cardmain} key={index}>
                                <div className={styles.cart_cartcard}>
                                    <Image src={product.img} width={380} height={450} alt="cart product" />

                                    <div className={styles.cart_cardtextdiv}>
                                        <div>
                                            <p>{product.name}</p>
                                            <p>{product.desc}</p>
                                        </div>


                                        <div>
                                            <hr className={styles.cart_cardhr} />
                                            <p className={styles.cart_cardprice}>${product.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>


                        </>)
                    })}
                </div>
                <br />
                <br />

                <CartFooter />

            </div>
        </div>
    )
}

export default Cart