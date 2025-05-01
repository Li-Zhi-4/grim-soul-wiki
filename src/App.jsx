import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import { HomePage } from './components/HomePage/HomePage'
import { ItemPage } from './components/ItemPage/ItemPage'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;700&display=swap" rel="stylesheet"></link>
            
            
            <ItemPage item='fiery-retribution-shield' />
        </>
    )
}

export default App
