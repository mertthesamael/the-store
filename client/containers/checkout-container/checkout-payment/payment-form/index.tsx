"use client"
import PrimaryInput from "@/components/Inputs/PrimaryInput"
import styles from "./style.module.scss"



const PaymentForm = () => {

    return(
        <div className={styles.paymentForm}>
            <div className={styles.paymentForm__identity}>
                <PrimaryInput darkIcon color='black' lineColor='black'/>
                <PrimaryInput darkIcon color='black' lineColor='black'/>
                <PrimaryInput type='tel' darkIcon color='black' lineColor='black'/>
                <PrimaryInput darkIcon color='black' lineColor='black'/>
            </div>
            <div className={styles.paymentForm__address}>
            <PrimaryInput iconless darkIcon color='black' lineColor='black'/>
            <PrimaryInput iconless darkIcon color='black' lineColor='black'/>
            <PrimaryInput iconless darkIcon color='black' lineColor='black'/>
            <PrimaryInput iconless darkIcon color='black' lineColor='black'/>
            <PrimaryInput iconless darkIcon color='black' lineColor='black'/>
            </div>
        </div>
    )
}

export default PaymentForm