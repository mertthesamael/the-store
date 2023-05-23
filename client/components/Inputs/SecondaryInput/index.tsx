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

    if(label&&type!='radio'){
        return(
        <div style={{display:'grid', gap:'1rem'}}>
            <label style={{color:'#645353', fontSize:'24px', fontWeight:'400'}} htmlFor={id}>{label}</label>
            <input placeholder={placeholder} name={name} type={type} className={styles.secondaryInput} />
        </div>
        )
    }

    return(
        <input placeholder={placeholder} name={name} type={type} className={styles.secondaryInput} />
    )
}

export default SecondaryInput