import Header from "@/components/Header"
import styles from "./style.module.scss"
import CheckoutContainer from "@/containers/checkout-container"


const Checkout = () => {

    return(
        <main className={styles.checkout}>
            <Header/>
             <div className={styles.checkout__body}>
                <CheckoutContainer/>
             </div>
        </main>
    )
}

export default Checkout