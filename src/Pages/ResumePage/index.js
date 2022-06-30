import React from 'react'
import styles from './ResumePage.module.scss'
import {
    IoMailOutline,
    IoCallOutline,
    IoLocationOutline,
    IoGlobeOutline
} from 'react-icons/io5'

const ResumePage = () => {
    return (
        <div className={styles.container}>
            <section className={styles.heading}>
                <h1>
                    <span className={styles.firstName}>Kevin </span>
                    <span className={styles.lastName}>LaCarrubba</span>
                </h1>
                <h6>WEB DEVELOPER</h6>
            </section>
            <section className={styles.mainSection}>
                <div className={styles.leftSide}>
                    <hr />
                    <div className={styles.contactBox}>
                        <h3>CONTACT</h3>
                        <div className={styles.contactLine}>
                            <p>201 906 1884</p>
                            <IoCallOutline />
                        </div>
                        <div className={styles.contactLine}>
                            <p>klacarrubba.dev@gmail.com</p>
                            <IoMailOutline />
                        </div>
                        <div className={styles.contactLine}>
                            <p>New York Metropolitan Area</p>
                            <IoLocationOutline />
                        </div>
                        <div className={styles.contactLine}>
                            <p>KLaCarrubba.com</p>
                            <IoGlobeOutline />
                        </div>
                    </div>
                    <div className={styles.eduBox}>
                        <hr />
                        <h3>EDUCATION</h3>
                        <div className={styles.eduLine}>
                            <p className={styles.schoolName}>
                                Bergen Community College
                            </p>
                            <p className={styles.year}>2021</p>
                            <p className={styles.degree}>ComputerScience</p>
                        </div>
                        <div className={styles.eduLine}>
                            <p className={styles.schoolName}>
                                Rutgers Coding Bootcamp
                            </p>
                            <p className={styles.year}>2021</p>
                            <p className={styles.degree}>
                                Full Stack Web Development
                            </p>
                        </div>
                    </div>
                    <div className={styles.skillsBox}>
                        <hr />
                        <h3>SKILLS</h3>

                        <p>HTML</p>
                        <p>CSS3/SASS</p>
                        <p>JavaScript/ES6++</p>
                        <p>React</p>
                        <p>NodeJS</p>
                        <p>MongoDB</p>
                        <p>GraphQL</p>
                        <p>Restful APIs</p>
                        <p>Git/Github</p>
                    </div>
                </div>
                <div className={styles.rightSide}>
                    <hr />
                    <div className={styles.profileBox}>
                        <h3>PROFILE</h3>
                        <p>
                            A highly motivated front-end web developer with
                            expertise in designing and building user interfaces.
                            Passionate about developing great products and
                            continually expanding knowledge and creativity
                            within the field.
                        </p>
                    </div>
                    <hr />
                    <div className={styles.expBox}>
                        <h3>EXPERIENCE</h3>
                        <p className={styles.jobTitle}>
                            Junior Front - End Web Developer
                        </p>
                        <p className={styles.companyInfo}>
                            Incyree INC. | Skillman, NJ | Dec 2021 - June 2022
                        </p>
                        <ul>
                            <li>Type</li>
                            <li>Stuff</li>
                            <li>That Sound</li>
                            <li>Stupid</li>
                            <li>Here</li>
                        </ul>
                        <p className={styles.jobTitle}>Server</p>
                        <p className={styles.companyInfo}>
                            Nicola's Ristorante | Totowa, NJ | 2012 - 2021
                        </p>
                        <ul>
                            <li>
                                Assisted management with training of new
                                employees on general order of operations and
                                point - of - service (POS) system
                            </li>
                            <li>
                                Communicated clearly and positively during
                                high-volume, fast-paced operations
                            </li>
                            <li>
                                Maintained a thorough knowledge of the menu
                                items and all ingredients to ensure health and
                                safety concerns of all customers were met.
                            </li>
                            <li>
                                Assisted management with handling currency and
                                closing the restaurant after hours
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ResumePage
