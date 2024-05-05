import React from 'react'
import './Post.css'
const Post = ({title, author, content, image}) => {
    return (
        <li className='Post'>
            <h1 className='Posttitle'>{title}</h1>
            <h2>Created by: {author}</h2>
            <p>{content}</p>
            <img src={image} alt={title} />
        </li>
    )
}

export default Post