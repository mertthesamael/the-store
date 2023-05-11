import styles from "./style.module.scss"
import HomeCategories from "@/containers/home-categories";
import HomeTestimonial from "@/containers/home-testimonial";
import HomeWelcome from "@/containers/home-welcome";



export default function Home() {

  return (
    <main className={styles.home}>
     <HomeWelcome></HomeWelcome>
     <HomeTestimonial></HomeTestimonial>
     <HomeCategories></HomeCategories>
    </main>
  )
}
