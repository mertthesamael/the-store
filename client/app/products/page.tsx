import Header from "@/components/Header"
import ItemsBanner from "@/containers/items-banner";
import ItemsBody from "@/containers/items-body";
import styles from "./style.module.scss"
import { Product } from "@/types/types";
import axios from "axios";
import { Suspense } from "react";
import ItemsLoading from "@/containers/items-body/loading";


const Products = async() => {
   
    
    return(
        <main className={styles.products}>
            <Header />
            <ItemsBanner />
            <Suspense fallback={<ItemsLoading></ItemsLoading>}>
                <ItemsBody />
            </Suspense>
        </main>
    )
}

export default Products;