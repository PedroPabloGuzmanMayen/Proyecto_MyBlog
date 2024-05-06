import { useState } from 'react'
import './App.css'
import Login from './Pages/Login/Login'
import {NavigationProvider} from './Hooks/useNavigate'
import Navigation from './Pages/navigation'
import { TokenProvider } from './Hooks/useToken'
import { IdProvider } from './Hooks/useID'
function App() {


  return (
    <TokenProvider>
    <IdProvider>
      <NavigationProvider>
        <Navigation />
      </NavigationProvider>
    </IdProvider>
    </TokenProvider>

  )
}

export default App
