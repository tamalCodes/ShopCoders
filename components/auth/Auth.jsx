"use client";

import Image from "next/image";
import React, { useState } from "react";
import styles from "./Auth.module.css";
import signupbanner from "../../public/assets/auth/signupbanner.svg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { showErrorToast, showSuccessToast } from "@/middleware/toastMessage";
import { signIn } from "next-auth/react";
import { AuthRegex } from "./authRegex";

const Authcard = ({ showauthmodal, setshowauthmodal }) => {
    const [isLogin, setisLogin] = useState(false);
    const [creds, setcreds] = useState({
        name: "",
        email: "",
        password: "",
        username: "",
        address: "",
        state: "Andhra Pradesh",
        pincode: "",
        city: "",
        phone: "",
    });

    const handleChange = (e) => {
        setcreds({ ...creds, [e.target.name]: e.target.value });
    };

    const handleSignup = async () => {

        if (creds.name.length < 1 || creds.email.length < 1 || creds.password.length < 1 || creds.username.length < 1 || creds.address.length < 1 || creds.state.length < 1 || creds.pincode.length < 1 || creds.city.length < 1 || creds.phone.length < 1) {
            console.log("Please fill all the fields");
            showErrorToast("Please fill all the fields");
            return;
        }

        if (!AuthRegex(creds)) {
            return;
        }

        try {

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SHOP_URL}/api/user/adduser`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(creds),
                }
            );

            if (res.status !== 200) {
                showErrorToast("Something went wrong");

            } else {
                showSuccessToast("Signed you up, please login");
                setisLogin(true);
                setcreds({
                    name: "",
                    email: "",
                    password: "",
                    username: "",
                    address: "",
                    state: "Andhra Pradesh",
                    pincode: "",
                    city: "",
                    phone: "",
                })
            }




        } catch (error) {
            showErrorToast(error);
        }
    };

    const handleLogin = async () => {

        try {
            const email = creds.email;
            const password = creds.password;
            const data = await signIn("credentials", {
                redirect: false,
                email,
                password,
            });

            if (data.error) {
                showErrorToast(data.error);
            }

            console.log(data);

            if (data.ok) {
                showSuccessToast("Logged in");

                setTimeout(() => {
                    setcreds({
                        name: "",
                        email: "",
                        password: "",
                        username: "",
                        address: "",
                        state: "",
                        pincode: "",
                        city: "",
                        phone: "",
                    });
                    setshowauthmodal(false);
                    document.body.style.overflow = "auto";
                    document.body.getElementsByClassName(
                        "navbar"
                    )[0].style.pointerEvents = "auto";
                }, 2200);
            }
        } catch (error) {
            showErrorToast(error);
        }
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

            <div className={styles.authparent}>
                <div className={styles.authsub}>
                    <div className={styles.auth_btndiv}>
                        <button
                            onClick={() => {
                                setshowauthmodal(!showauthmodal);
                                document.body.style.overflow = "auto";
                                document.body.getElementsByClassName(
                                    "navbar"
                                )[0].style.pointerEvents = "auto";
                                setcreds({
                                    email: "",
                                    password: "",
                                    username: "",
                                    address: "",
                                    state: "",
                                    pincode: "",
                                    city: "",
                                    phone: "",
                                });
                            }}
                        >
                            X
                        </button>
                    </div>

                    <div className={styles.auth_leftdiv}>
                        {isLogin ? (
                            <h1>
                                Login to <br /> Shopcoders
                            </h1>
                        ) : (
                            <h1>
                                Welcome to <br /> Shopcoders
                            </h1>
                        )}

                        <p>A shop for coders, by coders.</p>

                        <div className={styles.auth_imgdiv}>
                            <Image src={signupbanner} />

                            {!isLogin ? (
                                <p>
                                    Already a part of us ?{" "}
                                    <span
                                        onClick={() => {
                                            setisLogin(true);
                                        }}
                                    >
                                        Login
                                    </span>
                                </p>
                            ) : (
                                <p>
                                    Not a member yet ?{" "}
                                    <span
                                        onClick={() => {
                                            setisLogin(false);
                                        }}
                                    >
                                        Signup
                                    </span>
                                </p>
                            )}
                        </div>
                    </div>

                    {!isLogin ? <h1 className={styles.auth_smallheader}>
                        Welcome to <br /> Shopcoders
                    </h1> : <h1 className={styles.auth_smallheader}>
                        Login to <br /> Shopcoders
                    </h1>}

                    <div className={styles.auth_rightdiv} id="auth-rightdiv">
                        {!isLogin ? (
                            <>
                                <div class="form-floating mb-3">
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="name"
                                        placeholder="Tamal Das"
                                        autoFocus
                                        name="name"
                                        value={creds.name}
                                        onChange={handleChange} required
                                    />
                                    <label for="name">Full name</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input
                                        type="email"
                                        class="form-control"
                                        id="email"
                                        placeholder="name@example.com"
                                        name="email"
                                        value={creds.email}
                                        onChange={handleChange} required
                                    />
                                    <label for="email">Email address</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="floatingInput"
                                        placeholder="name@example.com"
                                        name="username"
                                        value={creds.username}
                                        onChange={handleChange} required
                                    />
                                    <label for="floatingInput">
                                        Username (no special characters){" "}
                                    </label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input
                                        type="password"
                                        class="form-control"
                                        id="floatingInput"
                                        placeholder="name@example.com"
                                        name="password"
                                        value={creds.password}
                                        onChange={handleChange} required
                                    />
                                    <label for="floatingInput">
                                        Password
                                    </label>
                                </div>

                                <div class="form-floating mb-3">
                                    <select
                                        class="form-select"
                                        id="floatingSelect"
                                        aria-label="Floating label select example"
                                        onChange={(event) => {
                                            setcreds({ ...creds, state: event.target.value });

                                        }}
                                    >
                                        <option selected>Andhra Pradesh</option>
                                        <option>Arunachal Pradesh</option>
                                        <option>Assam</option>
                                        <option>Bihar</option>
                                        <option>Chhattisgarh</option>
                                        <option>Goa</option>
                                        <option>Gujarat</option>
                                        <option>Haryana</option>
                                        <option>Himachal Pradesh</option>
                                        <option>Jammu and Kashmir</option>
                                        <option>Jharkhand</option>
                                        <option>Karnataka</option>
                                        <option>Kerala</option>
                                        <option>Madhya Pradesh</option>
                                        <option>Maharashtra</option>
                                        <option>Manipur</option>
                                        <option>Meghalaya</option>
                                        <option>Mizoram</option>
                                        <option>Nagaland</option>
                                        <option>Odisha</option>
                                        <option>Punjab</option>
                                        <option>Rajasthan</option>
                                        <option>Sikkim</option>
                                        <option>Tamil Nadu</option>
                                        <option>Telangana</option>
                                        <option>Tripura</option>
                                        <option>Uttar Pradesh</option>
                                        <option>Uttarakhand</option>
                                        <option>West Bengal</option>
                                    </select>
                                    <label for="floatingSelect">Choose your state</label>
                                </div>

                                <div class="form-floating mb-3">
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="floatingInput"
                                        placeholder="name@example.com"
                                        name="pincode"
                                        value={creds.pincode}
                                        onChange={handleChange} required
                                    />
                                    <label for="floatingInput">Pincode/Zipcode</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="floatingInput"
                                        placeholder="name@example.com"
                                        name="city"
                                        value={creds.city}
                                        onChange={handleChange} required
                                    />
                                    <label for="floatingInput">City (Full city name)</label>
                                </div>
                                <div class="form-floating mb-3" style={{ minHeight: "180px" }}>
                                    <textarea
                                        type="text"
                                        className={`form-control ${styles.auth_textarea}}`}
                                        id="floatingInput"
                                        placeholder="name@example.com"
                                        name="address"
                                        value={creds.address}
                                        onChange={handleChange} required
                                        style={{ minHeight: "180px" }}
                                    />
                                    <label for="floatingInput">Your detailed adress</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="floatingInput"
                                        placeholder="name@example.com"
                                        name="phone"
                                        value={creds.phone}
                                        onChange={handleChange} required
                                    />
                                    <label for="floatingInput">Phone number</label>
                                </div>

                                <button
                                    className={`btn ${styles.signup_btn}`}
                                    onClick={() => {
                                        handleSignup();
                                    }}
                                >
                                    Sign up
                                </button>
                            </>
                        ) : (
                            <>
                                <div class="form-floating mb-3">
                                    <input
                                        type="email"
                                        class="form-control"
                                        id="email"
                                        placeholder="name@example.com"
                                        name="email"
                                        value={creds.email}
                                        onChange={handleChange} required
                                    />
                                    <label for="email">Email address</label>
                                </div>

                                <div class="form-floating mb-3">
                                    <input
                                        type="password"
                                        class="form-control"
                                        id="password"
                                        placeholder="name@example.com"
                                        name="password"
                                        value={creds.password}
                                        onChange={handleChange} required
                                    />
                                    <label for="password">
                                        Password (no special characters){" "}
                                    </label>
                                </div>
                                <button
                                    className={`btn ${styles.signup_btn}`}
                                    onClick={() => {
                                        handleLogin();
                                    }}
                                >
                                    Log in
                                </button>
                            </>
                        )}

                        <div className={styles.auth_smallchecktext}>
                            {isLogin ? (
                                <p>
                                    Not a part of us yet ?{" "}
                                    <span
                                        onClick={() => {
                                            setisLogin(false);
                                        }}
                                    >
                                        Signup
                                    </span>
                                </p>
                            ) : (
                                <p>
                                    Already a member ?{" "}
                                    <span
                                        onClick={() => {
                                            setisLogin(true);
                                        }}
                                    >
                                        Login
                                    </span>
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Authcard;
