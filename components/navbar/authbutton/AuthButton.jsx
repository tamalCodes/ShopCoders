import { bearStore } from "@/global/store";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import { showErrorToast } from "@/middleware/toastMessage";

const AuthButton = ({ showauthmodal, setshowauthmodal }) => {
    const setauthtype = bearStore((state) => state.setauthtype);
    const { data: session, status } = useSession();

    return (
        <>
            <div className="flex gap-[15px] font-poppins  text-[16px] leading-[20px]  max_md:hidden">

                {session?.user ? (
                    <button className="bg-orange p-[10px] rounded-[6px] text-white w-[6rem] tracking-[1px] "
                        onClick={() => {
                            console.log(session.user);
                            signOut();
                            showErrorToast("Logged out successfully");
                        }}
                    >
                        Logout
                    </button>
                ) : (
                    <>
                        <button className="border-solid border-[3px] border-orange p-[10px] rounded-[6px] text-orange w-[6rem] bg-white tracking-[1px] "
                            onClick={() => {
                                setshowauthmodal(!showauthmodal)
                                document.body.style.overflow = "hidden"
                                setauthtype("signup")
                            }}
                        >
                            Signup
                        </button>
                        <button className="bg-orange p-[10px] rounded-[6px] text-white w-[6rem] tracking-[1px] "
                            onClick={() => {
                                setshowauthmodal(!showauthmodal)
                                document.body.style.overflow = "hidden"
                                setauthtype("login")
                            }}
                        >
                            Login
                        </button>
                    </>
                )}
            </div>
        </>
    );
};

export default AuthButton;
