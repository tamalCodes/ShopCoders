"use client";

import { bearStore } from "@/global/store";
import React from "react";
import sidebardata from "./static/data";
import Image from "next/image";

const Sidebar = () => {
    const openauth = bearStore((state) => state.openauth);
    const setSelectedBrand = bearStore((state) => state.setSelectedBrand);

    return (
        <>

            <div className=" border-[2px] border-solid border-orange rounded-[6px] min-w-[20rem] p-[15px] sticky top-[6rem]">


                <div>
                    <h1 className="font-poppins text-[20px] font-[600] tracking-[1px] ">
                        Filter by Brands
                    </h1>

                    <div className="mt-[1rem] flex flex-col gap-1">
                        {
                            sidebardata.brandData.map((item, index) => {
                                return (<div className="brands_container" onClick={() => {
                                    setSelectedBrand(item.name);
                                }}  >
                                    <Image
                                        src={item.image}
                                        width={40}
                                        height={40}
                                        alt="Ant Esports"
                                        className=" rounded-[50%] "
                                    />
                                    <p className="brands_text">{item.name}</p>
                                </div>)
                            })
                        }

                    </div>
                </div>

                <div className="mt-[2rem]">
                    <h1 className="font-poppins text-[20px] font-[600] tracking-[1px] ">
                        Filter by Lighting
                    </h1>

                    <div className="mt-[1rem] flex flex-col gap-1">
                        {
                            sidebardata.lightingData.map((item, index) => {
                                return (
                                    <div className="brands_container">
                                        <p className="brands_text">{item}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>


            </div>
        </>
    );
};

export default Sidebar;
