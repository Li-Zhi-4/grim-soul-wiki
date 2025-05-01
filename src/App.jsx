import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import { HomePage } from './components/HomePage/HomePage'

import { InfoBox } from './components/InfoBox/InfoBox'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <InfoBox item='fiery-retribution-shield' />
        </>
    )
}

export default App
