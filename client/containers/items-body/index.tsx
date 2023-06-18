import ProductCard from "@/components/ProductCard"
import styles from "./style.module.scss"
import CategoryAside from "@/components/CategoryAside"
import RangeInput from "@/components/Inputs/RangeInput"
import { Product } from "@/types/types"
import LoadingText from "@/components/LoadingText"
import axios from "axios"
import next from "next/types"



const getAllItems = async() => {
    const res = await fetch(process.env.API_ENDPOINT || "http://localhost:3000" + "/api/products/getAll", {next:{revalidate:10}})
  
    await new Promise((resolve) => setTimeout(resolve,1000))
    return res.json()
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