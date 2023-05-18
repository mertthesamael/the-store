import Image from "next/image"
import styles from "./style.module.scss"
import logo from "@/assets/png/logobigger.png"


const HomeFooter = () => {


    return(
        <section className={styles.footer}>
            <div className={styles.footer__container}>
                <Image height={150} width={150} src={logo} alt="logo"/>
                <div className={styles.footer__container__text}>
                    <h1>The Store</h1>
                    <p>Designed and Developed by @Merto</p>
                </div>
            </div>
            <a href="#welcome" className={styles.footer__navigate}>Back to Top</a>
        </section>
    )
}

export default HomeFooter