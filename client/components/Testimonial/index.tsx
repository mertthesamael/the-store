import styles from "./style.module.scss"
import {Testimonial} from "../../containers/home-testimonial/constants"

const Testimonial = ({title,desc}:{title:string, desc:Array<Testimonial>}) => {

    return(
        <div className={styles.testimonial}>
            <h1>{title}</h1>
            {desc.map((desc:any, _i:any) => <p key={_i}>{desc.content}</p>)}
        </div>
    )
}

export default Testimonial