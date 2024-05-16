import { useState, useEffect, createContext, useContext } from 'react'


function parseJwt (token) {
    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join(''))

    return JSON.parse(jsonPayload)
}


const TokenContext = createContext({ token: '', useToken: () => {} })

const TokenProvider = ({ children }) => {
  const [ token, setToken ] = useState(
    localStorage.getItem('access_token') || null
  )
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const createTokenn = (token) => {
    setToken(token)
    localStorage.setItem('access_token', token) //Se guarda el token en localstorage para dejar la sesión activa (10 puntos)
  }

  useEffect(() => {
    if (token) {
      localStorage.setItem('access_token', token)
      setIsLoggedIn(true)
    }
  }, [token])




  const getRawToken = () => {
    return parseJwt(token)
  }

  return (
    <TokenContext.Provider value={{ token, setToken, isLoggedIn, getRawToken, createTokenn}}>
      {children}
    </TokenContext.Provider>
  )
}

const useToken = () => {
  return useContext(TokenContext) 
}


export default useToken
export { TokenContext, TokenProvider }