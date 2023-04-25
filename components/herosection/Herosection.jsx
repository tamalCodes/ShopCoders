import Image from 'next/image'
import React from 'react'
import herobanner from "../../public/assets/hero/herobanner.svg"
import styles from "./Herosection.module.css"

const Herosection = () => {
    return (
        <>

            <div className='flex flex-col h-[80vh] justify-center mt-[3rem] max_md:mt-[6rem]  '>


                <div className='flex max_md:flex-col items-center justify-between max_md:justify-center max_md:text-center max_mobile:text-left gap-[3rem] '>
                    <div>
                        <h1 className='blackheader  max_mobile:blackheader_mobile max_tab:blackheader_tab '>
                            Revolutionize
                        </h1>
                        <h2 className=' font-poppins text-black text-[2.3rem] max_mobile:text-[1.8rem] font-[600] leading-[3.5rem] max_mobile:leading-[1.9rem] max_mobile:mt-1 tracking-[0.1rem]'>your coding game.</h2>

                        <p className='font-poppins text-[1.1rem] tracking-[0.1rem] mt-[3rem]'>Shop now at CoderCrate, <br />the ultimate place for your coding needs.</p>

                        <button className={`${styles.shopnow_button} font-poppins text-[1.1rem] tracking-[0.1rem] mt-[1rem] p-[10px] rounded-[6px] text-white`}>Shop now</button>
                    </div>

                    <div className='max-w-[45%] max_md:max-w-[60%] max_mobile:hidden'>
                        <Image src={herobanner} />
                    </div>
                </div>

            </div>

        </>
    )
}

export default Herosection