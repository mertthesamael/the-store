import Image from "next/image"
import styles from "./style.module.scss"
import Header from "@/components/Header"
import jump from "@/assets/png/jump.png"
import DetailContainer from "@/containers/detail-container"

const Product = () => {


    return(
        <main className={styles.product}>
            <Header />
            <Image className={styles.bgimg} src={jump} alt='bg' fill style={{objectFit:'cover'}}/>
            <div className={styles.product__blurLayer}/>
            <DetailContainer img={jump}/>
        </main>
    )
}

export default Product