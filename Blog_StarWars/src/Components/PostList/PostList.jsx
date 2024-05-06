import React from 'react'
import Post from '../Post/Post'
import { useEffect } from 'react'
import useAPI from '../../Hooks/useAPI'
import './PostList.css'

const PostList = () => {
  const {generalPosts, getGeneralPosts} = useAPI()
    useEffect(() => {
        getGeneralPosts()
    }, [])

  if (generalPosts.length === 0) {
    return(
        <h1>Loading...</h1>
    )
  }

    return (
        <ul className='PostList'>
        {generalPosts.map((post) => {
            return <Post key={post.id} title={post.title} author={post.author} content={post.content} image={post.banner} cond = {true} id = {'hola'}/>
        })}
        </ul>
    )
}

export default PostList