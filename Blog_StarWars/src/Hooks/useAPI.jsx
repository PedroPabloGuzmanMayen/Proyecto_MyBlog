import { useState } from 'react'

const useAPI = () =>{

    const [generalPosts, setGeneralPosts] = useState([])
    const [userPosts, setUserPosts] = useState([])

    const getUserPosts = async (userId) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        const data = await response.json()
        setUserPosts(data)
    }

    const verifyUser = async (username, password) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}&password=${password}`)
        const data = await response.json()
        return data.length > 0
    }

    const addUser = async (username, password) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        const data = await response.json()
        return data
    }


}