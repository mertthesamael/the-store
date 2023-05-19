import styles from "./style.module.scss"


const CategoryAside = ({text}:{text:string}) => {

    return(
        <div className={styles.category}>
            <h2>{text}</h2>
        </div>
    )
}

export default CategoryAside