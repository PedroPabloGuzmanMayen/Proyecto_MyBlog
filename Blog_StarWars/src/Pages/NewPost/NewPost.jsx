import React from 'react'
import useNavigate from '../../Hooks/useNavigate'
import useForm from '../../Hooks/useForm'
import Button from '../../Components/Button/Button'
import Input from '../../Components/Input/Input'
import useAPI from '../../Hooks/useAPI'
import useToken from '../../Hooks/useToken'
import TextArea from '../../Components/TextArea/TextArea.jsx'
import './NewPost.css'
import { useState } from 'react'
import { object, string } from 'yup'


const Schema = {
    title: string().required(),
    content: string().required(),
    image: string().required()
}

const NewPost = () => {
    const {getRawToken} = useToken()
    const {newPost} = useAPI()
    const [error, setError] = useState('')
    const Post = async () =>{
        const content = values.content || ''
        const title = values.title || ''
        const image = values.image || ''
        if (title === '' || content === '' || image === ''){
            setError('Todos los campos son requeridos')
        }
        else if (title.length > 50){
            setError('El título debe ser de menos de 50 caracteres')
        }
        else if (content.length > 240){
            setError('El contenido debe ser de menos de 240 caracteres')
        }
        else {
            await newPost(title, content, image, getRawToken().username)
            setError('Posteado :)')
        }
        
    }
    const {page, navigate} = useNavigate()
    const {values, setValue, validate, errors} = useForm(Schema)
    return (
        <aside className='NewPost-Container'>
            <h1 className='title'>Publica algo :D</h1>
            <Input
                value = {values.title || ''}
                onChange = {(e) => {setValue('title', e.target.value)}}
                text = 'Title'
                type = 'text'
                placeholder = 'post title'/>
            <Input
                value = {values.image || ''}
                onChange = {(e) => {setValue('image', e.target.value)}}
                text = 'Image'
                type = 'text'
                placeholder = 'Image for your post'/>
            <TextArea
                value = {values.content || ''}
                onChange = {(e) => {setValue('content', e.target.value)}}
                text = 'Content'
                placeholder = 'Post content'/>
            <Button 
                text = 'Post'
                onClick = {Post}
            />
            <p className='error'>
                {error}
            </p>
        </aside>
    )
}

export default NewPost

//newPost(title, content, image, author)
