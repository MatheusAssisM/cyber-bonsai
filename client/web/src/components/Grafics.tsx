import styles from '../styles/components/Grafics.module.css'

export function Grafics() {
    return(
        <>
        <div className="row">
            <div className={styles.graficTop}>
                <h1>Grafico 1</h1>
            </div>
        </div>
        <div className="row">
            <div className={styles.graficFooter}>
                <h1>Grafico 2</h1>
            </div>
        </div>
        </>
    )
}