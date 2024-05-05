import { useState } from 'react'

const useAPI = () =>{

    const [generalPosts, setGeneralPosts] = useState([])
    const [userPosts, setUserPosts] = useState([])

    const getUserPosts = async (userId) => {
        const response = await fetch(`https://api.web05.lol/Posts/${userId}`)
        const data = await response.json()
        setUserPosts(data)
    }

    const getGeneralPosts = async () => {
        const response = await fetch('https://api.web05.lol/22111/Posts')
        const data = await response.json()
        setGeneralPosts(data)
    }
    //newPost(title, content, image, author)
    const newPost = async (title, content, banner, author) => {
        const body = {"title": title, "content": content, "image": banner, "author": author}
        const response = await fetch('https://api.web05.lol/22111/newPost', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        if (response.ok){
            return true
        }
        else{
            return false
        }
    }

    const verifyUser = async (username, password) => {
        const body = { "username": username, "password": password}
        const response = await fetch(`https://api.web05.lol/22111/login`, {
            //mode: 'no-cors',
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        
        })
        const data = await response.json()
        return data
    }

    const addUser = async (username, password) => {
        const body = { "username": username, "password": password}
        const response = await fetch('https://api.web05.lol/22111/register', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        const data = await response.json()
        return data
    }

    return { generalPosts, userPosts, getUserPosts, verifyUser, addUser, getGeneralPosts, newPost}


}

export default useAPI