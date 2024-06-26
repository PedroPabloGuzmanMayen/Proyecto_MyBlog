import React from 'react'
import Proptypes from 'prop-types'
import { useState } from 'react'
import './Input.css'

const Input = ({ value, onChange, text, type, placeholder }) => {
    const [ eyeClosed, setEyeClosed ] = useState(true)
    return (
        <label className = 'Input-container'>
            <span className = 'text'>{text}</span>
            <input value={value} onChange = {onChange} type = {type} placeholder={placeholder} className = 'Input' />
        </label>
    )
}

Input.propTypes = {
    onChange: Proptypes.func,
    value: Proptypes.string,
    text: Proptypes.string,
    placeholder: Proptypes.string,
    type: Proptypes.string
}

export default Input