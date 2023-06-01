import Header from "@/components/Header"
import ItemsBanner from "@/containers/items-banner";
import ItemsBody from "@/containers/items-body";
import styles from "./style.module.scss"
import { Product } from "@/types/types";

const getAllItems = async() => {
    const res = await fetch("http://localhost:3000/api/products/getAll")
    return res.json()
}

const Products = async() => {
    const items : Product[] = await getAllItems()
    
    return(
        <main className={styles.products}>
            <Header />
            <ItemsBanner />
            <ItemsBody data={items}/>
        </main>
    )
}

export default Products;