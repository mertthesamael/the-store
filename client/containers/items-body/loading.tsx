import ProductCard from "@/components/ProductCard"
import styles from "./style.module.scss"
import CategoryAside from "@/components/CategoryAside"
import RangeInput from "@/components/Inputs/RangeInput"
import { Product } from "@/types/types"




const ItemsLoading :any = async() => {
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
                {Array.from({length: 10,}, (_,i) => i +1).map((_i) => <ProductCard key={_i} loading/>)}
            </div>
        </section>
    )
}

export default ItemsLoading