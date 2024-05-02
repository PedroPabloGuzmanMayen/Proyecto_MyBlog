import React from "react"
import useNavigate from '../../Hooks/useNavigate'
import './Nav.css'


const Nav = () => {
    const {page, navigate} = useNavigate()


    return (
        <ul className='Nav'>
            <li className = 'NavList'>
                <a href = '/' className = 'NavList' onClick = {() => {navigate('/')}}>Home</a>
            </li>
            <li className = 'NavList'>
                <a href = '#/new-post' className = 'NavList' onClick = {() => {navigate('/new-post')}}>New Post</a>
            </li>
            <li className = 'NavList'>
                <a href = '#/login' className = 'NavList' onClick = {() => {navigate('/login')}}>Login</a>
            </li>
            <li className = 'NavList'>
                <a href = '#/register' className = 'NavList' onClick = {() => {navigate('/register')}}>Register</a>
            </li>
            <li className = 'NavList'>
                <a href = '#/logout' className = 'NavList' onClick = {() => {navigate('/logout')}}>Logout</a>
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