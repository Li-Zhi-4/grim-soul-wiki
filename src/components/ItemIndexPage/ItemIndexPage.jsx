import './ItemIndexPage.css'

import { NavigationBar } from '../NavigationBar/NavigationBar';
import { ItemIndexLayout } from '../ItemIndexLayout/ItemIndexLayout';


function ItemIndexPage() {

    return (
        <div className='item-page'>
            <NavigationBar />
            <ItemIndexLayout />
        </div>
    );
}


export { ItemIndexPage };