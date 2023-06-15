import Header from "@/components/Header"
import DetailContainer from "@/containers/detail-container"
import styles from "./style.module.scss"
import { Suspense } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import LoadingText from "@/components/LoadingText";



const ItemId = ({params}:any) => {

    return(
        <main className={styles.product}>
            <Header />
            <Suspense fallback={<LoadingText />}>
                <DetailContainer id={params.itemId}/>
            </Suspense>
        </main>
    )
}

export default ItemId