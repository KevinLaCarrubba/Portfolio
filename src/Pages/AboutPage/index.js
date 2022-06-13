import React from 'react'

//Component Import

//Styles
import styles from './AboutPage.module.scss'

const AboutPage = () => {
    return (
        <>
            <section className={styles.imageContainer}>
                <div className={styles.overlay}>
                    <div className={styles.nameBox}>
                        <h1>Welcome</h1>
                    </div>
                </div>
            </section>
            <section className={styles.introduction}>
                <div className={styles.introBox}>
                    <h1 className={styles.hello}>
                        Hey, I'm <span className={styles.myName}>Kevin</span>.
                    </h1>
                </div>
            </section>
            <section className={styles.cardBox}>Do it up big here</section>
        </>
    )
}

export default AboutPage
