import React from 'react'
import Button from '../../Components/Button/Button'
import Input from '../../Components/Input/Input'
import { object, string } from 'yup'
import useForm from '../../Hooks/useForm'
import useAPI from '../../Hooks/useAPI'
import useNavigate from '../../Hooks/useNavigate'
import { md5 } from 'js-md5'

const schema = object({
    username: string().required(),
    password: string().required()
})

const Register = () => {
    const {values, setValue, validate, errors} = useForm(schema)
    const {addUser} = useAPI()
    const {page, navigate} = useNavigate()
    const submit = async () => {
        const data = await addUser(values.username, md5(values.password))
        if (data.success){
            console.log('Usuario registrado')
            navigate('/login')
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
    </aside>
    )
}

export default Register