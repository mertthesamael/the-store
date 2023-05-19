import Image from "next/image"
import styles from "./style.module.scss"
import jump from "@/assets/png/jump.png"
import ThemeButton from "../Buttons/ThemeButton"

const ProductCard = () => {


    return(
        <div className={styles.card}>
            <div className={styles.card__image}>
                <Image src={jump} alt="product" fill style={{objectFit:'cover'}}></Image>
            </div>
            <div className={styles.card__info}>
                <div>
                    <h1>
                        Jump
                    </h1>
                    <p>
                    Lorem ipsum dolor sit amen ffalan bişeyler zort...
                    </p>
                </div>
                <div className={styles.card__info__cta}>
                    <ThemeButton text={'Buy Now'} color="rgba(70, 233, 155, 0.94)" onClick={""}></ThemeButton>
                    <h2>59.90$</h2>
                </div>
            </div>
        </div>
    )
}

export default ProductCard