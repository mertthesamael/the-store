import ProductCard from "@/components/ProductCard"
import styles from "./style.module.scss"
import CategoryAside from "@/components/CategoryAside"
import RangeInput from "@/components/Inputs/RangeInput"


const ItemsBody = () => {

    return(
        <section className={styles.body}>
            <div className={styles.body__category}>
                <div className={styles.body__category__wrapper}>
                    <CategoryAside text='Category'/>
                    <CategoryAside text='Category'/>
                    <CategoryAside text='Category'/>
                    <CategoryAside text='Category'/>
                <div className={styles.body__category__range}>
                    <h1>Price Range</h1>
                    <RangeInput rtl={false}></RangeInput>
                </div>
                </div>
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