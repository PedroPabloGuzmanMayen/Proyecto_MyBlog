import React from "react";
import useNavigate from '../../Hooks/useNavigate';
import useToken from '../../Hooks/useToken';
import './Nav.css';

const Nav = () => {
    const {page, navigate} = useNavigate();
    const {token} = useToken();

    return (
        token === null ? (
            <ul className='Nav'>
                <li className='NavList'>
                    <a href='#/home' className='NavList' onClick={() => {navigate('/home')}}>Home</a>
                </li>
                <li className='NavList'>
                    <a href='#/loggin' className='NavList' onClick={() => {navigate('/loggin')}}>Login</a>
                </li>
                <li className='NavList'>
                    <a href='#/register' className='NavList' onClick={() => {navigate('/register')}}>Register</a>
                </li>
            </ul>
        ) : (
            <ul className='Nav'>
                <li className='NavList'>
                    <a href='#/home' className='NavList' onClick={() => {navigate('/home')}}>Home</a>
                </li>
                <li className='NavList'>
                    <a href='#/userPosts' className='NavList' onClick={() => {navigate('/userPosts')}}>My Posts</a>
                </li>
                <li className='NavList'>
                    <a href='#/newPost' className='NavList' onClick={() => {navigate('/newPost')}}>New Post</a>
                </li>
                <li className='NavList'>
                    <a href='#/logout' className='NavList' onClick={() => {navigate('/logout')}}>Logout</a>
                </li>
            </ul>
        )
    );
}

export default Nav;
