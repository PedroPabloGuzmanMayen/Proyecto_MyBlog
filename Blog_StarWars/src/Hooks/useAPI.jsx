import { useState } from 'react'
//Se usa un hook para las llamadas a la API (10 puntos)
const useAPI = () =>{

    const [generalPosts, setGeneralPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    const getGeneralPosts = async (url) => {
        try {
            setIsLoading(true)
            const response = await fetch(url)
            const data = await response.json()
            setGeneralPosts(data)
            setIsLoading(false)
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }
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

    const deletePost = async (id) => {
        const response = await fetch(`https://api.web05.lol/22111/deletePost/${id}`, {
            method: 'DELETE',
        })
        if (response.ok){
            return true
        }
        else{
            return false
        }
    }

    const modifyPost = async (id, title, content, banner) => {
        const body = {"title": title, "image": banner, "content": content}
        const response = await fetch(`https://api.web05.lol/22111/modifyPost/${id}`, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
    }

    return { generalPosts, verifyUser, addUser, getGeneralPosts, newPost, deletePost, modifyPost, isLoading}


}

export default useAPI