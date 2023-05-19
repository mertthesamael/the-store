import Header from "@/components/Header"
import ItemsBanner from "@/containers/items-banner";
import ItemsBody from "@/containers/items-body";
import styles from "./style.module.scss"



const Products = () => {


    return(
        <main className={styles.products}>
            <Header />
            <ItemsBanner />
            <ItemsBody />
        </main>
    )
}

export default Products;