"use client"

import React from 'react'
import styles from "./Dropdown.module.css"
import Link from 'next/link';

const Dropdown = ({ open, setOpen }) => {
    function closeDropdown() {
        setOpen(false);
    }



    return (
        <div
            className={`${styles.dropdown_menu} ${open ? `${styles.active}` : `${styles.inactive}`
                }`}
        >
            <Link
                href={"/keyboards"}
                passHref
                className={`${styles.dropdown_texts} block`}
                onClick={() => {
                    closeDropdown();
                }}
            >
                Keyboards
            </Link>
            <Link
                href={"/monitors"}
                passHref
                className={`${styles.dropdown_texts} block`}
                onClick={() => {
                    closeDropdown();
                }}
            >
                Monitors
            </Link>
            <Link
                href={"/swags"}
                passHref
                className={`${styles.dropdown_texts} block`}
                onClick={() => {
                    closeDropdown();
                }}
            >
                Swags
            </Link>
        </div>
    );
}

export default Dropdown