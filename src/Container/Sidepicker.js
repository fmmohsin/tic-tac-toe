import React, { Fragment } from 'react'
import CrossIcon from '../component/CrossIcon'
import CircleIcon from '../component/CircleIcon'
import CustomBtn from '../component/Custombtn'
import SelectedCircle from '../component/SelectedCircle'
import UnselectedCircle from '../component/UnselectedCircle'
import './Sidepicker.css'
import { withRouter } from 'react-router-dom'

const Sidepicker = (props) => {
    if(!props.gameState.playmode)
        props.history.push('./Playmode')
    let cross=[];
    let circle=[];
    if(props.gameState.pickedSide === 'cross')
    circle.push("is-not-selected")
    else if(props.gameState.pickedSide === 'circle')
    cross.push("is-not-selected")
    else{
        circle.push("is-not-selected")
        cross.push("is-not-selected")
    }
    return (
        <Fragment>
            <h3 className="title">Pick your side</h3>
            <div className="row-sidepicker">
                <div className={cross}>
                    <CrossIcon icon='icon-size' />
                    <div id='cross' onClick={props.onClick}>
                        {props.gameState.pickedSide === 'cross' ? <SelectedCircle /> : <UnselectedCircle />}
                    </div>
                </div>
                <div className={circle}>
                    <CircleIcon icon='icon-size' />
                    <div id='circle' onClick={props.onClick}>
                        {props.gameState.pickedSide === 'circle' ? <SelectedCircle /> : <UnselectedCircle />}
                    </div>
                </div>
            </div>
            <CustomBtn onClick={props.onContinue.bind(this)}>Continue</CustomBtn>
        </Fragment>
    )
}

export default withRouter(Sidepicker);
