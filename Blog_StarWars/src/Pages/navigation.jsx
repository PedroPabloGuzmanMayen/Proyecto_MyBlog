import React from "react"
import Home from './Home/Home'
import NewPost from './NewPost/NewPost'
import Login from './Login/Login'
import Register from './Register/Register'

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

}