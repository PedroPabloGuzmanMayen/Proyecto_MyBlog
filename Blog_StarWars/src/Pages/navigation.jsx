import React from "react"
import Home from './Home/Home'
import NewPost from './NewPost/NewPost'
import Login from './Login/Login'
import Register from './Register/Register'
import useToken from '../Hooks/useToken'
import useNavigate from '../Hooks/useNavigate'
import Nav from '../Components/Nav/Nav'
import Logout from './Logout/Logout'
import MainTitle from '../Components/MainTitle/MainTitle'
import UserPosts from './UserPosts/UserPosts'

const routes = {
    '/': {
        component: Home,
        requiresLogin: false
    },
    '/new-post': {
        component: NewPost,
        requiresLogin: true
    },
    '/login':{
        component: Login,
        requiresLogin: false
    },
    '/register':{
        component: Register,
        requiresLogin: false
    },
    '/logout':{
        component: Logout,
        requiresLogin: true
    },
    '/userPosts':{
        component: UserPosts,
        requiresLogin: true
    
    }
}

const Navigation = () => {
    const {page, navigate} = useNavigate()
    //const {token} = useToken()
    let CurrentPage = routes[page].component

    return (
        <div>
            <MainTitle />
            <Nav/>

            <CurrentPage />
        </div>
    )

}

export default Navigation