import { useState, useEffect, createContext, useContext } from 'react'

const IdContext = createContext({ id: '', useID: () => {} })

const IdProvider = ({ children }) => {
    const [ id, setId ] = useState(
        null
    )
    return (
        <IdContext.Provider value={{ id, setId }}>
            {children}
        </IdContext.Provider>
    )

}

const useID = () => {
    return useContext(IdContext) 
}

export default useID
export { IdContext, IdProvider }