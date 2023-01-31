import Head from "next/head";
import Footer from "../components/Footer";
import Homecontainer from "../components/Homecontainer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>ShopCoders | Home</title>
        <meta name="description" content="Welcome to ShopCoders" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Homecontainer />

      <br />
    </>
  );
}
