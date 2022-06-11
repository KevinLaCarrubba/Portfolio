import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Header.module.scss'

const Header = () => {
    let location = useLocation()
    const navItems = [
        {
            label: 'About',
            url: '/'
        },
        {
            label: 'Projects',
            url: '/projects'
        },
        {
            label: 'Uses',
            url: '/uses'
        },
        {
            label: 'Contact',
            url: '/contact'
        }
    ]

    return (
        <header>
            <div className={styles.navContainer}>
                <div className={styles.logoContainer}>
                    <Link to="/" className={styles.link}>
                        <span className={styles.firstLetter}>K</span>
                        <span className={styles.nameLetters}>evin</span>
                        <span className={styles.firstLetter}>L</span>
                        <span className={styles.nameLetters}>aCarrubba</span>
                    </Link>
                </div>
                <nav>
                    <ul className={styles.linkUl}>
                        {navItems.map((item, index) => (
                            <li key={index}>
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
                </nav>
            </div>
        </header>
    )
}

export default Header
