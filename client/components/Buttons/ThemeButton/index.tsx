import styles from "./style.module.scss"

const ThemeButton = ({color,text,onClick}:{color:string, text:string|JSX.Element, onClick:any}) => {

    return(
        <button className={styles.themeButton} style={{backgroundColor:color}} onClick={onClick}>{text}</button>
    )
}

export default ThemeButton