import React from 'react'
import TshirtCard from '../../components/TshirtCard'
import styles from "../../styles/Shoptshirts.module.css"
import Navbar from "../../components/Navbar.jsx"
import Mugscard from '../../components/Mugscard'


const Shopmugs = () => {
    return (
        <>
            <Navbar />
            <div className={`container-fluid ${styles.shirtpage_parent}`}>
                <Mugscard />
                <Mugscard />
                <Mugscard />
                <Mugscard />
                <Mugscard />
                <Mugscard />
                <Mugscard />
                <Mugscard />
                <Mugscard />
                <Mugscard />
                <Mugscard />
                <Mugscard />
                <Mugscard />
                <Mugscard />
                <Mugscard />
            </div>

        </>
    )
}

export default Shopmugs