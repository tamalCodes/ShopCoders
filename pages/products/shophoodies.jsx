import React from 'react'
import TshirtCard from '../../components/TshirtCard'
import styles from "../../styles/Shoptshirts.module.css"
import Navbar from "../../components/Navbar.jsx"
import Hoodiescard from '../../components/Hoodiescard'


const Shophoodies = () => {
    return (
        <>
            <Navbar />
            <div className={`container-fluid ${styles.shirtpage_parent}`}>
                <Hoodiescard />
                <Hoodiescard />
                <Hoodiescard />
                <Hoodiescard />
                <Hoodiescard />
                <Hoodiescard />
                <Hoodiescard />
                <Hoodiescard />
                <Hoodiescard />
                <Hoodiescard />
                <Hoodiescard />
                <Hoodiescard />
                <Hoodiescard />
                <Hoodiescard />
                <Hoodiescard />
            </div>

        </>
    )
}

export default Shophoodies