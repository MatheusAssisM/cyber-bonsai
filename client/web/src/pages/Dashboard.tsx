import { Grafics } from '../components/Grafics'
import { Menu } from '../components/Menu'
import { Shortcuts } from '../components/Shortcuts'
import styles from '../styles/pages/Dashboard.module.css'

export function Dashboard() {
    return (
        <div className={`${"row"} ${styles.dashboardContainer}`}>
            <div className="col-9">
                <div className={`row ${styles.dashboardRow}`}>
                    <div className="col-2">
                        <Menu></Menu>
                    </div>
                    <div className="col">
                        <Grafics></Grafics>
                    </div>
                </div>
                
            </div>
            <div className={`col ${styles.dashboardShortcuts}`}>
                <Shortcuts></Shortcuts>
            </div>
        </div>
    )
}