

import Sidebar from '@/components/sidebar/Sidebar'
import React from 'react'
import { MongoClient } from 'mongodb';
import Product from '@/components/productsection/Product';



async function connectAndFetchDB() {
    const uri = process.env.MONGO_URI;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();

        const collection = client.db('test').collection('products');
        const result = await collection.find({ productType: "swags" }).toArray();
        return result;
    } catch (err) {
        console.error(err);
    } finally {
        await client.close();

    }
}

const Page = async () => {


    const data = await connectAndFetchDB()

    return (
        <>
            <div className='flex gap-[2rem] mt-[5rem] items-start'>

                <Sidebar />
                <Product products={data} />



            </div>
        </>
    )
}

export default Page