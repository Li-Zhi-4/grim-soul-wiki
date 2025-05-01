import './ItemPage.css'

import { NavigationBar } from '../NavigationBar/NavigationBar';
import { ContentLayout } from '../ContentLayout/ContentLayout';

/**
 * COMPONENT: ItemPage
 * Takes an object (i = items['object-nam']) and returns the ItemPage.
 * Valid items include weapons, armour, and shields.
 * 
 * @param {object} i an object in items.js 
 * @returns corresponding ItemPage
 */
function ItemPage({ i }) {

    return (
        <div className='item-page'>
            <NavigationBar />
            <ContentLayout i={i} />
        </div>
    );
}


export { ItemPage };