import SecondaryInput from "@/components/Inputs/SecondaryInput"
import styles from "./style.module.scss"
import ThemeButton from "@/components/Buttons/ThemeButton"

const SignupForm = () => {

    return(
        <form className={styles.signupForm}>
        <div className={styles.signupForm__upper}>
            <div className={styles.signupForm__upper__mail}>
                <SecondaryInput label="Email" id='mail' name="mail" type='text' placeholder='Email' />
            </div>
            <div className={styles.signupForm__upper__details}>
                <div className={styles.signupForm__upper__details__password}>

            <SecondaryInput label="Password" id='password' name="password" type='password' placeholder='Password' />
            <SecondaryInput label="Password Again" id='password' name="password" type='password' placeholder='Password' />
                </div>
                <div className={styles.signupForm__upper__details__gender}>
                    <div className={styles.signupForm__upper__details__gender__radio}>
                        <p>
                        Gender
                        </p>
                        <div className={styles.signupForm__upper__details__gender__radio__inputs}>
                        <SecondaryInput label="Male" id='password' name="gender" type='radio' placeholder='Password' />
                        <SecondaryInput label="Female" id='password' name="gender" type='radio' placeholder='Password' />
                        <SecondaryInput label="Other" id='password' name="gender" type='radio' placeholder='Password' />
                        </div>
                    </div>
                    <div className={styles.signupForm__upper__details__gender__custom}>
                        <SecondaryInput label="Your Gender" id='password' name="password" type='text' placeholder='Custom Gender' /> 
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.signupForm__bottom}>
            <ThemeButton onClick={""} text='Sign Up' color="#46E99B" />
        </div>
    </form>
    )
}

export default SignupForm