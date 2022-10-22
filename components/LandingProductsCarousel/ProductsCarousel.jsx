import { makeStyles } from "@mui/styles";
import React, { useRef, useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import CarouselItemTeam from "./CarouselItemProducts";
import styles from "../../styles/ProductsCarousel.module.css";
import { useUser } from "@auth0/nextjs-auth0";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
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
        console.log("Mouse Enter");
        setAutoPlay(false);
    };

    const handleMouse2 = () => {
        setAutoPlay(true);

        console.log("Mouse Leave");
    };

    const handleEnd = () => {
        clearTimeout(resetTimeout);
        console.log(carouselRef?.current);
        resetTimeout = setTimeout(() => {
            carouselRef?.current?.goTo(0);
        }, 2500);
    };

    useEffect(() => {
        console.log(localStorage.getItem("useremail"));
    }, []);

    return (
        <>



            {(user && window.innerWidth > 431) ? <div className={styles.TeamCarousel} >

                <h2>Our Top products for this season 🚀</h2>
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
                            phot="https://i.ibb.co/YRTzCXy/7-removebg-preview.png"
                            name="Red Linux T-shirt"
                            price="$ 35"
                            link="https://shopcoders.com/product/red-linux-t-shirt/"
                        />
                        <CarouselItemTeam
                            phot="https://i.ibb.co/YRTzCXy/7-removebg-preview.png"
                            name="Red Linux T-shirt"
                            price="$ 35"
                            link="https://shopcoders.com/product/red-linux-t-shirt/"
                        />
                        <CarouselItemTeam
                            phot="https://i.ibb.co/YRTzCXy/7-removebg-preview.png"
                            name="Red Linux T-shirt"
                            price="$ 35"
                            link="https://shopcoders.com/product/red-linux-t-shirt/"
                        />
                        <CarouselItemTeam
                            phot="https://i.ibb.co/YRTzCXy/7-removebg-preview.png"
                            name="Red Linux T-shirt"
                            price="$ 35"
                            link="https://shopcoders.com/product/red-linux-t-shirt/"
                        />
                        <CarouselItemTeam
                            phot="https://i.ibb.co/YRTzCXy/7-removebg-preview.png"
                            name="Red Linux T-shirt"
                            price="$ 35"
                            link="https://shopcoders.com/product/red-linux-t-shirt/"
                        />
                        <CarouselItemTeam
                            phot="https://i.ibb.co/YRTzCXy/7-removebg-preview.png"
                            name="Red Linux T-shirt"
                            price="$ 35"
                            link="https://shopcoders.com/product/red-linux-t-shirt/"
                        />
                        <CarouselItemTeam
                            phot="https://i.ibb.co/YRTzCXy/7-removebg-preview.png"
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
                        enableAutoPlay={autoPlay}
                        isRTL={false}
                        showButton={false}
                        showArrows={false}
                        pagination={false}
                        autoPlaySpeed={2000}
                        onNextEnd={handleEnd}
                    >
                        <CarouselItemTeam
                            phot="https://i.ibb.co/YRTzCXy/7-removebg-preview.png"
                            name="Red Linux T-shirt"
                            price="$ 35"
                            link="https://shopcoders.com/product/red-linux-t-shirt/"
                        />
                        <CarouselItemTeam
                            phot="https://i.ibb.co/YRTzCXy/7-removebg-preview.png"
                            name="Red Linux T-shirt"
                            price="$ 35"
                            link="https://shopcoders.com/product/red-linux-t-shirt/"
                        />
                        <CarouselItemTeam
                            phot="https://i.ibb.co/YRTzCXy/7-removebg-preview.png"
                            name="Red Linux T-shirt"
                            price="$ 35"
                            link="https://shopcoders.com/product/red-linux-t-shirt/"
                        />
                        <CarouselItemTeam
                            phot="https://i.ibb.co/YRTzCXy/7-removebg-preview.png"
                            name="Red Linux T-shirt"
                            price="$ 35"
                            link="https://shopcoders.com/product/red-linux-t-shirt/"
                        />
                        <CarouselItemTeam
                            phot="https://i.ibb.co/YRTzCXy/7-removebg-preview.png"
                            name="Red Linux T-shirt"
                            price="$ 35"
                            link="https://shopcoders.com/product/red-linux-t-shirt/"
                        />
                        <CarouselItemTeam
                            phot="https://i.ibb.co/YRTzCXy/7-removebg-preview.png"
                            name="Red Linux T-shirt"
                            price="$ 35"
                            link="https://shopcoders.com/product/red-linux-t-shirt/"
                        />
                        <CarouselItemTeam
                            phot="https://i.ibb.co/YRTzCXy/7-removebg-preview.png"
                            name="Red Linux T-shirt"
                            price="$ 35"
                            link="https://shopcoders.com/product/red-linux-t-shirt/"
                        />
                        <CarouselItemTeam
                            phot="https://i.ibb.co/YRTzCXy/7-removebg-preview.png"
                            name="Red Linux T-shirt"
                            price="$ 35"
                            link="https://shopcoders.com/product/red-linux-t-shirt/"
                        />

                    </Carousel>
                </div>
            </div> : null}
        </>
    );
};

export default ProductsCarousel;