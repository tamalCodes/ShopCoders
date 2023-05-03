import Image from "next/image";
import React from "react";
import { MongoClient, ObjectId } from "mongodb";
import styles from "./styles.module.css";
import Buttondiv from "./Buttondiv";

async function fetchSingleProduct(id) {
    const uri = process.env.MONGO_URI;
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    try {
        await client.connect();
        const collection = client.db("test").collection("products");
        const product = await collection.findOne({ _id: new ObjectId(id) });
        return product;
    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
}

const ProductCardLandscape = async (id) => {
    const product = await fetchSingleProduct(id);

    return (
        <>
            {product && (
                <div
                    className={`${styles.product_main} bg-white p-[20px] rounded-[8px] text-black font-poppins w-[70%] max_md:w-[100%] mx-auto mt-[3rem] `}
                >
                    <div className="flex max_tab:flex-col items-center justify-between gap-[2rem] max_mobile:gap-[0] py-[2rem] max_mobile:py-[1rem]">
                        <Image
                            src={product.productImage}
                            width={330}
                            height={330}
                            alt="detailed picture of the tshirt"
                            className="max_mobile:w-[80%]"
                        />

                        <div className="w-[60%] max_tab:w-[100%] ">
                            <h1 className="font-[600] text-[2rem] max_md:text-[1.8rem] max_mobile:text-center  ">
                                {product.productName}
                            </h1>

                            <p className="mt-[1rem] text-[1.2rem] max_md:text-[1rem] max_mobile:text-center ">
                                {product.productDescription}
                            </p>

                            <p className="mt-[1.8rem] text-[2rem] max_md:text-[1.8rem] font-mont text-orange font-[600] max_tab:text-center ">
                                {" "}
                                ₹ {product.productPrice}
                            </p>

                            <p className="text-[1.2rem] max_md:text-[1rem] max_tab:text-center ">
                                Available qty : {product.productQty}{" "}
                            </p>

                            <Buttondiv product={product} />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductCardLandscape;
