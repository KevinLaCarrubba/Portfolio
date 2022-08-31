import React, { useRef } from 'react'
import styles from './UsesPage.module.scss'

const UsesPage = () => {
    const hardwareRef = useRef(null)
    const softwareRef = useRef(null)
    const deskitemRef = useRef(null)
    const otherRef = useRef(null)

    // const scrollTo = event => {
    //     if (event.target.className === 'hardware') {
    //         hardwareRef.current.scrollIntoView({ behavior: 'smooth' })
    //     }
    //     if (event.target.className === 'software') {
    //         softwareRef.current.scrollIntoView({ behavior: 'smooth' })
    //     }
    //     if (event.target.className === 'deskitem') {
    //         deskitemRef.current.scrollIntoView({ behavior: 'smooth' })
    //     }
    //     if (event.target.className === 'other') {
    //         otherRef.current.scrollIntoView({ behavior: 'smooth' })
    //     }
    // }
    return (
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <h1>Uses</h1>
                <p>A short list of stuff </p>
                <p>which I use</p>
            </div>
            <div className={styles.rightSide}>
                {/* <div className={styles.filter}>
                    <button className="hardware" onClick={scrollTo}>
                        Hardware
                    </button>
                    <button className="software" onClick={scrollTo}>
                        Software
                    </button>
                    <button className="deskitem" onClick={scrollTo}>
                        Desk Items
                    </button>
                    <button className="other" onClick={scrollTo}>
                        Other
                    </button>
                </div> */}
                <div className={styles.rightBelow}>
                    <section ref={hardwareRef} id="hardware">
                        <h4>Hardware</h4>
                        <div className={styles.listContainer}>
                            <div className={styles.innerList}>
                                <div className={styles.innerSection}>
                                    <h5>Gaming Computer</h5>
                                </div>
                                <div>
                                    <ul className={styles.list}>
                                        Custom Built PC
                                        <li>CPU: AMD Ryzen 9 3900x</li>
                                        <li>GPU: Aorus Nvidia 2080 Super</li>
                                        <li>Ram: Corsair Vengence 32gb</li>
                                        <li>Cooling: Custom EKWB Hard Loop</li>
                                        <li>Fans: 15x Corsair ML120 RGB</li>
                                        <li>Storage: 3x 1TB m.2</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.innerList}>
                                <div className={styles.innerSection}>
                                    <h5>Coding Computers</h5>
                                </div>
                                <div>
                                    <ul className={styles.list}>
                                        Mac Studio
                                        <li>Chip: Apple M1 Max 24-core</li>
                                        <li>Ram: 32gb</li>
                                        <li>Storage: 512gb</li>
                                    </ul>
                                    <ul className={styles.list}>
                                        MacBook Pro 13" M1
                                        <li>Chip: Apple M1</li>
                                        <li>RAM: 8gb</li>
                                        <li>Storage: </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section ref={softwareRef} id="software">
                        <h4>Software</h4>
                        <div className={styles.listContainer}>
                            <div className={styles.innerList}>
                                <div className={styles.innerSection}>
                                    <h5>Editor &amp; Terminal</h5>
                                </div>
                                <div>
                                    <ul className={styles.list}>
                                        Visual Studio Code
                                        <li>Theme: Moonlight II Italic</li>
                                        <li>Font: Dank Mono</li>
                                        <li>Semi-Colon: None</li>
                                        <li>Cursor: Expanding Blink</li>
                                    </ul>
                                    <ul className={styles.list}>
                                        iTerm2
                                        <li>Theme: Cobalt</li>
                                        <li>
                                            Font: Roboto Mono Light for
                                            Powerline
                                        </li>
                                        <li>Oh My Zsh</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.innerList}>
                                <div className={styles.innerSection}>
                                    <h5>Browser</h5>
                                </div>
                                <div>
                                    <ul className={styles.list}>
                                        Google Chrome
                                        <li>JSON Formatter</li>
                                        <li>React Developer Tools</li>
                                        <li>Redux DevTools</li>
                                        <li>MetaMask</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.innerList}>
                                <div className={styles.innerSection}>
                                    <h5>Productivity</h5>
                                </div>
                                <div>
                                    <ul className={styles.list}>
                                        Notion
                                        <li>Theme: Dark</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section ref={deskitemRef} id="deskitem">
                        <h4>Desk Items</h4>
                        <div className={styles.listContainer}>
                            <div className={styles.innerList}>
                                <div className={styles.innerSection}>
                                    <h5>Screens</h5>
                                </div>
                                <div>
                                    <ul className={styles.list}>
                                        Alienware 27in Gaminig Monitor -
                                        AW2720HF
                                        <li>Wallmounted: True</li>
                                        <li>Primary Monitor</li>
                                    </ul>
                                    <ul className={styles.list}>
                                        Alienware 34in Curved QD-OLED Gaming
                                        Monitor - AW3423DW
                                        <li>Wallmounted: True</li>
                                        <li>Secondary Monitor</li>
                                    </ul>
                                    <ul className={styles.list}>
                                        Samsung 42in UHD TV
                                        <li>Wallmounted: True</li>
                                        <li>Discord Monitor</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.innerList}>
                                <div className={styles.innerSection}>
                                    <h5>Chair</h5>
                                </div>
                                <div>
                                    <ul className={styles.list}>
                                        Secretlab TITAN Evo 2022 Series
                                        <li>Size: XL</li>
                                        <li>
                                            Upholstery: Secretlab SoftWeave Plus
                                            Fabric
                                        </li>
                                        <li>Color: Black</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.innerList}>
                                <div className={styles.innerSection}>
                                    <h5>Input Devices</h5>
                                </div>
                                <div>
                                    <ul className={styles.list}>
                                        Mouse
                                        <li>Gaming Mouse: Logitech G604</li>
                                        <li>
                                            Coding Mouse: Logitech MX Master 3
                                            For Mac
                                        </li>
                                    </ul>
                                    <ul className={styles.list}>
                                        Keyboards
                                        <li>
                                            Gaming Keyboard: Logitech G915 /
                                            Clicky
                                        </li>
                                        <li>
                                            Coding Keyboard 1: Keychron K8 Pro
                                            RGB Aluminum / Gateron G Pro
                                            Mechanical Red Hot-Swappable
                                        </li>
                                        <li>
                                            Coding Keyboard 2: Keychron K2 Pro
                                            RGB Aluminum / Gateron G Pro Red
                                            Hot-Swappable
                                        </li>
                                    </ul>
                                    <ul className={styles.list}>
                                        Microphone
                                        <li>
                                            Primary Microphone: Blue Mic Yeti
                                            Pro
                                        </li>
                                        <li>
                                            Primary Microphone: Blue Mic Yeti
                                            Pro
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.innerList}>
                                <div className={styles.innerSection}>
                                    <h5>Output Devices</h5>
                                </div>
                                <div>
                                    <ul className={styles.list}>
                                        Speakers
                                        <li>
                                            Gaming Speakers: Logitech G560 RGB
                                            Speakers
                                        </li>
                                    </ul>
                                    <ul className={styles.list}>
                                        Headsets
                                        <li>
                                            Gaming Headset: Logitech G PRO X
                                            Wireless
                                        </li>
                                        <li>
                                            Coding Headset: AirPods Max Space
                                            Gray
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section ref={otherRef} id="other">
                        <h4>Other</h4>
                        <div className={styles.listContainer}>
                            <div className={styles.innerList}>
                                <div className={styles.innerSection}>
                                    <h5>Gaming Controllers</h5>
                                </div>
                                <div>
                                    <ul className={styles.list}>
                                        Racing
                                        <li>Steering Wheel: Logitech G923</li>
                                        <li>
                                            Shifter: Logitech Driving Force
                                            Shifter
                                        </li>
                                    </ul>
                                    <ul className={styles.list}>
                                        Sports Game
                                        <li>
                                            Controller 1: Blue Wireless Xbox One
                                        </li>
                                        <li>
                                            Controller 2: Red Wireless Xbox One
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.innerList}>
                                <div className={styles.innerSection}>
                                    <h5>Bikes</h5>
                                </div>
                                <div>
                                    <ul className={styles.list}>
                                        Road
                                        <li>Bike: Canyon Ultimate CF SLX </li>
                                        <li>Color: Black</li>
                                        <li>
                                            Groupset: Dura Ace 11-speed w/
                                            Ceramic Speed OSPW
                                        </li>
                                        <li>Pedals: Garmin Vector 3</li>
                                    </ul>
                                    <ul className={styles.list}>
                                        Trail
                                        <li>Bike: Canyon Neuron AL 7.0</li>
                                        <li>Color: Grey/Orange</li>
                                        <li>Groupset: SRAM GX Eagle</li>
                                        <li>Pedals: Shimano PD-M8100</li>
                                    </ul>
                                    <ul className={styles.list}>
                                        Hyrbid
                                        <li>Bike: Specualized Sirrus 4.0</li>
                                        <li>Color: Satin Flake Silver</li>
                                        <li>Groupset: Shimano Sora 9-speed</li>
                                        <li>
                                            Pedals: Specialized Body Geometry
                                            Fitness, platform, plastic
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default UsesPage
