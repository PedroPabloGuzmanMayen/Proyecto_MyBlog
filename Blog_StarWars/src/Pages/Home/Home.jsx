import React from 'react'
import useNavigate from '../../Hooks/useNavigate'
import PostList from '../../Components/PostList/PostList'
import './Home.css'

const Home = () => {
    const {page, navigate} = useNavigate()
    return (
        <div className='Home-container'>
          <PostList />
        </div>

    )
}
export default Home