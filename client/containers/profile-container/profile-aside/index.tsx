import ProfileOption from "@/components/ProfileOption"
import styles from "./style.module.scss"
import orders from "@/assets/png/ordersbanner.png"
import reviews from "@/assets/png/reviewsbanner.png"
import address from "@/assets/png/adressbanner.png"
import Image from "next/image"

const ProfileAside = () => {

    return(
        <aside className={styles.aside}>
            <div>
                <ProfileOption>
                    <h2>Merto</h2>
                </ProfileOption>
            </div>
            <div className={styles.aside__categories}>
                <ProfileOption>
                    <h2>My Orders</h2>
                    <Image src={orders} style={{objectFit:'cover'}} fill alt="banner img"/>
                </ProfileOption>
                    <ProfileOption>
                        <h2>My Reviews</h2>
                        <Image src={reviews} style={{objectFit:'cover'}} fill alt="banner img"/>
                </ProfileOption>
                    <ProfileOption>
                    <h2>My Address</h2>
                    <Image src={address} style={{objectFit:'cover'}} fill alt="banner img"/>
                </ProfileOption>
            </div>
        </aside>
    )
}

export default ProfileAside