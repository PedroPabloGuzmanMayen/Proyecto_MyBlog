import React from 'react'
import Proptypes from 'prop-types'
import './Input.css'

const Input = ({ onChange, value, text, placeholder }) => {
    return (
        <label className = 'Input-container'>
            <span className = 'text'>{text}</span>
            <input onChange={onChange} className = 'Input' value={value} placeholder = {placeholder} />
        </label>
    )
}

Input.propTypes = {
    onChange: Proptypes.func,
    value: Proptypes.string,
    text: Proptypes.string,
    placeholder: Proptypes.string
}

export default Input