import React, { useState, useRef } from 'react'
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
    //Pref 1
    const [dogFont, setDogFont] = useState(22)
    const [catFont, setCatFont] = useState(14)
    //Pref 2
    const [macFont, setMacFont] = useState(22)
    const [windowsFont, setWindowsFont] = useState(14)
    //Pref 3
    const [nikeFont, setNikeFont] = useState(22)
    const [addidasFont, setAddidasFont] = useState(14)
    //Pref 4
    const [summerFont, setSummerFont] = useState(22)
    const [winterFont, setWinterFont] = useState(14)
    //Default Values
    const [animalValue, setAnimalValue] = useState('8')
    const [computerValue, setComputerValue] = useState('8')
    const [brandValue, setBrandValue] = useState('0')
    const [seasonValue, setSeasonValue] = useState('0')
    //Scroll Ref
    const infoRef = useRef(null)
    const change = event => {
        const { value } = event.target
        if (event.target.id === 'animal') {
            setAnimalValue(value)
            runAnimalSwitch(animalValue)
        } else if (event.target.id === 'brand') {
            setBrandValue(value)
            runBrandSwitch(brandValue)
        } else if (event.target.id === 'computer') {
            setComputerValue(value)
            runComputerSwitch(computerValue)
        } else if (event.target.id === 'season') {
            setSeasonValue(value)
            runSeasonSwitch(seasonValue)
        }
    }
    const runAnimalSwitch = animalValue => {
        if (animalValue === '8') {
            setCatFont(14)
            setDogFont(22)
        } else if (animalValue === '7') {
            setCatFont(15)
            setDogFont(21)
        } else if (animalValue === '6') {
            setCatFont(16)
            setDogFont(20)
        } else if (animalValue === '5') {
            setCatFont(17)
            setDogFont(19)
        } else if (animalValue === '4') {
            setCatFont(18)
            setDogFont(18)
        } else if (animalValue === '3') {
            setCatFont(19)
            setDogFont(17)
        } else if (animalValue === '2') {
            setCatFont(20)
            setDogFont(16)
        } else if (animalValue === '1') {
            setCatFont(21)
            setDogFont(15)
        } else if (animalValue === '0') {
            setDogFont(14)
            setCatFont(22)
        }
    }
    const runBrandSwitch = brandValue => {
        if (brandValue === '8') {
            setNikeFont(14)
            setAddidasFont(22)
        } else if (brandValue === '7') {
            setNikeFont(15)
            setAddidasFont(21)
        } else if (brandValue === '6') {
            setNikeFont(16)
            setAddidasFont(20)
        } else if (brandValue === '5') {
            setNikeFont(17)
            setAddidasFont(19)
        } else if (brandValue === '4') {
            setNikeFont(18)
            setAddidasFont(18)
        } else if (brandValue === '3') {
            setNikeFont(19)
            setAddidasFont(17)
        } else if (brandValue === '2') {
            setNikeFont(20)
            setAddidasFont(16)
        } else if (brandValue === '1') {
            setNikeFont(21)
            setAddidasFont(15)
        } else if (brandValue === '0') {
            setAddidasFont(14)
            setNikeFont(22)
        }
    }
    const runComputerSwitch = computerValue => {
        if (computerValue === '8') {
            setWindowsFont(14)
            setMacFont(22)
        } else if (computerValue === '7') {
            setWindowsFont(15)
            setMacFont(21)
        } else if (computerValue === '6') {
            setWindowsFont(16)
            setMacFont(20)
        } else if (computerValue === '5') {
            setWindowsFont(17)
            setMacFont(19)
        } else if (computerValue === '4') {
            setWindowsFont(18)
            setMacFont(18)
        } else if (computerValue === '3') {
            setWindowsFont(19)
            setMacFont(17)
        } else if (computerValue === '2') {
            setWindowsFont(20)
            setMacFont(16)
        } else if (computerValue === '1') {
            setWindowsFont(21)
            setMacFont(15)
        } else if (computerValue === '0') {
            setMacFont(14)
            setWindowsFont(22)
        }
    }
    const runSeasonSwitch = seasonValue => {
        if (seasonValue === '8') {
            setSummerFont(14)
            setWinterFont(22)
        } else if (seasonValue === '7') {
            setSummerFont(15)
            setWinterFont(21)
        } else if (seasonValue === '6') {
            setSummerFont(16)
            setWinterFont(20)
        } else if (seasonValue === '5') {
            setSummerFont(17)
            setWinterFont(19)
        } else if (seasonValue === '4') {
            setSummerFont(18)
            setWinterFont(18)
        } else if (seasonValue === '3') {
            setSummerFont(19)
            setWinterFont(17)
        } else if (seasonValue === '2') {
            setSummerFont(20)
            setWinterFont(16)
        } else if (seasonValue === '1') {
            setSummerFont(21)
            setWinterFont(15)
        } else if (seasonValue === '0') {
            setWinterFont(14)
            setSummerFont(22)
        }
    }

    const scrollToInfo = () =>
        infoRef.current.scrollIntoView({ behavior: 'smooth' })

    return (
        <>
            <section className={styles.imageContainer}>
                <div className={styles.overlay}>
                    <div className={styles.downArrows} onClick={scrollToInfo}>
                        <span className={styles.arrow} />
                        <span className={styles.arrow} />
                        <span className={styles.arrow} />
                    </div>
                </div>
            </section>
            <section ref={infoRef} className={styles.introduction}>
                <div className={styles.introBox}>
                    <div className={styles.myInfo}>
                        <h1 className={styles.hello}>
                            Hey, I'm{' '}
                            <span className={styles.myName}>Kevin</span>.
                        </h1>
                        <p data-show>
                            Junior Front-End Developer<span>.</span>
                        </p>
                        <p>
                            Dog Lover<span>.</span>
                        </p>
                        <p>
                            Cyclist<span>.</span>
                        </p>
                        <p>
                            Gamer<span>.</span>
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
                                <div className={styles.hobbyList}>
                                    <ul>
                                        My Hobbies Include:
                                        <li>PC Building</li>
                                        <li>Cycling</li>
                                        <li>Cooking</li>
                                        <li>Gaming</li>
                                        <li>Coding</li>
                                        <li>Gym</li>
                                    </ul>
                                </div>
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
                            <div className={styles.prefContainer}>
                                <h4 className={styles.iPrefer}>I Prefer..</h4>
                                <div className={styles.sliderContainer}>
                                    <label
                                        className={styles.label1}
                                        htmlFor="animal"
                                        style={{ fontSize: `${catFont}px` }}>
                                        Cats
                                    </label>
                                    <input
                                        onChange={change}
                                        id="animal"
                                        type="range"
                                        min="0"
                                        max="8"
                                        value={animalValue}
                                        className={styles.range}
                                    />
                                    <label
                                        className={styles.label2}
                                        htmlFor="animal"
                                        style={{ fontSize: `${dogFont}px` }}>
                                        Dogs
                                    </label>
                                </div>
                                <div className={styles.sliderContainer}>
                                    <label
                                        htmlFor="brand"
                                        className={styles.label1}
                                        style={{ fontSize: `${nikeFont}px` }}>
                                        Nike
                                    </label>
                                    <input
                                        onChange={change}
                                        id="brand"
                                        type="range"
                                        min="0"
                                        max="8"
                                        value={brandValue}
                                        className={styles.range}
                                    />
                                    <label
                                        htmlFor="brand"
                                        className={styles.label2}
                                        style={{
                                            fontSize: `${addidasFont}px`
                                        }}>
                                        Addidas
                                    </label>
                                </div>
                                <div className={styles.sliderContainer}>
                                    <label
                                        htmlFor="computer"
                                        className={styles.label1}
                                        style={{
                                            fontSize: `${windowsFont}px`
                                        }}>
                                        Windows
                                    </label>
                                    <input
                                        onChange={change}
                                        id="computer"
                                        type="range"
                                        min="0"
                                        max="8"
                                        value={computerValue}
                                        className={styles.range}
                                    />
                                    <label
                                        htmlFor="computer"
                                        className={styles.label2}
                                        style={{ fontSize: `${macFont}px` }}>
                                        Mac
                                    </label>
                                </div>
                                <div className={styles.sliderContainer}>
                                    <label
                                        htmlFor="season"
                                        className={styles.label1}
                                        style={{ fontSize: `${summerFont}px` }}>
                                        Summer
                                    </label>
                                    <input
                                        onChange={change}
                                        id="season"
                                        type="range"
                                        min="0"
                                        max="8"
                                        value={seasonValue}
                                        className={styles.range}
                                    />
                                    <label
                                        htmlFor="season"
                                        className={styles.label2}
                                        style={{ fontSize: `${winterFont}px` }}>
                                        Winter
                                    </label>
                                </div>
                            </div>
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
                                {/* <ApolloGQLIcon /> */}
                                {/* <div /> */}
                                <GitIcon />
                                {/* <div /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutPage
