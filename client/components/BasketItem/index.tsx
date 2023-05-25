import Image from "next/image"
import styles from "./style.module.scss"
import jump from "@/assets/png/jump.png"
import UserButton from "../UserButton"
const BasketItem = () => {

    return(
        <div className={styles.basketItem}>
            <div className={styles.basketItem__image}>
                <Image width={121} height={121} style={{borderRadius:'5px'}} src={jump} alt="Basket Item Image"/>
            </div>
            <div className={styles.basketItem__desc}>
                <div className={styles.basketItem__desc__info}>
                    <h1>Jump</h1>
                    <p>36 EU - 4US</p>
                </div>
                <div className={styles.basketItem__desc__total}>
                <h2>59.90$</h2>
                <UserButton number={1} basket></UserButton>
                </div>
            </div>
        </div>
    )
}

export default BasketItem