import { cookies } from "next/headers";

const addtocart = async () => {
  const nextCookies = cookies();
  const useremail = nextCookies.get("user_email")?.value;
  const cartdata = await fetch(
    `${process.env.NEXT_PUBLIC_SHOP_URL}/api/user/viewuserdetails?email=${useremail}`,
    { cache: "no-store" }
  ).then((res) => res.json());

  console.log(cartdata);
  console.log("i have been called");

  return cartdata;
};

export default addtocart;
