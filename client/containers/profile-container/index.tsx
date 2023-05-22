import styles from "./style.module.scss"
import ProfileAside from "./profile-aside"
import ProfileInfo from "./profile.info"

const ProfileContainer = () => {

    return(
        <div className={styles.profile}>
            <div className={styles.profile__inner}>
                <ProfileAside />
                <div className={styles.profile__inner__content}>
                    <div className={styles.profile__inner__content}>
                        <ProfileInfo />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileContainer