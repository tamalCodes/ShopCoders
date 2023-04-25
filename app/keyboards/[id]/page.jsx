import Image from 'next/image';
import React from 'react'
import Buttondiv from './Buttondiv';
import { MongoClient, ObjectId } from 'mongodb';
import styles from "../styles.module.css"


async function fetchSingleProduct(id) {

    const uri = process.env.MONGO_URI;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const collection = client.db('test').collection('products');
        const product = await collection.findOne({ _id: new ObjectId(id) });
        return product;
    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
}


const Page = async ({ params: { id } }) => {
    const product = await fetchSingleProduct(id);

    return (
        <>
            {product && <div className={`${styles.product_main} bg-white p-[20px] rounded-[8px] text-black font-poppins w-[70%] mx-auto mt-[3rem] `} >
                <div className='flex items-center justify-between gap-[2rem] py-[2rem]' >
                    <Image src={product.productImage} width={330} height={330} alt="detailed picture of the tshirt" />

                    <div className='w-[60%] ' >
                        <h1 className='font-[600] text-[2rem]  '>{product.productName}</h1>

                        <p className='mt-[1rem] text-[1.2rem] '>{product.productDescription}</p>

                        <p className='mt-[1.8rem] text-[2rem] font-mont text-orange font-[600] ' > ₹ {product.productPrice}</p>

                        <p className='text-[1.2rem]'>Available qty : {product.productQty} </p>

                        <Buttondiv product={product} />



                    </div>
                </div>
            </div>}

        </>
    )
}

export default Page;