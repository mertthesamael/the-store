import PaymentForm from "./payment-form"
import styles from "./style.module.scss"



const CheckoutPayment = () => {

    return(
        <div className={styles.checkoutPayment}>
            <div>
            <h1>Checkout</h1>
            <p>Lorem ipsum dolor sit amen açıklama yazısı zart zurt</p>
            </div>
            <div className={styles.checkoutPayment__form}>
                <h2>1. Contact Information</h2>
                <PaymentForm />
            </div>
            <div className={styles.checkoutPayment__paymentInfo}>
                <div className={styles.checkoutPayment__paymentInfo__desc}>
                    <h1>2. Payment Information</h1>
                    <p>Lorem ipsum dolor sit amen açıklama yazısı zart zurt açıklama yazısı zart zurt açıklama yazısı zart zurt açıklama yazısı zart zurt</p>
                </div>
                <div className={styles.checkoutPayment__paymentInfo__cardDetail}>
                    <div className={styles.checkoutPayment__paymentInfo__cardDetail__card}>
                        <div className={styles.checkoutPayment__paymentInfo__cardDetail__card__chip}>
                            <div className={styles.checkoutPayment__paymentInfo__cardDetail__card__chip__icon}/>
                        </div>
                        <div className={styles.checkoutPayment__paymentInfo__cardDetail__card__number}>
                                <input maxLength={4} placeholder="XXXX"></input>
                                <input maxLength={4} placeholder="XXXX"></input>
                                <input maxLength={4} placeholder="XXXX"></input>
                                <input maxLength={4} placeholder="XXXX"></input>
                                <input maxLength={4} placeholder="XXXX"></input>
                        </div>
                        <div className={styles.checkoutPayment__paymentInfo__cardDetail__card__owner}>
                            <div className={styles.checkoutPayment__paymentInfo__cardDetail__card__owner__inputs}>
                            <input placeholder="Jhon Doe"></input>
                            <input placeholder="CVV"></input>
                            </div>
                            <div className={styles.checkoutPayment__paymentInfo__cardDetail__card__owner__cardLogo}>
                                <div className={styles.left}/>
                                <div className={styles.right}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CheckoutPayment