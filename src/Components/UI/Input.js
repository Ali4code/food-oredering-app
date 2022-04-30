import React from 'react'
import Classes from './Input.module.css'
const Input = (props) => {
  return (
    <>
        <label htmlFor={props.input.id}>{props.input.label}</label>
        <input className={Classes.input} {...props.input} />
    </>
  )
}

export default Input