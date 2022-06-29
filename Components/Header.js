import Link from "next/link";
import styles from "./Header.module.css"

export default function Header() {

    return (
        <div className={styles.header}>
            <Link href="/movies" className={styles.nav}>Movies</Link>
            <img src="../../crackflix-logo.png" alt="Crackflix Logo" className={styles.logo}/>
            <Link href="/series" className={styles.nav}>Series</Link>
        </div>
    )
}