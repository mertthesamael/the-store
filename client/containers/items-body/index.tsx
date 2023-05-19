import ProductCard from "@/components/ProductCard"
import styles from "./style.module.scss"


const ItemsBody = () => {

    return(
        <section className={styles.body}>
            <div className={styles.body__category}>
            </div>
            <div className={styles.body__items}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </section>
    )
}

export default ItemsBody