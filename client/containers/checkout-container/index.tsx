import styles from "./style.module.scss"
import CheckoutFinalize from "./checkout-finalize";
import CheckoutPayment from "./checkout-payment"





const CheckoutContainer = () => {

    return(
        <div className={styles.checkoutContainer}>
            <CheckoutPayment/>
            <CheckoutFinalize />
        </div>
    )
}

export default CheckoutContainer;