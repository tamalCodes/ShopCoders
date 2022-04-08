import React from 'react'
import TshirtCard from '../../components/TshirtCard'
import styles from "../../styles/Shoptshirts.module.css"
import Navbar from "../../components/Navbar.jsx"


const Shoptshirts = () => {
    return (
        <>
            <Navbar />
            <div className={`container-fluid ${styles.shirtpage_parent}`}>
                <TshirtCard />
                <TshirtCard />
                <TshirtCard />
                <TshirtCard />
                <TshirtCard />
                <TshirtCard />
                <TshirtCard />
                <TshirtCard />
                <TshirtCard />
                <TshirtCard />
                <TshirtCard />
                <TshirtCard />
                <TshirtCard />
                <TshirtCard />
                <TshirtCard />
            </div>

        </>
    )
}

export default Shoptshirts