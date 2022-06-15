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
                    <div className={styles.myInfo}>
                        <p>
                            Junior Front-End Developer<span>.</span>{' '}
                        </p>
                        <p>
                            Trait<span>.</span>{' '}
                        </p>
                        <p>
                            Trait<span>.</span>{' '}
                        </p>
                        <p>
                            Trait<span>.</span>{' '}
                        </p>
                    </div>
                </div>
            </section>
            <section className={styles.cardBox}>
                <div className={styles.flipBox}>
                    <div className={styles.flipBoxInner}>
                        <div className={styles.frontside}>
                            <h2>Hobbies</h2>
                        </div>
                        <div className={styles.backside}>
                            <h1>SHOTS !</h1>
                        </div>
                    </div>
                </div>
                <div className={styles.flipBox}>
                    <div className={styles.CartWheel}>
                        <div className={styles.frontside}>
                            <h2>Education</h2>
                        </div>
                        <div className={styles.backside}>
                            <h1>I KNOW SOME SHIT!</h1>
                        </div>
                    </div>
                </div>
                <div className={styles.flipBox}>
                    <div className={styles.flipBoxInner}>
                        <div className={styles.frontside}>
                            <h2>Preferences</h2>
                        </div>
                        <div className={styles.backside}>
                            <h1>WORK FROM HOME!</h1>
                        </div>
                    </div>
                </div>
                <div className={styles.flipBox}>
                    <div className={styles.CartWheel}>
                        <div className={styles.frontside}>
                            <h2>Skills</h2>
                        </div>
                        <div className={styles.backside}>
                            <h1>FIGURE IT OUT!</h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutPage
