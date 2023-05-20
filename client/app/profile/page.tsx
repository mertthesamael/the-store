import Header from "@/components/Header"
import styles from "./style.module.scss"
import ProfileContainer from "@/containers/profile-container"


const Profile = () => {

    return(
        <main className={styles.profile}>
            <Header />
            <ProfileContainer />
        </main>
    )
}

export default Profile