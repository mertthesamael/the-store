import { useEffect } from "react"
import styles from "./style.module.scss"
import 'aos/dist/aos.css'


const Review = () => {
 
    return(
        <div data-aos-delay="100" data-aos-duration="500" className={styles.review}>
            <h1>Evil Merto - 1/5</h1>
            <p>
            Lorem ipsum dolor sit amen yaragim gibi amk sakin almayin amina koyam bokum gibii
            </p>
        </div>
    )
}

export default Review