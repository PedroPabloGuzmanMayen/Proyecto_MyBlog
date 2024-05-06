import React from 'react'
import useNavigate from '../../Hooks/useNavigate'
import useForm from '../../Hooks/useForm'
import Button from '../../Components/Button/Button'
import Input from '../../Components/Input/Input'
import useAPI from '../../Hooks/useAPI'
import useToken from '../../Hooks/useToken'
import TextArea from '../../Components/TextArea/TextArea.jsx'
import { object, string } from 'yup'


const Schema = {
    title: string().required(),
    content: string().required(),
    image: string().required()
}

const NewPost = () => {
    const {getRawToken} = useToken()
    const {newPost} = useAPI()
    const Post = async () =>{
        await newPost(values.title, values.content, values.image, getRawToken().username)
    }
    const {page, navigate} = useNavigate()
    const {values, setValue, validate, errors} = useForm(Schema)
    return (
        <aside className='NewPost-Container'>
            <h1>Publica algo :D</h1>
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
        </aside>
    )
}

export default NewPost

//newPost(title, content, image, author)
