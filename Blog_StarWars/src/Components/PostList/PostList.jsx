import React from 'react'
import Post from '../Post/Post'
import { useEffect } from 'react'
import useAPI from '../../Hooks/useAPI'
import './PostList.css'

const PostList = ({url, condition}) => {
  const {generalPosts, getGeneralPosts} = useAPI()
    useEffect(() => {
        getGeneralPosts(url)
    }, [])

    return (
        <ul className='PostList'>
        {generalPosts.map((post) => {
            return <Post key={post.id} title={post.title} author={post.author} content={post.content} image={post.banner} cond = {condition} idPost = {post.id}/>
        })}
        </ul>
    )
}

export default PostList