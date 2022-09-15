import Head from "next/head";
import React, { useContext, useEffect, useState } from "react";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import SellProductsForm from "../../../components/SellProductsForm";
import ShopContext from "../../../context/ShopContext";
import mongoose from "mongoose";
import User from "../../../models/UserSchema.js";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";
import styles from "../../../styles/Sellproducts.module.css"
import { BsFillCartFill, BsFillHeartFill } from "react-icons/bs";
import { FaAd, FaEdit, FaPlusCircle, FaRegEdit, FaRegPlayCircle } from "react-icons/fa";
import { RiDeleteBin6Line, RiDeleteBinLine } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";

const Sellswags = ({ singleuser, usermail }) => {
    const context = useContext(ShopContext);
    const { productdetails, setproductdetails } = context;
    const [cart, setcart] = useState({ email: "", sellproducts: [] });
    const router = useRouter();
    const initialstate = {
        name: "",
        qty: "",
        size: "",
        slug: "",
        price: "",
        category: "",
        desc: "",
        img: "",
    };

    const refreshData = () => {
        router.replace(router.asPath);
    };

    const addproducttocart = async () => {
        cart.email = usermail;
        cart.sellproducts = singleuser.sellproducts.concat(productdetails);

        fetch(
            `${process.env.NEXT_PUBLIC_SHOP_URL}/api/products/addproductstocart`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(cart),
            }
        )
            .then((res) => res.json())
            .catch((err) => console.log(err));
    };

    const addproductstoProducts = async () => {
        addproducttocart();
        fetch(
            `${process.env.NEXT_PUBLIC_SHOP_URL}/api/products/addproducts`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(productdetails),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.sucess === "sucess") {
                    toast("🌈 Added to cart !", {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        onClose: () => {
                            refreshData();
                        },
                    });

                    setproductdetails(initialstate);
                }
            })
            .catch((err) => console.log(err));
    };

    const [creds, setcreds] = useState("");

    useEffect(() => {
        const usermail = localStorage.getItem("useremail");
        setcreds(usermail);
    }, []);

    return (
        <>
            <Head>
                <title>ShopCoders | Sell swags </title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            <div className="container">
                <h1 className={`${styles.sellproducts_header1}`}>You can sell your swags from here !</h1>

                <div className="row">
                    <div className="col-lg-3">

                        <div className={`card ${styles.addproduct_card_parent}`}>
                            <h1 className={styles.addproduct_card_title}>Add your product you want to sell</h1>
                            <h1 className={styles.addproduct_card_title2}>It might take upto 30s for the product to be updated</h1>
                            <FaPlusCircle
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop"
                                size={23}
                                style={{ fill: "#C70A80", marginRight: "1rem", cursor: "pointer" }}
                            />

                        </div>

                        <div
                            className="modal fade"
                            id="staticBackdrop"
                            data-bs-backdrop="static"
                            data-bs-keyboard="false"
                            tabIndex="-1"
                            aria-labelledby="staticBackdropLabel"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog modal-dialog-centered  modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="staticBackdropLabel">
                                            Fill in the details for your product
                                        </h5>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        ></button>
                                    </div>
                                    <div className="modal-body">
                                        <SellProductsForm />
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            data-bs-dismiss="modal"
                                        >
                                            Close
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                addproductstoProducts();
                                            }}
                                            data-bs-dismiss="modal"
                                        >
                                            Add product
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`col-lg-9 ${styles.products_parent}`}>
                        <div className={`container-fluid ${styles.shirtpage_parent}`}>

                            {singleuser.sellproducts.length != 0 && singleuser.sellproducts.map((item) => {
                                return (

                                    <Link href={`/detailedproduct/${item.slug}&${creds}`} passHref={true} key={item._id}>


                                        <div className={`card ${styles.itemscard_card}`} style={{ width: "14rem" }}>
                                            <Image src='https://i.ibb.co/VCkDs5C/hoodie2-removebg-preview.png' className={`card-img-top ${styles.itemscard_img}`} alt="..." height={300} width={300} />

                                            <div className="card-body">

                                                <h5 className={`card-title ${styles.itemscard_title}`}>{item.name}</h5>

                                                <h5 className={styles.itemcard_price}>$ {item.price}</h5>

                                                <FaEdit
                                                    size={20}
                                                    style={{ fill: "#C70A80", marginRight: "1rem", cursor: "pointer" }}
                                                />

                                                <RiDeleteBinLine
                                                    size={20}
                                                    style={{ fill: "#F24C4C", marginRight: "5px", cursor: "pointer" }}
                                                />

                                            </div>
                                        </div>


                                    </Link>
                                )

                            })}


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sellswags;

export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGO_URI);
    }

    const slug1 = JSON.stringify(context.query.slug);
    const slug2 = slug1.replace(/['"]+/g, "");

    let singleuser = await User.findOne({ email: slug2.split("&")[0] });
    let usermail = slug2.split("&")[0];

    return {
        props: {
            singleuser: JSON.parse(JSON.stringify(singleuser)),
            usermail: usermail,
        },
    };
}
