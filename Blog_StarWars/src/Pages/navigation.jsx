import React from "react"
import Home from './Home/Home'
import NewPost from './NewPost/NewPost'
import Login from './Login/Login'
import Register from './Register/Register'
import useToken from '../Hooks/useToken'
import useNavigate from '../Hooks/useNavigate'
import Nav from '../Components/Nav/Nav'

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
    }
}

const Navigation = () => {
    const {page, navigate} = useNavigate()
    let CurrentPage = routes[page].component

    return (
        <div>
            <Nav/>

            <CurrentPage />
        </div>
    )

}

export default Navigation