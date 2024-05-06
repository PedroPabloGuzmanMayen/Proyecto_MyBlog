import React from 'react'
import './Post.css'
import Button from '../Button/Button'
const Post = ({title, author, content, image, cond, id}) => {
    const deletePost = () =>{
        console.log('Delete post with id: ', id)

    }
    const goToModify = () =>{
        console.log('Go to modify post with id: ', id)
    }
    return !cond ? (
        <li className='Post'>
            <h1 className='Posttitle'>{title}</h1>
            <h2>Created by: {author}</h2>
            <p>{content}</p>
            <img className = 'image-container' src={image} alt={title} />
        </li>
    ) : (
        <li className='Post'>
            <h1 className='Posttitle'>{title}</h1>
            <h2>Created by: {author}</h2>
            <p>{content}</p>
            <p>True</p>
            <img className = 'image-container' src={image} alt={title} />
            <div className = 'buttons-container'>
                <Button text='Delete' onClick={deletePost}/>
                <Button text='Modify' onClick={goToModify}/>
            </div>
        </li>
    )
}

export default Post