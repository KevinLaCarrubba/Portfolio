import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ContactPage.module.scss'
import { GrGithub, GrLinkedin, GrMail } from 'react-icons/gr'
import mixpanel from 'mixpanel-browser'
mixpanel.init('052928e1717c43426aef3d1b3b518376', {
    debug: true,
    track_pageview: true,
    persistence: 'localStorage'
})
mixpanel.identify('Kevin.LaCarrubba@yahoo.com')
const onClickingTon = () => {
    mixpanel.track('Resume Viewed')
}

const ContactPage = () => {
    return (
        <div className={styles.imageContainer}>
            <div className={styles.overlay}>
                <div className={styles.contactBox}>
                    <div className={styles.weTyping}>
                        <h1>Say Hello.</h1>
                    </div>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>
                            <a href="mailto:klacarrubba.dev@gmail.com">
                                <GrMail className={styles.listIcon} />
                                klacarrubba.dev@gmail.com
                            </a>
                        </li>
                        <li className={styles.listItem}>
                            <a href="https://github.com/KevinLaCarrubba">
                                <GrGithub className={styles.listIcon} />
                                @KevinLaCarrubba
                            </a>
                        </li>
                        <li className={styles.listItem}>
                            <a href="https://www.linkedin.com/in/kevinlacarrubba/">
                                <GrLinkedin className={styles.listIcon} />
                                /in/kevinlacarrubba
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.buttonContainer}>
                    <Link
                        to="/resume"
                        className={styles.button}
                        onClick={onClickingTon}>
                        Need My Resume ?
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
