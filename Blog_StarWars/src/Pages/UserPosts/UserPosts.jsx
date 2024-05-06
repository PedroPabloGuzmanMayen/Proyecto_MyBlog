import react from "react"
import useToken from '../../Hooks/useToken'
import '../Home/Home.css'

const UserPosts = () => {
    const {getRawToken} = useToken()
    console.log(getRawToken().username)
    return (
        <div className='Home-container'>
          <PostList url = 'https://api.web05.lol/22111/Posts' condition = {true} />
        </div>
    )
}

export default UserPosts