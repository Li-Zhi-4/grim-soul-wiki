import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import { HomePage } from './components/HomePage/HomePage'
import { ItemPage } from './components/ItemPage/ItemPage'
import { items } from './data/items'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <ItemPage i={items['fiery-retribution-shield']} />
        </>
    )
}

export default App
