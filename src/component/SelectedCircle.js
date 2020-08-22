import React from 'react'
import './SelectedCircle.css'
const SelectedCircle = (props) => {
    return (
        <div className="center-align">
            <div className="outer-selected">
                <div className="inner-selected1"><div className="inner-selected2"></div></div>
            </div>
        </div>
    )
}

export default React.memo(SelectedCircle);