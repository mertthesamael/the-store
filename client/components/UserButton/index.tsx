import styles from "./styles.module.scss"



const UserButton = ({number}:{number:number}) => {

        return(
            <div className={styles.userButton}>
                <p>{number}</p>
            </div>
        )
}

export default UserButton