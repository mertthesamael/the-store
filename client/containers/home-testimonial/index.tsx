import Testimonial from "@/components/Testimonial";
import styles from "./styles.module.scss"
import { testimonial1,testimonial2,testimonial3 } from "./constants";

const HomeTestimonial = () => {

    return(
        <main id='testimonial' className={styles.testimonial}>
            <div className={styles.testimonial__banner}>
                <h1>Some Important Info</h1>
            </div>
            <div className={styles.testimonial__items}>
                <Testimonial title='The Store' desc={testimonial1}></Testimonial>
                <Testimonial title='The Store' desc={testimonial2}></Testimonial>
                <Testimonial title='The Store' desc={testimonial3}></Testimonial>
            </div>
        </main>
    )
}


export default HomeTestimonial;