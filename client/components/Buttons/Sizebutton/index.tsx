import styles from "./style.module.scss"


const SizeButton = ({text}:{text:string}) => {

    return(
        <button className={styles.sizeButton}>{text}</button>
    )
}


export default SizeButton;