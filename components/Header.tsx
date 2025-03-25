"use client"

import Image from "next/image"
import logo from '../public/images/logo.png'
import styles from './Header.module.css';
import { useSelector } from "react-redux";
import { RootState } from '../lib/store/store';

export default function Header() {
    const length = useSelector((state: RootState) => state.cart.length);

    return (
        <>

            <div className={styles.header}>
                <div className={styles.left}>
                    <Image src={logo} alt="NextZon logo" />
                    <h1>NextZon</h1>
                </div>

                <div className={styles.right}>
                    <button> 🛒 Cart ({length})</button>
                </div>
            </div>

        </>
    )
}