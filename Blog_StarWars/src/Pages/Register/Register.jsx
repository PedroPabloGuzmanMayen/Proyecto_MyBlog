import React from 'react'
import Button from '../../Components/Button/Button'
import Input from '../../Components/Input/Input'
import { object, string } from 'yup'
import useForm from '../../Hooks/useForm'
import useAPI from '../../Hooks/useAPI'
import useNavigate from '../../Hooks/useNavigate'
import { md5 } from 'js-md5'
import { useState } from 'react'
import './Register.css'

const schema = object({
    username: string().required(),
    password: string().required()
})

const Register = () => {
    const {values, setValue, validate, errors} = useForm(schema)
    const {addUser} = useAPI()
    const {page, navigate} = useNavigate()
    const [error_message, setError] = useState('')
    const submit = async () => {
        if (values.username === '' || values.password === ''){
            setError('Todos los campos son requeridos')
        }
        else if (values.username.length > 15){
            setError('El username debe ser de menos de 15 caracteres')
        }
        else if (values.password.length < 8 || values.password.length > 15){
            setError('El password debe tener entre 8 y 15 caracteres')
        }
        else {
            const data = await addUser(values.username, md5(values.password))
            if (data.success){
    
                console.log('Usuario registrado')
                navigate('/loggin')
            }
            else {
                setError('Usuario ya registrado')
            
            }
        }
    }
    return (
        <aside className = 'Register-container'>
        <h1 className = 'title'>Unete al lado oscuro :D</h1>
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
            text = 'Registrar'
            onClick = {submit}/>
        <h1 className = 'error'>
                {error_message}
        </h1>
    </aside>
    )
}

export default Register