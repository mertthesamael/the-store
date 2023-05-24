import styles from "./style.module.scss"
type inputType = "text" | "password" | "radio"
interface Input {
    placeholder:string,
    type:inputType,
    label?:string,
    id:string,
    name:string
}

const SecondaryInput : React.FC<Input> = ({placeholder,type,label,id, name}) => {

    if(label&&type=='radio'){
        return(
        <label className={styles.container} >{label}
            <input type="radio"  name={name}/>
            <span className={styles.checkmark} />
        </label>
       
        )
    }

    return(
        <div style={{display:'grid',gap:'1rem'}}>
        <label>{label}</label>
        <input placeholder={placeholder} name={name} type={type} className={styles.secondaryInput} />
        </div>
    )
}

export default SecondaryInput