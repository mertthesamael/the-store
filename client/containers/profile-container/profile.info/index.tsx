import ButtonGlass from "@/components/Buttons/Glassmorph";
import styles from "./style.module.scss"
import PrimaryInput from "@/components/Inputs/PrimaryInput";
import FavoriteCard from "@/components/FavoriteCard";


const ProfileInfo = () => {

    return(
        <div className={styles.info}>
            <div className={styles.info__inputs}>

            <PrimaryInput></PrimaryInput>
            <PrimaryInput></PrimaryInput>
            <PrimaryInput></PrimaryInput>
            <PrimaryInput></PrimaryInput>
            <PrimaryInput></PrimaryInput>
            <button className={styles.info__inputs__submit}>Save</button>
            </div>
            <div className={styles.info__favorites}>
                <div>
                    <h1>Favorites</h1>
                </div>
                <div className={styles.info__favorites__items}>
                <FavoriteCard />
                <FavoriteCard />
                <FavoriteCard />
                <FavoriteCard />
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;