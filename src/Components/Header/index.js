import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import Hamburger from '../HamburgerMenu'

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
                                    className={
                                        location.pathname === item.url
                                            ? styles.activeLink
                                            : ''
                                    }>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Hamburger navItems={navItems} location={location} />
                </nav>
            </div>
        </header>
    )
}

export default Header
