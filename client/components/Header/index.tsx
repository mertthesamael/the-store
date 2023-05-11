import Image from "next/image";
import UserButton from "../UserButton";
import styles from "./styles.module.scss"
import Logo from "@/assets/png/logo.png"


const Header = () => {

    return(
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <Image src={Logo} alt="Logo Icon" width={50} height={50}></Image>
            </div>
            <div className={styles.header__nav}>
                <nav>
                    <a>Navigate</a>
                    <a>Navigate</a>
                    <a>Navigate</a>
                    <a>Navigate</a>
                </nav>
                <UserButton number={2}></UserButton>
            </div>
        </header>
    )
}

export default Header;