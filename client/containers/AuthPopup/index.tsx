"use client"
import Image from "next/image"
import styles from "./style.module.scss"
import logo from "@/assets/png/logoLogin.png"
import close from "@/assets/png/icon/close.png"
import { useState } from "react"
import { motion } from "framer-motion"
import ThemeButton from "@/components/Buttons/ThemeButton"
import SecondaryInput from "@/components/Inputs/SecondaryInput"
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"
const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }
const AuthPopup = () => {
    const [isOpen, setIsOpen] = useState(false)
    const closeHandle = () => {
        return setIsOpen(false)
    }
    return(
        <motion.div  
        initial={{ height: '0'}}
        animate={{ height: isOpen ? '100%' : 0}}
        transition={{ duration: 0.3 }}
        style={{ overflow: 'hidden' }} className={styles.popup}>
            <Image style={{position:'absolute', top:'2rem', right:'0', left:'0', margin:'0 auto'}} src={logo} alt="icon"></Image>
            <Image onClick={closeHandle} style={{position:'absolute', top:'2rem', right:'2rem', cursor:'pointer'}} src={close} alt="icon"></Image>
            <div className={styles.popup__inner}>
                <div className={styles.popup__inner__form}>
                    <SignupForm/>
                </div>
                <div className={styles.popup__inner__desc}>
                    <h1>Join Us!</h1>
                    <p>Lorem ipsum dolor sit amen zart zurt ve biraz da zort falan bişeyler bilmiyorum ben naber knk iyi bende ne olsun hayat bana waikiki way way ama cok da degil bilmiyom random kelimeler seks 1 2 3</p>
                    <div className={styles.popup__inner__desc__buttons}>
                    <ThemeButton onClick={""} text='Login' color="#FFD362F0" />
                    <ThemeButton onClick={""} text='Sign Up' color="#46E99B" />
                    </div>

                </div>
            </div>
        </motion.div>
    )
}

export default AuthPopup