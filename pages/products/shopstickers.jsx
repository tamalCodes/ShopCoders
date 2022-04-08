import React from 'react'
import TshirtCard from '../../components/TshirtCard'
import styles from "../../styles/Shoptshirts.module.css"
import Navbar from "../../components/Navbar.jsx"
import Stickerscard from '../../components/Stickerscard'


const shopstickers = () => {
    return (
        <>
            <Navbar />
            <div className={`container-fluid ${styles.shirtpage_parent}`}>
                <Stickerscard />
                <Stickerscard />
                <Stickerscard />
                <Stickerscard />
                <Stickerscard />
                <Stickerscard />
                <Stickerscard />
                <Stickerscard />
                <Stickerscard />
                <Stickerscard />
                <Stickerscard />
                <Stickerscard />
                <Stickerscard />
                <Stickerscard />
                <Stickerscard />
            </div>

        </>
    )
}

export default shopstickers