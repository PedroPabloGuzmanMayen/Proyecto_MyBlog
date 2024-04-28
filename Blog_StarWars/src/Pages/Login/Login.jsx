import React from 'react'
import Proptypes from 'prop-types'
import Button from '../Components/Button/Button'
import Input from '../Components/Input/Input'
import './Login.css'
import { object, string } from 'yup'

const schema = object({
    username: string().min(9).required(),
    password: string().min(8).required()
})

const submit = () =>{
    console.log('submitted')
}

const Login = () => {
    const {values, setValue, validate, errors} = useForm(schema)
    return (
        <aside className = 'Login-container'>
            <h1 className = 'title'>Login</h1>
            <Input
                text = 'Email'
                placeholder = 'someone@example.com'/>
        </aside>
    )
}

export default Login
