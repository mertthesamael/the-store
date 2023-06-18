"use client"
import Image from "next/image"
import styles from "./style.module.scss"
import ThemeButton from "../Buttons/ThemeButton"
import Link from "next/link"
import { Product } from "@/types/types"

interface ProductCardProps {
    item?:Product,
    loading?:boolean
}
const ProductCard : React.FC<ProductCardProps>= ({item,loading}) => {
    
    if(loading){
        return(
            <div className={styles.card}>
                <h1>Loading</h1>
            </div>
        )
    }
   
    return(
        <div className={styles.card}>
            <Link href={`/products/${item?.id}`} className={styles.card__image}>
                <Image src={item?item.img:""} alt="product" fill style={{objectFit:'cover'}}></Image>
            </Link>
            <Link href={`/products/${item?.id}`} className={styles.card__info}>
                <div>
                    <h1>
                        {item?.name}
                    </h1>
                    <p>
                    Lorem ipsum dolor sit amen ffalan bişeyler zort...
                    </p>
                </div>
                <div className={styles.card__info__cta}>
                    <ThemeButton text={'Buy Now'} color="rgba(70, 233, 155, 0.94)" onClick={""}></ThemeButton>
                    <h2>{item?.price.toFixed(2)}$</h2>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard