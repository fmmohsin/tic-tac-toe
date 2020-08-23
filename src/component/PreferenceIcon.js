import React from 'react'
import fontawesome from '@fortawesome/fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import './PreferenceIcon.css'
fontawesome.library.add(faCog);
const PreferenceIcon = () => {
    return (
        <div className='PreferenceIcon'>
            <svg width="0" height="0">
                <radialGradient id="rg" r="120%" cx="10%" cy="107%">
                    <stop stopColor="#3674fd" offset="0" />
                    <stop stopColor="#478af6" offset="0.25" />
                    <stop stopColor="#5da7ec" offset="0.5" />
                    <stop stopColor="#71c1e3" offset="0.75" />
                    <stop stopColor="#90e8d6" offset="1" />
                </radialGradient>
            </svg>
            <i className="fa fa-cog" style={{ fontSize: "20px" }} aria-hidden="true"></i>
        </div>
    )
}

export default PreferenceIcon;