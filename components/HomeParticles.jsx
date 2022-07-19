import React from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const HomeParticles = () => {

    const particlesInit = async (main) => {


        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };


    return (
        <>

            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{

                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 80,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#646FD4",
                        },
                        links: {
                            color: "#646FD4",
                            distance: 150,
                            enable: true,
                            opacity: 0.06,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: true,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 120,
                        },
                        opacity: {
                            value: 0.2,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />

        </>
    )
}

export default HomeParticles