import BasketItem from "@/components/BasketItem"
import styles from "./style.module.scss"
import ThemeButton from "@/components/Buttons/ThemeButton"



const CheckoutFinalize = () => {

    return(
        <div className={styles.checkoutFinalize}>
            <div className={styles.checkoutFinalize__items}>
                <BasketItem></BasketItem>
                <BasketItem></BasketItem>
            </div>
            <hr/>
            <div className={styles.checkoutFinalize__cost}>
                <div>
                    <h3>Subtotal</h3>
                    <p>310,00$</p>
                </div>
                <div>
                    <h3>Shipping</h3>
                    <p>10,00$</p>
                </div>
            </div>
            <hr/>
            <div className={styles.checkoutFinalize__purchase}>
                <div className={styles.checkoutFinalize__purchase__total}>
                    <h3>Total</h3>
                    <p><span>USD</span>320,00$</p>
                </div>
                <ThemeButton color="black" text={'PURCHASE'} onClick={''}></ThemeButton>
            </div>
        </div>
    )
}

export default CheckoutFinalize