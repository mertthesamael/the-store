import Image from "next/image"
import styles from "./style.module.scss"

const Category = ({category,img}:{category:string, img:any}) => {

    return(
        <div className={styles.category}>
            <Image src={img} style={{objectFit:'cover'}} fill alt="category banner"></Image>
            <h2>{category}</h2>
        </div>
    )
}

export default Category