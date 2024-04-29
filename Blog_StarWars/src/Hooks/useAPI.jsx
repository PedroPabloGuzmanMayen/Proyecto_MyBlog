import { useState } from 'react'

const useAPI = () =>{

    const [generalPosts, setGeneralPosts] = useState([])
    const [userPosts, setUserPosts] = useState([])

    const getUserPosts = async (userId) => {
        const response = await fetch(`https://api.web05.lol/Posts/${userId}`)
        const data = await response.json()
        setUserPosts(data)
    }

    const verifyUser = async (username, password) => {
        const body = { "username": username, "password": password}
        const response = await fetch(`http://api.tiburoncin.lat/login`, {
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

    return { generalPosts, setGeneralPosts, userPosts, getUserPosts, verifyUser, addUser}


}

export default useAPI