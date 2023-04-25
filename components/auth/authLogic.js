"use client";

import { showErrorToast, showSuccessToast } from "@/middleware/toastMessage";
import { bearStore } from "@/global/store";
const { AuthRegex } = require("./authRegex");
import { signIn } from "next-auth/react";

const handleSignup = async (creds, setcreds, setauthtype) => {
  if (
    creds.firstName.length < 1 ||
    creds.lastName.length < 1 ||
    creds.email.length < 1 ||
    creds.password.length < 1 ||
    creds.username.length < 1 ||
    creds.address.length < 1 ||
    creds.state.length < 1 ||
    creds.pincode.length < 1 ||
    creds.city.length < 1 ||
    creds.phone.length < 1
  ) {
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
      setauthtype("login");
      setcreds({
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
    }
  } catch (error) {
    showErrorToast(error);
  }
};

const handleLogin = async (creds, setcreds) => {
  try {

    if (
      creds.email.length < 1 ||
      creds.password.length < 1
    ) {
      showErrorToast("Please fill all the fields");
      return;
    }

    if (!AuthRegex(creds)) {
      return;
    }


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
        document.body.getElementsByClassName("navbar")[0].style.pointerEvents =
          "auto";
      }, 2200);
    }
  } catch (error) {
    showErrorToast(error);
  }
};

//* Github Login
async function handleGithubSignin() {
  try {
    const data = await signIn("github", {
      callbackUrl: `${process.env.NEXT_PUBLIC_SHOP_URL}`,
    });
    if (data.error) {
      showErrorToast(data.error);
    }
  } catch (error) {
    showErrorToast(error);
  }
}

//* Google Login
async function handleGoogleSignin() {
  try {
    const data = await signIn("google", {
      callbackUrl: `${process.env.NEXT_PUBLIC_SHOP_URL}`,
    });
    if (data.error) {
      showErrorToast(data.error);
    }
  } catch (error) {
    showErrorToast(error);
  }
}

const authLogic = {
  handleSignup,
  handleLogin,
  handleGithubSignin,
  handleGoogleSignin,
};

export default authLogic;
