import React from 'react'
import styles from './ProjectsPage.module.scss'
import { photo, weather, calculator } from '../../images/photo'

const ProjectsPage = () => {
    const Projects = [
        {
            name: 'Weather App',
            url: 'https://luxury-yeot-4a744e.netlify.app/',
            image: weather,
            github: 'https://github.com/KevinLaCarrubba/weather-app',
            tags: ['React', 'Sass']
        },
        {
            name: 'Photography Site',
            url: 'https://stupendous-lollipop-df660d.netlify.app/',
            image: photo,
            github: 'https://github.com/KevinLaCarrubba/evanyu-photo-ui',
            tags: ['NextJs', 'TypeScript', 'Sass']
        },
        {
            name: 'Calculator',
            url: 'https://steady-macaron-986588.netlify.app/',
            image: calculator,
            github: 'https://github.com/KevinLaCarrubba/weather-app',
            tags: ['NextJs', 'TypeScript', 'Sass']
        }
    ]

    return (
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <h1>Projects</h1>
                <p>A couple of my </p>
                <p>personal projects</p>
            </div>
            <div className={styles.rightSide}>
                {Projects.map((data, index) => {
                    return (
                        <div className={styles.appView}>
                            <h4 className={styles.appName}>{data.name}</h4>
                            <div className={styles.infoContainer}>
                                <a href={data.url}>
                                    <img
                                        className={styles.appImage}
                                        src={data.image}
                                        alt="Weather App Display"
                                    />
                                </a>
                                <div className={styles.tagBox}>
                                    {data.tags.map((data, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className={styles.tag}>
                                                {data}
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className={styles.siteLinks}>
                                    <a href={data.github}>
                                        <div className={styles.link}>
                                            View Github Repo
                                        </div>
                                    </a>
                                    <a href={data.url}>
                                        <div className={styles.link}>
                                            Launch Live Demo
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProjectsPage
