import Header from "@/components/Header"
import DetailContainer from "@/containers/detail-container"
import styles from "./style.module.scss"
import { Suspense } from "react";



const ItemId = async({params}:any) => {

    return(
        <main className={styles.product}>
            <Header />
            <Suspense fallback={<h1 style={{color:'white'}}>Loading</h1>}>
            <DetailContainer id={params.itemId}/>
            </Suspense>
        </main>
    )
}

export default ItemId