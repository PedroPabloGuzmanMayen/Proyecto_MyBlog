import React from 'react'
import './Post.css'
import Button from '../Button/Button'
import useAPI from '../../Hooks/useAPI'
import useID from '../../Hooks/useID'
const Post = ({title, author, content, image, cond, idPost}) => {
    const {id, setId} = useID()
    const {deletePost} = useAPI()
    const removePost = async () =>{
        const res = await deletePost(idPost)
        if (res){
            alert('Post deleted :)')
        }

    }
    const goToModify = () =>{
        console.log(id)
        console.log(idPost)
        setId(idPost)
        
        
        
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
            <img className = 'image-container' src={image} alt={title} />
            <div className = 'buttons-container'>
                <Button text='Delete' onClick={removePost}/>
                <Button text='Modify' onClick={goToModify}/>
            </div>
        </li>
    )
}

export default Post