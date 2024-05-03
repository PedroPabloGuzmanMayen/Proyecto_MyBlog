import React from 'react'
import Post from '../Post/Post'
import { useEffect } from 'react'

const PostList = () => {
  const {generalPosts, getGeneralPosts} = usePosts()
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
            return <Post key={post.id} title={post.title} author={post.author} content={post.content} image={post.banner} date={post.created_at} />
        })}
        </ul>
    )
}