import React from 'react';
import './userscreen.css'
const output = (props) =>{
    return (
        <div className ="Userscreen">
            <p>Output here  {props.username}</p>
             <p>Second Paragraph</p>
        </div>
        
    )
    };

export default output;