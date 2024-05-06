import React from 'react'
import useNavigate from '../../Hooks/useNavigate'
import useToken from '../../Hooks/useToken'
import PostList from '../../Components/PostList/PostList'
import './Home.css'

const Home = () => {
  const {isLoggedIn} = useToken()
  console.log('isLoggesIn is: ', isLoggedIn)
    const {page, navigate} = useNavigate()
    return (
        <div className='Home-container'>
          <PostList url = 'https://api.web05.lol/22111/Posts' condition = {false} />
        </div>

    )
}
export default Home