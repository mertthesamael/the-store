import styles from "./style.module.scss"

const ProfileOption = ({children}:{children:React.ReactNode}) => {

    return(
        <div className={styles.option}>
           {children}
        </div>
    )
}

export default ProfileOption;