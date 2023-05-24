import Image from "next/image"
import ThemeButton from "../Buttons/ThemeButton"
import styles from "./style.module.scss"
import neon from "@/assets/png/neonShirt.png"
import favorite from "@/assets/png/icon/favorite.png"
const FavoriteCard = () => {

    return(
        <div className={styles.favoritecard}>
            <div className={styles.favoritecard__image}>
                <Image src={neon} alt="Favorite" fill/>
            </div>
            <div className={styles.favoritecard__info}>
                <h1>Neon</h1>
                <p>Lorem ipsum dolor sit amen ffalan bişeyler zort...</p>
            </div>
            <div className={styles.favoritecard__cta}>
                 <ThemeButton onClick={""} text={"Buy Now"} color="#46E99B"></ThemeButton>
                 <Image src={favorite} alt="Favorited"/>
            </div>
        </div>
    )
}

export default FavoriteCard