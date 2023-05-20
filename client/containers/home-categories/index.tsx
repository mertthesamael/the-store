"use client"
import Category from "@/components/Category";
import styles from "./style.module.scss"
import jump from '@/assets/png/jump.png'
import cargo from '@/assets/png/cargo.png'
import terror from '@/assets/png/terror.png'
import spray from '@/assets/png/spray.png'
import Wave from "react-wavify"
const HomeCategories = () => {


    return(
        <section className={styles.categories}>
            <div className={styles.categories__banner}>
                Experience<br/>
                Products
            </div>
            <h1>Categories</h1>
            <div className={styles.categories__items}>
                <Category category={"Shirt"} img={spray}></Category>
                <Category category={"Hoodie"} img={terror}></Category>
                <Category category={"Leggings"} img={cargo}></Category>
                <Category category={"Shoe"} img={jump}></Category>
            </div>
            <Wave style={{position:'absolute', bottom:'-1rem', height:'17rem'}} fill="#00FF7F" 
             options={{
                height: 50,
                amplitude: 40,
                speed: 0.15,
                points: 6
            }}></Wave>
        </section>
    )
}

export default HomeCategories;