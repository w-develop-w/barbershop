import styles from "./Recording.module.scss"

function Recording() {
    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                <h3>Recording</h3>
                <div className={styles.content}>
                    <img src="img/barber-1.webp" />
                    <div className={styles.info}>
                        <div className={styles.barber}>
                            <h3>Top Barber</h3>
                            <h2>Mark Scar</h2>
                        </div>
                        <div className={styles.dataAndTime}>
                            <h3>14.07</h3>
                            <h3>14:00</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recording
