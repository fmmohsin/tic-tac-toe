import React from 'react'
import './Square.css'
import CrossIcon from './CrossIcon';
import CircleIcon from './CircleIcon'
const Square = (props) => {
    return (
        <div className="square" onClick={props.onClick}>
        {props.value==='x'?<CrossIcon icon={"icon-board"}/>:props.value==='o'?<CircleIcon icon={"icon-board"}/>:null}
      </div>
    );
}
export default React.memo(Square);