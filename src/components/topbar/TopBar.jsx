import React from 'react'
import "./topbar.scss"
import { Mail, Person } from '@material-ui/icons';

export default function TopBar({ menuOpen, setMenuOpen }) {
    return (
        <div className={`topbar ${menuOpen && "active"}`} >
            <div className="wrapper">
                <div className="left">
                    <a href="#AboutMe" className="logo"> Achraf Bilal </a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>
                            <a href="tel:+212 694823664">+212 694823664</a>
                        </span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>
                            <a href="mailto:achraf.professional.ma@gmail.com">achraf.professional.ma@gmail.com</a>
                        </span>
                    </div>

                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => { setMenuOpen(!menuOpen) }}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>

            </ div>
        </div>
    )
}
