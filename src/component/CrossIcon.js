import React from 'react'
import './CrossIcon.css'
const CrossIcon = (props) => {
    return (
        <div className={props.icon}>
            <div className="cross">
            </div>
            <div className="bg-circle"></div>
        </div>
    )
}

export default React.memo(CrossIcon);