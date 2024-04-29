import { useState } from 'react'
import './App.css'
import Login from './Pages/Login/Login'
import {NavigationProvider} from './Hooks/useNavigate'
import Navigation from './Pages/navigation'
function App() {


  return (
    <NavigationProvider>
      <Navigation />
    </NavigationProvider>

  )
}

export default App
