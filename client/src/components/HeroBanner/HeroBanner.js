import React from 'react'
import style from './HeroBanner.css'

style.backgroundImage = `url(/images/hero_banner.jpg)`
const HeroBanner = props => {
    return (
        <div className='hero_banner' style={style} >
            <h1 id='banner_text'>CLICK THEM ALL<br /><span className='small_text'>BUT ONLY ONCE!</span></h1>
        </div>
    )
}

export default HeroBanner