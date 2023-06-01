import styles from './loader.module.scss'


const Loader = () => {
    return (
        <div className={styles.loader}>
            <div className={styles.content}>
                <div className={[styles.ball, styles.red].join(' ')}></div>
                <div className={[styles.ball, styles.green].join(' ')}></div>
                <div className={[styles.ball, styles.yellow].join(' ')}></div>
                <div className={[styles.ball, styles.blue].join(' ')}></div>
                <div className={[styles.ball, styles.emeraldGreen].join(' ')}></div>
                <div className={[styles.ball, styles.pink].join(' ')}></div>
            </div>
        </div>
    );
};

export default Loader;