import ProductCard from "@/components/ProductCard"
import styles from "./style.module.scss"
import CategoryAside from "@/components/CategoryAside"


const ItemsBody = () => {

    return(
        <section className={styles.body}>
            <div className={styles.body__category}>
                <CategoryAside text='Category'/>
                <CategoryAside text='Category'/>
                <CategoryAside text='Category'/>
                <CategoryAside text='Category'/>
            </div>
            <div className={styles.body__items}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
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