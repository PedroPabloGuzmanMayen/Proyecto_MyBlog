import React, {Suspense} from 'react'
import useNavigate from '../../Hooks/useNavigate'
import useAPI from '../../Hooks/useAPI'
import useToken from '../../Hooks/useToken'
import Loading from '../../Components/Loading/Loading'
import './Home.css'

// (20 pts, se usa react suspense)
const LazyPostList = React.lazy(() => import('../../Components/PostList/PostList'))

const Home = () => {
  const {isLoggedIn} = useToken()
  console.log('isLoggesIn is: ', isLoggedIn)
    const {page, navigate} = useNavigate()
    return (
        <div className='Home-container'>
          <Suspense fallback = {<Loading/>}>

            <LazyPostList url='https://api.web05.lol/22111/Posts' condition={false} />

          </Suspense>
        </div>

    )
}
export default Home