import "./style.scss"

const SecondaryRadio = ({label,name}:{label:string,name:string}) => {

    return(
        <label className="container" >{label}
            <input type="radio"  name={name}/>
            <span className="checkmark" />
        </label>

    )
}

export default SecondaryRadio