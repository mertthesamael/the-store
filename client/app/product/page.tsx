
import Image from "next/image"
import styles from "./style.module.scss"
import Header from "@/components/Header"
import jump from "@/assets/png/jump.png"
import DetailContainer from "@/containers/detail-container"
import axios from "axios"
import { Product } from "@/types/types"

interface SearchParams {
    id:string
}

const getItem = async(id:any) => {
    const res = await axios.post("http://localhost:3000/api/products/getSingle",{id:id})
    return res.data
}

const Product = async({searchParams}:{searchParams:SearchParams}) => {
    const data : Product = await getItem(searchParams.id)
   

    return(
        <main className={styles.product}>
            <Header />
            <Image className={styles.bgimg} src={data.img} alt='bg' fill style={{objectFit:'cover'}}/>
            <div className={styles.product__blurLayer}/>
            <DetailContainer item={data}/>
        </main>
    )
}

export default Product