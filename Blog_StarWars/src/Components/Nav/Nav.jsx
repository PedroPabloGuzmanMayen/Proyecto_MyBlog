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
                    <a href='/' className='NavList' onClick={() => {navigate('/')}}>Home</a>
                </li>
                <li className='NavList'>
                    <a href='#/login' className='NavList' onClick={() => {navigate('/login')}}>Login</a>
                </li>
                <li className='NavList'>
                    <a href='#/register' className='NavList' onClick={() => {navigate('/register')}}>Register</a>
                </li>
            </ul>
        ) : (
            <ul className='Nav'>
                <li className='NavList'>
                    <a href='/' className='NavList' onClick={() => {navigate('/')}}>Home</a>
                </li>
                <li className='NavList'>
                    <a href='#/my-posts' className='NavList' onClick={() => {navigate('/my-posts')}}>My Posts</a>
                </li>
                <li className='NavList'>
                    <a href='#/logout' className='NavList' onClick={() => {navigate('/logout')}}>Logout</a>
                </li>
            </ul>
        )
    );
}

export default Nav;
