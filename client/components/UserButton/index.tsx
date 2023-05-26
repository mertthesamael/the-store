"use client"
import Link from "next/link"
import ThemeButton from "../Buttons/ThemeButton"
import styles from "./styles.module.scss"
import { useState } from "react"
import { motion } from "framer-motion"
import { SlArrowLeft } from "react-icons/sl"


const UserButton = ({number, basket}:{number:number, basket?:boolean}) => {
    const [isOpen, setIsOpen] = useState(false)
    const openHandler = () => {

        return setIsOpen(!isOpen)
    }
    if(basket){
        return(
            <div className={styles.quantity}>
                <SlArrowLeft cursor={'pointer'} color="black"/>
                <div className={styles.userButton}>
                    <p>{number}</p>
                </div>
                <SlArrowLeft color="black" cursor={'pointer'} style={{rotate:'180deg'}}/>
            </div>
        )
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
                        <Link href='/checkout'>
                        <ThemeButton color="#46E99B" text={'Checkout'} onClick={""} />
                        </Link>
                    </div>
                </div>
            </div>
        )
}

export default UserButton