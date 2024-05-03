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
        const response = await fetch('https://api.web05.lol/Posts')
        const data = await response.json()
        setGeneralPosts(data)
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

    return { generalPosts, userPosts, getUserPosts, verifyUser, addUser, getGeneralPosts}


}

export default useAPI