import './App.css'
import { useRoutes } from 'react-router-dom'


import { HomePage } from './components/HomePage/HomePage'
import { ItemPage } from './components/ItemPage/ItemPage'
import { ItemIndexPage } from './components/ItemIndexPage/ItemIndexPage'
import routes from './routes'

import { items } from './data/items'

function App() {
    const element = useRoutes(routes);
    return element;


    // return (
    //     <>
    //         {/* <ItemPage i={items['bonnet-cap']} /> */}
    //         <ItemIndexPage />
    //     </>
    // )
}

export default App
