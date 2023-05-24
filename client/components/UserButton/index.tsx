"use client"
import Link from "next/link"
import ThemeButton from "../Buttons/ThemeButton"
import styles from "./styles.module.scss"
import { useState } from "react"
import { motion } from "framer-motion"



const UserButton = ({number}:{number:number}) => {
    const [isOpen, setIsOpen] = useState(false)
    const openHandler = () => {

        return setIsOpen(!isOpen)
    }
        return(
            <div onClick={openHandler} className={styles.userButton}>
                <p>{number}</p>
                <div style={isOpen?{height:'12rem'} :{height:'0', padding:'0'}} className={styles.userButton__dropdown}>
                    <div className={styles.userButton__dropdown__nav}>
                        <Link href={'/profile'}>Orders</Link>
                        <Link href={'/profile'}>Adress</Link>
                        <Link href={'/profile'}>Reviews</Link>
                        <Link href={'/profile'}>Settings</Link>
                    </div>
                    <div className={styles.userButton__dropdown__checkout}>
                        <ThemeButton color="#46E99B" text={'Checkout'} onClick={""} />
                    </div>
                </div>
            </div>
        )
}

export default UserButton