import React from 'react'
import Proptypes from 'prop-types'
import './LoginButton.css'

const Button = ({ onClick, text }) => {
    return (
        <button onClick={onClick} classname = 'LoginButton'>{text}</button>
    )
}

Button.propTypes = {
    onClick: Proptypes.func,
    text: Proptypes.string
}

export default Button

