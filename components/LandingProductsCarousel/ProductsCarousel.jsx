import { makeStyles } from "@mui/styles";
import React, { useRef, useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import CarouselItemTeam from "./CarouselItemProducts";
import styles from "../../styles/ProductsCarousel.module.css";
import { useUser } from "@auth0/nextjs-auth0";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },


];

const useStyles = makeStyles(() => ({
    title: {
        flex: 1,
        color: "black",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        alignItems: "center",
        textAlign: "center",
    },
}));



const ProductsCarousel = () => {
    const carouselRef = useRef(null);
    const classes = useStyles();
    const [autoPlay, setAutoPlay] = useState(true);
    const { user, error, isLoading } = useUser();
    const [win, setwin] = useState();
    const [creds, setcreds] = useState({ email: "" });
    let resetTimeout;

    const handleMouse1 = () => {
        clearTimeout(resetTimeout);

        setAutoPlay(false);
    };

    const handleMouse2 = () => {
        setAutoPlay(true);


    };

    const handleEnd = () => {
        clearTimeout(resetTimeout);

        resetTimeout = setTimeout(() => {
            carouselRef?.current?.goTo(0);
        }, 2500);
    };


    useEffect(() => {
        // window is accessible here.

        setwin(window.innerHeight);
    }, []);

    return (
        <>



            {/*   {(user && window.innerWidth > 431) ? <div className={styles.TeamCarousel} >

                <h2>Our Top products for this season 🚀</h2>
                <div onMouseEnter={handleMouse1} onMouseLeave={handleMouse2}>
                    <Carousel

                        ref={carouselRef}
                        breakPoints={breakPoints}
                        // enableAutoPlay
                        // enableAutoPlay={autoPlay}
                        isRTL={false}
                        showButton={true}
                        showArrows={true}
                        pagination={false}
                        autoPlaySpeed={2000}
                        onNextEnd={handleEnd}
                    >
                        <CarouselItemTeam
                            phot="https://i.ibb.co/ZLkD8qr/6.png"
                            name="DaD codes T-shirt"
                            price="$ 35"
                            link="https://shopcoders.com/product/red-linux-t-shirt/"
                        />
                        <CarouselItemTeam
                            phot="https://i.ibb.co/LZX0F8G/7.png"
                            name="Google-It T-shirt"
                            price="$ 35"
                            link="https://shopcoders.com/product/red-linux-t-shirt/"
                        />
                        <CarouselItemTeam
                            phot="https://i.ibb.co/drVKMRK/1.png"
                            name="Developer T-shirt"
                            price="$ 35"
                            link="https://shopcoders.com/product/red-linux-t-shirt/"
                        />
                        <CarouselItemTeam
                            phot="https://i.ibb.co/Kb3vpLB/2.png"
                            name="ESCR T-shirt"
                            price="$ 35"
                            link="https://shopcoders.com/product/red-linux-t-shirt/"
                        />
                        <CarouselItemTeam
                            phot="https://i.ibb.co/JmJ0JCL/3.png"
                            name="Python T-shirt"
                            price="$ 35"
                            link="https://shopcoders.com/product/red-linux-t-shirt/"
                        />
                        <CarouselItemTeam
                            phot="https://i.ibb.co/LPkPf5j/4.png"
                            name="Black Linux T-shirt"
                            price="$ 35"
                            link="https://shopcoders.com/product/red-linux-t-shirt/"
                        />
                        <CarouselItemTeam
                            phot="https://i.ibb.co/0sHTS8d/5.png"
                            name="Sudo T-shirt"
                            price="$ 35"
                            link="https://shopcoders.com/product/red-linux-t-shirt/"
                        />
                        <CarouselItemTeam
                            phot="https://i.ibb.co/ZLkD8qr/6.png"
                            name="Red Linux T-shirt"
                            price="$ 35"
                            link="https://shopcoders.com/product/red-linux-t-shirt/"
                        />

                    </Carousel>
                </div>
            </div> : (user && window.innerWidth < 430) ? <div className={styles.TeamCarousel} >

                <h2>Our Top products for this season 🚀</h2>
                <div onMouseEnter={handleMouse1} onMouseLeave={handleMouse2}>
                    <Carousel

                        ref={carouselRef}
                        breakPoints={breakPoints}
                        // enableAutoPlay
                        // enableAutoPlay={autoPlay}
                        isRTL={false}
                        showButton={false}
                        showArrows={false}
                        pagination={false}
                        autoPlaySpeed={2000}
                        onNextEnd={handleEnd}
                    >
                        <CarouselItemTeam
                            phot="https://i.ibb.co/ZLkD8qr/6.png"
                            name="DaD codes T-shirt"
                            price="$ 35"
                            link="https://shopcoders.com/product/red-linux-t-shirt/"
                        />
                        <CarouselItemTeam
                            phot="https://i.ibb.co/LZX0F8G/7.png"
                            name="Google-It T-shirt"
                            price="$ 35"
                            link="https://shopcoders.com/product/red-linux-t-shirt/"
                        />
                        <CarouselItemTeam
                            phot="https://i.ibb.co/drVKMRK/1.png"
                            name="Developer T-shirt"
                            price="$ 35"
                            link="https://shopcoders.com/product/red-linux-t-shirt/"
                        />
                        <CarouselItemTeam
                            phot="https://i.ibb.co/Kb3vpLB/2.png"
                            name="ESCR T-shirt"
                            price="$ 35"
                            link="https://shopcoders.com/product/red-linux-t-shirt/"
                        />
                        <CarouselItemTeam
                            phot="https://i.ibb.co/JmJ0JCL/3.png"
                            name="Python T-shirt"
                            price="$ 35"
                            link="https://shopcoders.com/product/red-linux-t-shirt/"
                        />
                        <CarouselItemTeam
                            phot="https://i.ibb.co/LPkPf5j/4.png"
                            name="Black Linux T-shirt"
                            price="$ 35"
                            link="https://shopcoders.com/product/red-linux-t-shirt/"
                        />
                        <CarouselItemTeam
                            phot="https://i.ibb.co/0sHTS8d/5.png"
                            name="Sudo T-shirt"
                            price="$ 35"
                            link="https://shopcoders.com/product/red-linux-t-shirt/"
                        />
                        <CarouselItemTeam
                            phot="https://i.ibb.co/ZLkD8qr/6.png"
                            name="Red Linux T-shirt"
                            price="$ 35"
                            link="https://shopcoders.com/product/red-linux-t-shirt/"
                        />
                    </Carousel>
                </div>
            </div> : null}

            {(!user && win > 430) && <div className={styles.TeamCarousel} >

                <h2> Our Top products for this season 🚀</h2>
                <div onMouseEnter={handleMouse1} onMouseLeave={handleMouse2}>
                    <Carousel

                        ref={carouselRef}
                        breakPoints={breakPoints}
                        // enableAutoPlay
                        enableAutoPlay={autoPlay}
                        isRTL={false}
                        showButton={true}
                        showArrows={true}
                        pagination={false}
                        autoPlaySpeed={2000}
                        onNextEnd={handleEnd}
                    >
                        <CarouselItemTeam
                            phot="https://i.ibb.co/ZLkD8qr/6.png"
                            name="DaD codes T-shirt"
                            price="$ 35"
                            link="/"
                        />
                        <CarouselItemTeam
                            phot="https://i.ibb.co/LZX0F8G/7.png"
                            name="Google-It T-shirt"
                            price="$ 35"
                            link="/"
                        />
                        <CarouselItemTeam
                            phot="https://i.ibb.co/drVKMRK/1.png"
                            name="Developer T-shirt"
                            price="$ 35"
                            link="/"
                        />
                        <CarouselItemTeam
                            phot="https://i.ibb.co/Kb3vpLB/2.png"
                            name="ESCR T-shirt"
                            price="$ 35"
                            link="/"
                        />
                        <CarouselItemTeam
                            phot="https://i.ibb.co/JmJ0JCL/3.png"
                            name="Python T-shirt"
                            price="$ 35"
                            link="/"
                        />
                        <CarouselItemTeam
                            phot="https://i.ibb.co/LPkPf5j/4.png"
                            name="Black Linux T-shirt"
                            price="$ 35"
                            link="/"
                        />
                        <CarouselItemTeam
                            phot="https://i.ibb.co/0sHTS8d/5.png"
                            name="Sudo T-shirt"
                            price="$ 35"
                            link="/"
                        />
                        <CarouselItemTeam
                            phot="https://i.ibb.co/ZLkD8qr/6.png"
                            name="Red Linux T-shirt"
                            price="$ 35"
                            link="/"
                        />

                    </Carousel>
                </div>
            </div>} */}


            <div>

            </div>
        </>
    );
};

export default ProductsCarousel;