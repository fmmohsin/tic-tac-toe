import React from 'react'
import './Custombtn.css'
const CustomBtn = (props)=>{
return(
        <button className='custombtn' id={props.id} onClick={props.onClick.bind(this,props.id)}>{props.children}</button>
)

}
export default CustomBtn;