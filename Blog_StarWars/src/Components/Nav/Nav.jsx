import React from "react"
import useNavigate from '../../Hooks/useNavigate'

const {page, navigate} = useNavigate()

const Nav = () => {

    return (
        <ul>
            <li>
                <a href = '/' onClick = {() => {navigate('/')}}>Home</a>
            </li>
            <li>
                <a href = '/new-post' onClick = {() => {navigate('/new-post')}}>New Post</a>
            </li>
            <li>
                <a href = '/login' onClick = {() => {navigate('/login')}}>Login</a>
            </li>
            <li>
                <a href = '/register' onClick = {() => {navigate('/register')}}>Register</a>
            </li>

        </ul>
    )
}

export default Nav
/*

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
*/