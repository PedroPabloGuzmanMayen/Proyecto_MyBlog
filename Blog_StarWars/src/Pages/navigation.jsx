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
import EditPost from './EditPost/EditPost'

//(10 puntos) High order component para las rutas
const routes = {
    '/home': {
        component: Home,
        requiresLogin: false
    },
    '/loggin':{
        component: Login,
        requiresLogin: false
    },
    '/register':{
        component: Register,
        requiresLogin: false
    },
    '/logout':{
        component: Logout,
        requiresLogin: false
    },
    '/userPosts':{
        component: UserPosts,
        requiresLogin: true
    },
    '/newPost':{
        component: NewPost,
        requiresLogin: true
    },
    '/editPost': {
        component: EditPost,
        requiresLogin: true
    
    }
}

const Navigation = () => {
    const { token } = useToken() 
    const { page, navigate } = useNavigate()
  
    let CurrentPage = () => <h1>404</h1>
  
    if (routes[page] && routes[page].requiresLogin && !token) {
      return <div><h1>No tienes acceso</h1><a href='/#/loggin' onClick={() => navigate('/loggin')}>Please login</a></div>
    }
    CurrentPage = routes[page].component


    return (
        <div>
            <MainTitle />
            <Nav/>

            <CurrentPage />
        </div>
    )

}

export default Navigation