import Image from "next/image";
import styles from "./style.module.scss"
    

const DetailBackground = ({img}:any) => {
    
    return(
            <div className={styles.wrapper}>
            <Image className={styles.bgimg} src={img} alt='bg' fill style={{objectFit:'cover'}}/>
            <div className={styles.blurLayer}/>
            </div>
        )
}

export default DetailBackground;