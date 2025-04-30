import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import { HomePage } from './components/HomePage/HomePage'
import { ShieldInfoBox } from './components/InfoBox/ShieldInfoBox'

function App() {
const [count, setCount] = useState(0)

return (
    <>
        <ShieldInfoBox item='fiery-retribution-shield' />
    </>
)
}

export default App
