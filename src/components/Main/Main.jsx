import styles from './Main.module.scss'

function Main() {

    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                <ul>
                    <li>
                        <button>Specialist</button>
                    </li>

                    <li>
                        <button>Service</button>
                    </li>

                    <li>
                        <button>Date and time</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Main