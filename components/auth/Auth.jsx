"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import styles from "./Auth.module.css"
import signupbanner from "../../public/assets/auth/signupbanner.svg"
import Cookies from 'js-cookie'

const Authcard = ({ showauthmodal, setshowauthmodal }) => {

    const [isLogin, setisLogin] = useState(false);


    return (
        <>

            <div className={styles.authparent}>
                <div className={styles.authsub}>


                    <div className={styles.auth_btndiv}>
                        <button

                            onClick={() => {
                                setshowauthmodal(!showauthmodal)
                                document.body.style.overflow = "auto"
                                document.body.getElementsByClassName("navbar")[0].style.pointerEvents = "auto"

                            }}
                        >
                            X
                        </button>
                    </div>




                    <div className={styles.auth_leftdiv}>

                        {isLogin ? <h1>Welcome  to <br /> Shopcoders</h1> : <h1>Welcome to <br /> Shopcoders</h1>}

                        <p>A shop for coders, by coders.</p>


                        <div className={styles.auth_imgdiv}>

                            <Image src={signupbanner} />

                            {!isLogin ? <p>Already a part of us ? <span onClick={() => { setisLogin(true) }}>Login</span></p> : <p>Not a member yet ? <span onClick={() => { setisLogin(false) }}>Signup</span></p>}

                        </div>


                    </div>

                    <h1 className={styles.auth_smallheader}>Welcome to <br /> Shopcoders</h1>

                    <div className={styles.auth_rightdiv} id="auth-rightdiv">

                        {!isLogin ? <>

                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="Tamal Das" autoFocus />
                                <label for="floatingInput">Full name</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Username (no special characters) </label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Password (no special characters) </label>
                            </div>

                            <div class="form-floating mb-3">
                                <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                    <option selected>Andhra Pradesh</option>
                                    <option value="1">Arunachal Pradesh</option>
                                    <option value="2">Assam</option>
                                    <option value="3">Bihar</option>
                                    <option value="4">Chhattisgarh</option>
                                    <option value="5">Goa</option>
                                    <option value="6">Gujarat</option>
                                    <option value="7">Haryana</option>
                                    <option value="8">Himachal Pradesh</option>
                                    <option value="9">Jammu and Kashmir</option>
                                    <option value="10">Jharkhand</option>
                                    <option value="11">Karnataka</option>
                                    <option value="12">Kerala</option>
                                    <option value="13">Madhya Pradesh</option>
                                    <option value="14">Maharashtra</option>
                                    <option value="15">Manipur</option>
                                    <option value="16">Meghalaya</option>
                                    <option value="17">Mizoram</option>
                                    <option value="18">Nagaland</option>
                                    <option value="19">Odisha</option>
                                    <option value="20">Punjab</option>
                                    <option value="21">Rajasthan</option>
                                    <option value="22">Sikkim</option>
                                    <option value="23">Tamil Nadu</option>
                                    <option value="24">Telangana</option>
                                    <option value="25">Tripura</option>
                                    <option value="26">Uttar Pradesh</option>
                                    <option value="27">Uttarakhand</option>
                                    <option value="28">West Bengal</option>



                                </select>
                                <label for="floatingSelect">Choose your state</label>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Pincode/Zipcode</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">City (Full city name)</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Phone number</label>
                            </div>

                            <button className={`btn ${styles.signup_btn}`}>
                                Sign up
                            </button>
                        </> : <>

                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Email address</label>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Password (no special characters) </label>
                            </div>
                            <button className={`btn ${styles.signup_btn}`} onClick={() => {
                                Cookies.set("user_email", "gyansujan69@gmail.com")

                            }}>
                                Log in
                            </button>
                        </>}

                        <div className={styles.auth_smallchecktext}>
                            {isLogin ? <p>Not a part of us yet ? <span onClick={() => { setisLogin(false) }}>Signup</span></p> : <p>Already a member ? <span onClick={() => { setisLogin(true) }}>Login</span></p>}
                        </div>

                    </div>


                </div>
            </div>

        </>
    )
}

export default Authcard