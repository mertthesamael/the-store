import styles from "./style.module.scss"
import ProfileAside from "./profile-aside"

const ProfileContainer = () => {

    return(
        <div className={styles.profile}>
            <div className={styles.profile__inner}>
                <ProfileAside />
                <div className={styles.profile__inner__content}>

                </div>
            </div>
        </div>
    )
}

export default ProfileContainer