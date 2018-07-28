import React from 'react'
import './Super.css'


const Super = props => {
    return (
        <li id='hero_img' style={{backgroundImage:`url(${props.img})`}} className='list-inline-item col-sm-2 img-thumbnail' onClick={()=> props.update(props.name, this)}>
            {/* Nothing to see here.. */}
        </li>

    )
}
export default Super