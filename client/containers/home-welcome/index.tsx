"use client"
import Header from "@/components/Header"
import styles from "./style.module.scss"
import { useEffect } from "react"
import axios from "axios"


const HomeWelcome = () => {
    const fetchData = async() => {
        const data =await axios("/api/test")
        console.log(data)
        
    }
    useEffect(() => {
        fetchData()
    },[])
    return(
        <section id='welcome' className={styles.welcome}>
            <Header></Header>
            <div className={styles.welcome__introduction}>
                <div className={styles.welcome__introduction__brand}>
                    <h2>This is</h2>
                    <h1>The Store</h1>
                </div>
                <div className={styles.welcome__introduction__desc}>
                    <p>The stroee lorem ipsum dolor sit amen dolor sit lore. Lorem dlor aman sit loei is the key of the zort The stroee lorem ipsum dolor sit amen dolor sit lore. Lorem dlor aman sit loei is the key of the zort sum dolor sit amen dolor sit lore. Lorem dlor aman sit loei is the key of the zort </p>
                </div>
                <a className={styles.welcome__introduction__ctaButton} href="#testimonial">
                
                    Explore
                
                </a>
             
            </div>
        </section>
    )
}

export default HomeWelcome