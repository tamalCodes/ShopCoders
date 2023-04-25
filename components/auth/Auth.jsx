"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import authbanner from "../../public/assets/auth/authbanner.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import gh_logo from "../../public/assets/auth/gh_logo.png";
import gg_logo from "../../public/assets/auth/gg_logo.png";
import { bearStore } from "@/global/store";
import authLogic from "./authLogic";

const Authcard = ({ showauthmodal, setshowauthmodal }) => {


    const myRef = useRef(null);
    const authtype = bearStore((state) => state.authtype);
    const setauthtype = bearStore((state) => state.setauthtype);
    const [creds, setcreds] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        username: "",
        address: "",
        state: "",
        pincode: "",
        city: "",
        phone: "",
    });

    const handleChange = (e) => {
        setcreds({ ...creds, [e.target.name]: e.target.value });
    };

    const scrollToRef = () => {
        myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={800}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                pauseOnHover={false}
                closeButton={false}
                draggable={false}
                limit={1}
            />

            <div className="fixed bg-[rgba(0,0,0,0.475)] backdrop-blur-[5px] flex justify-center items-center overflow-scroll h-screen w-screen z-[9900] px-5 py-0 inset-0">

                <div className="bg-white overflow-hidden w-auto max_th:max-w-[85vw] h-[550px] flex items-center gap-8 relative rounded-xl">

                    <div className="absolute z-[100] cursor-pointer bg-transparent right-[2%] top-2.5">
                        <button
                            onClick={() => {
                                setshowauthmodal(!showauthmodal);
                                document.body.style.overflow = "auto";
                            }}

                            className="h-[30px] w-[30px] font-semibold rounded-[50%] border-orange border-[solid] border-[2px]"
                        >
                            X
                        </button>
                    </div>



                    <div className="grow-0 w-[380px] relative select-none p-12 max_th:hidden">
                        <Image src={authbanner} className="w-[100%] object-contain " />
                    </div>

                    <div className="grow w-[480px] overflow-scroll h-full p-12" id="authmodalsub_right font-poppins">
                        <form className="font-poppins"  >


                            <h1 className="tracking-[2px] font-semibold mb-10 text-[2.5rem]  " ref={myRef} > {authtype === "login" ? "Login" : "Signup"}  </h1>


                            <div className="flex  items-center  gap-[20px] mb-8 " >
                                <Image src={gh_logo} width={40} height={40} onClick={() => {

                                    authLogic.handleGithubSignin();
                                }} />
                                <Image src={gg_logo} width={40} height={40} onClick={() => {
                                    authLogic.handleGoogleSignin();
                                }} />

                            </div>

                            <p className="tracking-[2px] text-orange font-[600] text-[1.5rem] font-mont  mb-6  " >OR</p>

                            {authtype === "signup" && (
                                <div className="flex gap-[1rem] mb-[1.875rem]">
                                    <div className="max_th:flex-col">
                                        <label htmlFor="firstname" className="font-mont font-semibold text-[1.1rem] text-black tracking-[0.1rem] ">
                                            First name
                                        </label>
                                        <input
                                            type="text"
                                            className="authinput"
                                            id="firstname"
                                            aria-describedby="emailHelp"
                                            name='firstName'
                                            value={creds.firstName}
                                            onChange={handleChange}
                                            autoFocus
                                        />
                                    </div>
                                    <div className="">
                                        <label htmlFor="last name" className="font-mont font-semibold text-[1.1rem] text-black tracking-[0.1rem] ">
                                            Last name
                                        </label>
                                        <input
                                            type="text"
                                            className="authinput"
                                            id="last name"
                                            name='lastName'
                                            value={creds.lastName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            )}

                            <div className=" mb-[1.875rem]">
                                <label htmlFor="exampleInputEmail1" className="font-mont font-semibold text-[1.1rem] text-black tracking-[0.1rem] ">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="authinput"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    name="email"
                                    value={creds.email}
                                    onChange={handleChange}
                                    autoFocus
                                />
                                {authtype === "signup" && <div id="emailHelp" className="mt-[10px]">
                                    We'll never share your email with anyone else.
                                </div>}
                            </div>

                            <div className=" mb-[1.875rem]">
                                <label htmlFor="exampleInputPassword1" className="font-mont font-semibold text-[1.1rem] text-black tracking-[0.1rem] ">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="authinput"
                                    id="exampleInputPassword1"
                                    name="password"
                                    value={creds.password}
                                    onChange={handleChange}
                                />
                            </div>

                            {authtype === "signup" && (
                                <>

                                    <div className=" mb-[1.875rem]">
                                        <label htmlFor="username" className="font-mont font-semibold text-[1.1rem] text-black tracking-[0.1rem] ">
                                            Username
                                        </label>
                                        <input
                                            type="text"
                                            className="authinput"
                                            id="username"
                                            aria-describedby="username"
                                            name="username"
                                            value={creds.username}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className=" mb-[1.875rem]">
                                        <label htmlFor="username" className="font-mont font-semibold text-[1.1rem] text-black tracking-[0.1rem] ">
                                            Address
                                        </label>
                                        <textarea
                                            type="text"
                                            className="authinput h-[100px]"
                                            id="username"
                                            aria-describedby="address"
                                            name="address"
                                            value={creds.address}
                                            onChange={handleChange}
                                            placeholder="Write  your detailed address here"
                                        />
                                    </div>

                                    <div className=" mb-[1.875rem]">
                                        <label htmlFor="username" className="font-mont font-semibold text-[1.1rem] text-black tracking-[0.1rem] ">
                                            State
                                        </label>
                                        <input
                                            type="text"
                                            className="authinput"
                                            id="username"
                                            aria-describedby="state"
                                            name="state"
                                            value={creds.state}
                                            onChange={handleChange}
                                            placeholder="Uttar Pradesh"
                                        />
                                    </div>
                                    <div className=" mb-[1.875rem]">
                                        <label htmlFor="username" className="font-mont font-semibold text-[1.1rem] text-black tracking-[0.1rem] ">
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            className="authinput"
                                            id="username"
                                            aria-describedby="city"
                                            name="city"
                                            value={creds.city}
                                            onChange={handleChange}
                                            placeholder="Kolkata"
                                        />
                                    </div>

                                    <div className=" mb-[1.875rem]">
                                        <label htmlFor="username" className="font-mont font-semibold text-[1.1rem] text-black tracking-[0.1rem] ">
                                            Pincode/Zipcode
                                        </label>
                                        <input
                                            type="text"
                                            className="authinput"
                                            id="username"
                                            aria-describedby="pincode/zipcode"
                                            name="pincode"
                                            value={creds.pincode}
                                            onChange={handleChange}
                                            placeholder="700111"
                                        />
                                    </div>

                                    <div className=" mb-[1.875rem]">
                                        <label htmlFor="username" className="font-mont font-semibold text-[1.1rem] text-black tracking-[0.1rem] ">
                                            Phone number
                                        </label>
                                        <input
                                            type="text"
                                            className="authinput"
                                            id="username"
                                            aria-describedby="phone number"
                                            name="phone"
                                            value={creds.phone}
                                            onChange={handleChange}
                                            placeholder="+91 9876543210"
                                        />
                                    </div>

                                </>


                            )}






                            <p className="alreadytext">
                                {authtype === "login" ? "Don't have an account? " : "Already have an account? "}
                                <span
                                    onClick={() => {
                                        if (authtype === "login")
                                            setauthtype("signup");
                                        else
                                            setauthtype("login");


                                        scrollToRef(myRef);
                                        setcreds({ firstName: "", lastName: "", userName: "", email: "", password: "" });

                                    }}
                                    className="text-orange font-semibold cursor-pointer"
                                >
                                    {authtype === "login" ? "Signup" : "Login"}
                                </span>
                            </p>


                            <button type="submit" className="tracking-[1px] font-semibold mt-5 px-[30px] py-2.5 rounded-[5px] bg-orange text-white font-poppins  " onClick={(e) => {
                                e.preventDefault();
                                if (authtype === "login")
                                    authLogic.handleLogin(creds, setcreds);
                                else
                                    authLogic.handleSignup(creds, setcreds, setauthtype);

                            }} >
                                {authtype === "login" ? "Login" : "Signup"}
                            </button>
                        </form>
                    </div>


                </div>
            </div>
        </>
    );
};

export default Authcard;