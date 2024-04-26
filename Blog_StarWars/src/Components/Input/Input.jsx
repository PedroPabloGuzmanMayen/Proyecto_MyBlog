import React from 'react'
import Proptypes from 'prop-types'
import './Input.css'

const Input = ({ onChange, value, text, placeholder, type }) => {
    return (
        <label className = 'Input-container'>
            <span className = 'text'>{text}</span>
            <input onChange={onChange} className = 'Input' value={value} placeholder = {placeholder} type = {type} />
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