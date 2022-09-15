import Head from "next/head";
import { useState } from "react";
import Footer from "../components/Footer";
import Homecontainer from "../components/Homecontainer";
import Navbar from "../components/Navbar";

export default function Home() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <>
      <Head>
        <title>ShopCoders | Home</title>
        <meta name="description" content="Welcome to ShopCoders" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container-fluid">
        <Navbar />

        <Homecontainer />
      </div>
    </>
  );
}
