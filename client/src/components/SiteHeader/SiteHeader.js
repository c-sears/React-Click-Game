import React from 'react'
import './SiteHeader.css'

const SiteHeader = props => {
    return (
        <nav id='site_header' className="navbar fixed-top navbar-light bg-light justify-content-center">
            <span id='header_text' className="navbar-brand ml-0">MARVEL CHARACTER CLICKY GAME</span>

            <ul className="navbar-nav navbar-expand-lg ml-5">
                <li className={`nav-text score_item ${props.color_switch}`}>
                    <h4>Score: {props.score}</h4>
                </li>
                <li className="nav-text score_item">
                    <h4>High Score: {props.high_score}</h4>
                </li>

            </ul>
        </nav>
    )
}

export default SiteHeader