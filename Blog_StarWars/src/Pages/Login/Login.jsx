import React from 'react'
import Proptypes from 'prop-types'
import Button from '../../Components/Button/Button'
import Input from '../../Components/Input/Input'
import './Login.css'
import { object, string } from 'yup'
import useForm from '../../Hooks/useForm'

const schema = object({
    username: string().required(),
    password: string().required()
})

const submit = () =>{
    console.log('submitted')
    console.log(values.password)
}
const Login = () => {
    const {values, setValue, validate, errors} = useForm(schema)
    return (
        <aside className = 'Login-container'>
            <h1 className = 'title'>Login</h1>
            <Input
                value = {values.username || ''}
                onChange = {(e) => {setValue('username', e.target.value)}}
                //onChange = {(value) => {setValue('username', value)}}
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
                onClick = {() => {console.log(values)}}/>
        </aside>
    )
}


export default Login
