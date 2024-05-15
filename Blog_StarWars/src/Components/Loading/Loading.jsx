import React from 'react'
import './Loading.css'
const Loading = () => {
    return (
        <div className = 'loading-container'>
          <img src = '../../Assets/star.jpg' alt = 'loading' className = 'loading-gif'></img>
          <h3>Loading.....</h3>
        </div>
    )
}

export default Loading