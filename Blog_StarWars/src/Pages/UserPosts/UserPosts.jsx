import react from "react"
import useToken from '../../Hooks/useToken'
import '../Home/Home.css'
import PostList from '../../Components/PostList/PostList'

const UserPosts = () => {
    const {getRawToken} = useToken()
    return (
        <div className='Home-container'>
          <PostList url = {`https://api.web05.lol/22111/Posts/${getRawToken().username}`} condition = {true} />
        </div>
    )
}

export default UserPosts