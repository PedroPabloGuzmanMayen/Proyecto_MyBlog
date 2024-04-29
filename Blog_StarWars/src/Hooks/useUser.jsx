import { useState, useEffect, createContext, useContext } from 'react'

const userContext = createContext({ user: '', useUser: () => {} })

const TokenContext = createContext({ token: '', useToken: () => {} })

const userProvider = ({ children }) => {
  const [ user, setUser ] = useState(
    localStorage.getItem('user') || null
  )

  useEffect(() => {
    if (token) {
      localStorage.setItem('user', user)
    }
  }, [user])

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', user)
    }
  }, [user])

  const isLoggedIn = !!token

  const userExists = !!user
  
  const getRawToken = () => {
    return parseJwt(token)
  }

  return (
    <TokenContext.Provider value={{ token, setToken, isLoggedIn, getRawToken}}>
      {children}
    </TokenContext.Provider>
  )
}

const useToken = () => {
  return useContext(TokenContext) 
}


export default useToken
export { TokenContext, TokenProvider }