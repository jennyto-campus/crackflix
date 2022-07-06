import Link from "next/link";
import styles from "./Header.module.css"

export default function Header(props) {

    return (
        <div className={styles.header}>
            <div className={styles.nav}>
                <Link href="/movie" ><a >Movies</a></Link>
            </div>
            <img src="../../crackflix-logo.png" alt="Crackflix Logo" className={styles.logo} href="/" />
            <div className={styles.nav}>
                <Link href="/series" ><a >Series</a></Link>
            </div>

        </div>
    )
}