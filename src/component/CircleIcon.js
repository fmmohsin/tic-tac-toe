import React from 'react'
import './CircleIcon.css'
const CircleIcon = (props) => {
    return (
        <div className={props.icon}>
            <div className="outer">
                <div className="inner"></div>
            </div>
            <div className="circle"></div>
        </div>
    )
}

export default React.memo(CircleIcon);