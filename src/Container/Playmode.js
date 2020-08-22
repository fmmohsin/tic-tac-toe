import React from 'react'
import CrossIcon from '../component/CrossIcon'
import CircleIcon from '../component/CircleIcon'
import './Playmode.css'
import CustomBtn from '../component/Custombtn'
const Playmode = (props) => {

    return (
            <div>
                <div className="icons-wrapper">
                    <CrossIcon icon='icon-size' />
                    <CircleIcon icon='icon-size' />
                </div>
                <h3 className="title">Choose your play mode </h3>
                <div className="root-wrapper">
                    <CustomBtn id='ai' autofocus={true} onClick={props.onplayModeHandler}> With AI</CustomBtn>
                    <CustomBtn id='friend' onClick={props.onplayModeHandler}>With a friend</CustomBtn>
                </div>
            </div>
    )
}
export default Playmode;