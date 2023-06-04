import Header from "@/components/Header"
import ItemsBanner from "@/containers/items-banner";
import ItemsBody from "@/containers/items-body";
import styles from "./style.module.scss"
import { Product } from "@/types/types";
import axios from "axios";
import { Suspense } from "react";


const Products = async() => {
   
    
    return(
        <main className={styles.products}>
            <Header />
            <ItemsBanner />
            <Suspense fallback={<h1 style={{color:'white'}}>Loading</h1>}>
            <ItemsBody />
            </Suspense>
        </main>
    )
}

export default Products;