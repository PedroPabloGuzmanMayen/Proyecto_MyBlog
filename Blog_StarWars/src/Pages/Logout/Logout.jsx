import React, { useEffect } from 'react';
import useNavigate from '../../Hooks/useNavigate';

const Logout = () => {
    const { navigate } = useNavigate();
    useEffect(() => {
        localStorage.removeItem('access_token'); // Remove only the access token
        setTimeout(() => {
            navigate('/login');
        }, 3000);
    }, []);
    return (
        <h1>Logout</h1>
    )
}

export default Logout;