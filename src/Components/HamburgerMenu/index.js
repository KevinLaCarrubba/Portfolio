import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Hamburger.module.scss'

const Hamburger = ({ navItems, location }) => {
    const [menuLabel, setMenuLabel] = useState(false)
    const [menuDisplay, setMenuDisplay] = useState(false)

    const changeMenuLabel = () => {
        setMenuLabel(!menuLabel)
        setMenuDisplay(!menuDisplay)
    }
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.bun}>
                    <div className={styles.cheese}>
                        <span className={styles.meat} onClick={changeMenuLabel}>
                            {menuLabel === false ? 'MENU' : 'CLOSE'}
                        </span>
                    </div>
                </div>
            </div>
            <div
                style={{
                    display: `${menuDisplay === false ? 'none' : 'block'}`
                }}
                className={styles.menuBox}>
                <ul className={styles.linkUl}>
                    {navItems.map((item, index) => (
                        <li
                            key={index}
                            onClick={() => {
                                setMenuDisplay(false)
                                setMenuLabel(false)
                            }}>
                            <Link
                                to={item.url}
                                style={
                                    location.pathname === item.url
                                        ? { fontWeight: 500 }
                                        : {}
                                }>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Hamburger
