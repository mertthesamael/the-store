"use client"
import PrimaryInput from "@/components/Inputs/PrimaryInput"
import styles from "./style.module.scss"
import Image from "next/image"
import address from "@/assets/png/icon/address.png"


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
                <div className={styles.paymentForm__address__title}>
                <Image  alt="icon" src={address}/>
                <h1>Address</h1>
                <p>Saved Adress (0)</p>
                </div>
                <div className={styles.paymentForm__address__inputs}>
                    <PrimaryInput iconless darkIcon color='black' lineColor='black'/>
                    <PrimaryInput iconless darkIcon color='black' lineColor='black'/>
                    <PrimaryInput iconless darkIcon color='black' lineColor='black'/>
                    <PrimaryInput iconless darkIcon color='black' lineColor='black'/>
                </div>
            </div>
        </div>
    )
}

export default PaymentForm