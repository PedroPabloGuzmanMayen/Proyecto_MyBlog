import { useState } from 'react'
import './App.css'
import Login from './Pages/Login/Login'
import {NavigationProvider} from './Hooks/useNavigate'
import Navigation from './Pages/navigation'
import { TokenProvider } from './Hooks/useToken'
function App() {


  return (
    <TokenProvider>
      <NavigationProvider>
        <Navigation />
      </NavigationProvider>
    </TokenProvider>

  )
}

export default App
