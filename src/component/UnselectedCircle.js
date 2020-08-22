import React from 'react'
import './UnselectedCircle.css'
const UnselectedCircle = (props) => {
    return (
        <div className="center-align">
            <div className="outer-unselected">
                <div className="inner-unselected">
                </div>
            </div>
        </div>
    )
}

export default React.memo(UnselectedCircle);