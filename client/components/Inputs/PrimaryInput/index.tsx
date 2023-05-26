import Image from "next/image"
import styles from "./style.module.scss"
import profile from "@/assets/svg/profile.svg"

const PrimaryInput = ({color, lineColor, darkIcon, type, iconless}:any) => {
    if(type==='tel'){
        return(
            <div style={{display:'flex',gap:'2rem'}}>
            <div style={{borderBottom:`1px solid ${lineColor}`, width:'7rem'}} className={styles.primaryInput}>
            <label>
                <Image style={darkIcon&&{filter:'brightness(0)'}} src={profile} alt='label'></Image>
            </label>
            <input maxLength={3} style={{color:color}}  id="test" placeholder='+XX'/>
            </div>
            <div style={{borderBottom:`1px solid ${lineColor}`, paddingLeft:'0'}} className={styles.primaryInput}>
            <label>
            </label>
            <input style={{color:color}}  id="test" placeholder='Merto'/>
            </div>
            </div>
        )
    }
    return(
        <div style={{borderBottom:`1px solid ${lineColor}`}} className={styles.primaryInput}>
            <label>
                {!iconless&&<Image style={darkIcon&&{filter:'brightness(0)'}} src={profile} alt='label'></Image>}
            </label>
            <input style={{color:color}}  id="test" placeholder='Merto'/>
        </div>
    )
}

export default PrimaryInput

