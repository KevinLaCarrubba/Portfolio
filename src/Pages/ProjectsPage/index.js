import React from 'react'
import styles from './ProjectsPage.module.scss'
import WeatherApp from '../../images/WeatherApp.png'

const ProjectsPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <h1>Projects</h1>
                <p>A couple of my </p>
                <p>personal projects</p>
            </div>
            <div className={styles.rightSide}>
                <div className={styles.appView}>
                    <h4 className={styles.appName}>Weather App</h4>
                    <div className={styles.infoContainer}>
                        <a href="https://luxury-yeot-4a744e.netlify.app/">
                            <img
                                className={styles.appImage}
                                src={WeatherApp}
                                alt="Weather App Display"
                            />
                        </a>
                        <div className={styles.tagBox}>
                            <div className={styles.tag}>React</div>
                            <div className={styles.tag}>Sass</div>
                        </div>
                        <div className={styles.siteLinks}>
                            <div className={styles.link}>
                                <a href="https://github.com/KevinLaCarrubba/weather-app">
                                    View Github Repo
                                </a>
                            </div>
                            <div className={styles.link}>
                                <a href="https://luxury-yeot-4a744e.netlify.app/">
                                    Launch Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsPage
