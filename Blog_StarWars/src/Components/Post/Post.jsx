import React from 'react'

const Post = (title, author, content, image, date) => {
    return (
        <li className='Post'>
            <h1>{title}</h1>
            <h2>Created by: {author} at {date}</h2>
            <p>{content}</p>
            <img src={image} alt={title} />
        </li>
    )
}

export default Post