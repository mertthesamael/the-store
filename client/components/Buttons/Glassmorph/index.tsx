import styles from "./style.module.scss"


const ButtonGlass = ({text,onClick}:{text:string|JSX.Element, onClick:any}) => {

    return(
        <button className={styles.buttonGlass} onClick={onClick}>{text}</button>
    )
}

export default ButtonGlass