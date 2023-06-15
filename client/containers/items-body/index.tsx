import ProductCard from "@/components/ProductCard"
import styles from "./style.module.scss"
import CategoryAside from "@/components/CategoryAside"
import RangeInput from "@/components/Inputs/RangeInput"
import { Product } from "@/types/types"
import LoadingText from "@/components/LoadingText"
import axios from "axios"



const getAllItems = async() => {
    const res = await axios("https://the-store-gamma.vercel.app/api/products/getAll")
  
    await new Promise((resolve) => setTimeout(resolve,1000))
    return res.data
}

const ItemsBody :any = async() => {
    const data = await getAllItems()
   
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
                {data.map((el:Product,_i:number) => <ProductCard key={_i} item={el}/>)}
            </div>
        </section>
    )
}

export default ItemsBody