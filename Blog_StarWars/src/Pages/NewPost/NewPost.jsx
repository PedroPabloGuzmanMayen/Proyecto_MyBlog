import React from 'react'
import useNavigate from '../../Hooks/useNavigate'


const NewPost = () => {
    const {page, navigate} = useNavigate()
    return (
        <h1>New Post</h1>
    )
}

export default NewPost