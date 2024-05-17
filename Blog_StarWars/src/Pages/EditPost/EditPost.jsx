import React from 'react'
import useNavigate from '../../Hooks/useNavigate'
import useForm from '../../Hooks/useForm'
import Button from '../../Components/Button/Button'
import Input from '../../Components/Input/Input'
import useAPI from '../../Hooks/useAPI'
import useToken from '../../Hooks/useToken'
import TextArea from '../../Components/TextArea/TextArea.jsx'
import useID from '../../Hooks/useID'
import { useState } from 'react'
import './EditPost.css'
import { object, string } from 'yup'


const Schema = {
    title: string(),
    content: string(),
    image: string()
}

const EditPost = () => {
    const {id} = useID()
    const {getRawToken} = useToken()
    const [error, setError] = useState('')
    
    const {modifyPost} = useAPI()
    const Modify = async () =>{
        const content = values.content || ''
        const title = values.title || ''
        const image = values.image || ''
        if ((content !== '' && content.length > 240)) {
            setError('El contenido debe ser de menos de 240 caracteres')
        }
        else if (title !== '' && title.length > 50) {
            setError('El título debe ser de menos de 50 caracteres')
        }
        else {
            const res = await modifyPost(id, title, content, image)
            alert('Posted :)')
        }
        
    }
    /*
    app.put('/modifyPost/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { title, image, content } = req.body
    */
    const {page, navigate} = useNavigate()
    const {values, setValue, validate, errors} = useForm(Schema)
    return (
        <aside className='Container'>
            <h1 className = 'title'>Edita tu post</h1>
            <Input
                value = {values.title || ''}
                onChange = {(e) => {setValue('title', e.target.value)}}
                text = 'Title'
                type = 'text'
                placeholder = 'Post title'/>
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
                onClick = {Modify}
            />
            <h1 className = 'error'>
                {error}
            </h1>
        </aside>
    )
}

export default EditPost

//newPost(title, content, image, author)
