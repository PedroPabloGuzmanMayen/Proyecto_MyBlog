import React from 'react'
import Proptypes from 'prop-types'
import Button from '../../Components/Button/Button'
import Input from '../../Components/Input/Input'
import './Login.css'
import { object, string } from 'yup'
import useForm from '../../Hooks/useForm'
import useAPI from '../../Hooks/useAPI'
import useToken from '../../Hooks/useToken'
import useNavigate from '../../Hooks/useNavigate'
import { md5 } from 'js-md5'

const schema = object({
    username: string().required(),
    password: string().required()
})



const Login = () => {
    const {values, setValue, validate, errors} = useForm(schema)
    const {verifyUser} = useAPI()
    const {page, navigate} = useNavigate()
    const {setToken, isLoggedIn} = useToken()
    const submit = async () => {
        const data = await verifyUser(values.username, md5(values.password))
        console.log(data.success)
        if (data.success) {
            console.log('loggedIn1 is:' , isLoggedIn)
            setToken(data.access_token)
            console.log('Token is: ', localStorage.getItem('access_token'))
            navigate('/')
        }
    }
    return (
        <aside className = 'Login-container'>
            <h1 className = 'title'>Welcome</h1>
            <Input
                value = {values.username || ''}
                onChange = {(e) => {setValue('username', e.target.value)}}
                text = 'Username'
                type = 'text'
                placeholder = 'Your username'/>
            <Input
                value = {values.password || ''}
                onChange = {(e) => {setValue('password', e.target.value)}}
                text = 'Password'
                type = 'password'
                placeholder = 'Your password'
             />
            <Button
                text = 'Login'
                onClick = {submit}/>
        </aside>
    )
}


export default Login
