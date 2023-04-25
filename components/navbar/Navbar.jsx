"use client";

import React, { useState } from "react";
import navlogo from "../../public/assets/navbar/navlogo.svg";
import bag from "../../public/assets/navbar/bag.svg";
import Image from "next/image";
import Link from "next/link";
import CartCircle from "./cartcirlce/CartCircle";
import AuthButton from "./authbutton/AuthButton";
import ham from "../../public/assets/navbar/ham.svg";
import Dropdown from "./dropdown/Dropdown";
import Authcard from "../auth/Auth";
import styles from "./Navbar.module.css"
import up from "../../public/assets/navbar/up.svg"


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [showauthmodal, setshowauthmodal] = useState(false);


    return (
        <>

            {showauthmodal && <Authcard setshowauthmodal={setshowauthmodal} showauthmodal={showauthmodal} />}
            <div className={`flex  justify-between items-center sticky top-0 py-[15px] z-99 ${styles.navbar_main}`}>
                <div className="flex items-center gap-2 ">
                    <Image src={navlogo} className="rounded-[6px] max_mobile:w-[30px]" />
                    <p className="font-poppins font-[600] text-[1.5rem] max_mobile:text-[1rem] leading-[36px] text-orange  tracking-[0.1rem] ">
                        CoderCrate
                    </p>
                </div>

                <nav className=" max_md:hidden flex justify-center gap-[35px] font-poppins font-[400] text-[1.1rem] leading-[27px] text-black tracking-[0.1rem]">
                    <Link aria-current="page" href="/" passHref className="cursor-default" >
                        Home
                    </Link>

                    <div className="relative">
                        <p
                            onClick={() => {
                                setOpen(!open);
                            }}
                            className="cursor-default flex items-center gap-[10px]"
                        >
                            Products

                            <Image width={10} height={10} src={up} className={`text-[1.2rem] text-orange inline w-[13px] ${!open ? `${styles.rotated}` : `${styles.unrotated}`} `} />



                        </p>

                        <Dropdown open={open} setOpen={setOpen} />
                    </div>

                    <Link aria-current="page" href="/" passHref className="cursor-default">
                        Best Sellers
                    </Link>
                    <Link aria-current="page" href="/cart" passHref className="relative cursor-default">
                        <Image src={bag} />
                        <CartCircle />
                    </Link>
                </nav>

                <AuthButton showauthmodal={showauthmodal} setshowauthmodal={setshowauthmodal} />

                <div className="md:hidden">
                    <Image src={ham} className="w-[2rem]" />
                </div>
            </div>
        </>
    );
};

export default Navbar;
