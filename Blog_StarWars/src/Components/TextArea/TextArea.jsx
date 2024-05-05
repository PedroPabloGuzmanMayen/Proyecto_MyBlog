import React from 'react'
import './TextArea.css'

const TextArea = ({value, onChange, text, placeholder}) => {
  return (
    <label className='TextArea-container'>
      <span className = 'Text'>{text}</span>
      <textarea value={value} onChange={onChange} placeholder={placeholder} className = 'TextArea' />
    </label>
  )
}

export default TextArea