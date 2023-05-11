import Category from "@/components/Category";
import styles from "./style.module.scss"


const HomeCategories = () => {


    return(
        <section className={styles.categories}>
            <div className={styles.categories__banner}>
                Experience<br/>
                Products
            </div>
            <h1>Categories</h1>
            <div className={styles.categories__items}>
                <Category></Category>
                <Category></Category>
                <Category></Category>
                <Category></Category>
            </div>
        </section>
    )
}

export default HomeCategories;