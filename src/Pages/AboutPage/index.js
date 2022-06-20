import React from 'react'
import {
    ReactIcon,
    CSSIcon,
    SASSIcon,
    HTMLIcon,
    JSIcon,
    NodeJsIcon,
    MySQLIcon,
    MongoDBIcon,
    GraphQLIcon,
    ApolloGQLIcon,
    GitIcon,
    NextJSIcon,
    TSIcon
} from '../../Components/SvgIcons/Svg'

import {
    GiGraduateCap,
    GiCycling,
    GiGamepad,
    GiConverseShoe,
    GiGymBag
} from 'react-icons/gi'
import { BiCodeAlt, BiSliderAlt } from 'react-icons/bi'

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
                        <p data-show>
                            Junior Front-End Developer<span>.</span>
                        </p>
                        <p>
                            Dog Lover<span>.</span>
                        </p>
                        <p>
                            Trait<span>.</span>
                        </p>
                        <p>
                            Trait<span>.</span>
                        </p>
                    </div>
                </div>
            </section>
            <section className={styles.cardBox}>
                <div className={styles.flipBox}>
                    <div className={styles.flipBoxInner}>
                        <div className={styles.frontside}>
                            <div className={styles.hobbyContainer}>
                                <div className={styles.iconContainer}>
                                    <GiCycling className={styles.icon} />
                                    <GiGamepad className={styles.icon} />
                                    <GiConverseShoe className={styles.icon} />
                                    <GiGymBag className={styles.icon} />
                                </div>
                                <p>Hobbies &amp; Interests</p>
                            </div>
                        </div>
                        <div className={styles.backside}>
                            <div className={styles.hobbyContainer}>
                                <div>Cycling</div>
                                <div>Gaming</div>
                                <div>Coding</div>
                                <div>Sneakers</div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.flipBox}>
                    <div className={styles.CartWheel}>
                        <div className={styles.frontside}>
                            <div className={styles.eduContainer}>
                                <GiGraduateCap className={styles.icon} />
                                <p>Education</p>
                            </div>
                        </div>
                        <div className={styles.backside}>
                            <div className={styles.eduContainer}>
                                <div className={styles.bootCamp}>
                                    <h4>Rutgers Coding Bootcamp</h4>
                                    <h4>2021</h4>
                                    <p>
                                        Full Stack Web Development focused in
                                        both front end and back end javascript
                                        technologies{' '}
                                    </p>
                                </div>
                                <div className={styles.college}>
                                    <h4>Bergen Community College</h4>
                                    <h4>2021</h4>
                                    <p>Computer Science A.S</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.flipBox}>
                    <div className={styles.flipBoxInner}>
                        <div className={styles.frontside}>
                            <div className={styles.prefContainer}>
                                <BiSliderAlt className={styles.icon} />
                                <p>Preferences</p>
                            </div>
                        </div>
                        <div className={styles.backside}>
                            <h1>WORK FROM HOME!</h1>
                        </div>
                    </div>
                </div>
                <div className={styles.flipBox}>
                    <div className={styles.CartWheel}>
                        <div className={styles.frontside}>
                            <div className={styles.skillsContainer}>
                                <BiCodeAlt className={styles.icon} />
                                <p>
                                    Tech
                                    <span>knowledge</span>y
                                </p>
                            </div>
                        </div>
                        <div className={styles.backside}>
                            <div className={styles.iconContainer}>
                                <HTMLIcon />
                                <CSSIcon />
                                <SASSIcon />
                                <JSIcon />
                                <ReactIcon />
                                <TSIcon />
                                <NextJSIcon />
                                <NodeJsIcon />
                                <MySQLIcon />
                                <MongoDBIcon />
                                <GraphQLIcon />
                                <ApolloGQLIcon />
                                <div />
                                <GitIcon />
                                <div />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutPage
