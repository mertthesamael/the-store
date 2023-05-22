import Image from "next/image";
import UserButton from "../UserButton";
import styles from "./styles.module.scss"
import Logo from "@/assets/png/logo.png"
import Link from "next/link";


const Header = () => {

    return(
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <Link href={'/'}>
                    <Image src={Logo} alt="Logo Icon" width={50} height={50}></Image>
                </Link>
            </div>
            <div className={styles.header__nav}>
                <nav>
                    <Link href={'/products'}>Navigate</Link>
                    <Link href={'/products'}>Navigate</Link>
                    <Link href={'/products'}>Navigate</Link>
                    <Link href={'/item'}>Navigate</Link>
                </nav>
                <Link href={'/profile'} style={{textDecoration:'none'}}>
                <UserButton number={2}></UserButton>
                </Link>
            </div>
        </header>
    )
}

export default Header;