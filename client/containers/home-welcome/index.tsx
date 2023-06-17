"use client"
import Header from "@/components/Header"
import styles from "./style.module.scss"
import { useEffect } from "react"
import axios from "axios"


const HomeWelcome = () => {
    /*id
    author
    product
    rate*/
    let product = {
        id: '6485d353c7ebbb15cb24751c',
        name: 'Terror',
        img: 'https://raw.githubusercontent.com/mertthesamael/the-store/main/client/assets/png/products/terror.png',
        price: 59.9,
        size: [ [Object], [Object], [Object] ],
        quantity: 60
      }
    const fetchData = async() => {
        const data = await axios.post("/api/user/review",{product:product,rate:3,author:"test"})
     
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