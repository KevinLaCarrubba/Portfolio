import React from 'react'
import styles from './ProjectsPage.module.scss'

const ProjectsPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <h1>Projects</h1>
                <p>A couple of my </p>
                <p>personal projects</p>
            </div>
            <div className={styles.rightSide}>Projects go here</div>
        </div>
    )
}

export default ProjectsPage
