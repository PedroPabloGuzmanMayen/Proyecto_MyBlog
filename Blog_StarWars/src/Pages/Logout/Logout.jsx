import React, { useEffect } from 'react';
import useNavigate from '../../Hooks/useNavigate'
import useToken from '../../Hooks/useToken';

const Logout = () => {
    const { navigate } = useNavigate()
    const {setToken} = useToken()
    useEffect(() => {
        localStorage.removeItem('access_token')
        setToken(null)

        setTimeout(() => {
            navigate('/login');
        }, 3000);
    }, []);
    return (
        <h1>Logout</h1>
    )
}

export default Logout;