import React from 'react';
import './userscreen.css'

const input = (props) =>{
return(
    <div className ="Userscreen">
        <input type="text" onChange={props.changed} value={props.username}>
        </input>
    </div>
)
};

export default input;