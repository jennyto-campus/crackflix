import { useEffect, useRef, useState } from "react"
import styles from "./Modal.module.css"

export default function Modal(props) {

    const [active, setActive] = useState(false)

    useEffect(() => {
        setActive(props.active)
    }, [props.active])

    return (
        <div id={props.id} className={`${styles.modal} ${active ? styles.active : ''}`}>
            {props.children}
        </div>
    )
}

export const ModalContent = props => {

    const contentRef = useRef(null)
    const closeModal = () => {
        contentRef.current.parentNode.classList.remove('active')
        if (props.onClose) props.onClose()
    }

    return (
        <div className={styles.modal_content}>
            {props.children}
            <div onClick={closeModal} className={styles.modal_content_close} >
                <i className={`${styles.bx} ${styles.bxx}`}></i>
            </div>
        </div>
    )
}