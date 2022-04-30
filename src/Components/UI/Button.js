import React from 'react'
import Classes from './Button.module.css'

function Button(props) {
  return (
    <button className={`${Classes.btn} ${props.className}`} onClick={props.onClick}>{props.children}</button>
  );
}

export default Button