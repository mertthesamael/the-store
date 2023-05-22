import Image from "next/image"
import styles from "./style.module.scss"
import profile from "@/assets/svg/profile.svg"

const PrimaryInput = () => {

    return(
        <div className={styles.primaryInput}>
            <label>
                <Image src={profile} alt='label'></Image>
            </label>
            <input id="test" value='Merto'/>
        </div>
    )
}

export default PrimaryInput

