"use client"
import SecondaryInput from "@/components/Inputs/SecondaryInput"
import styles from "./style.module.scss"
import ThemeButton from "@/components/Buttons/ThemeButton"

const LoginForm = () => {

    return(
        <form className={styles.loginForm}>
            <div className={styles.loginForm__upper}>
                <SecondaryInput label="Email" id='mail' name="mail" type='text' placeholder='Email' />
                <SecondaryInput label="Password" id='password' name="password" type='password' placeholder='Password' />
            </div>
            <div className={styles.loginForm__bottom}>
                <ThemeButton onClick={""} text='Login' color="#FFD362F0" />
            </div>
        </form>
    )
}

export default LoginForm