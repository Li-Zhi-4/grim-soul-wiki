import './ItemPage.css'

import { useParams } from 'react-router-dom';

import { NavigationBar } from '../NavigationBar/NavigationBar';
import { ContentLayout } from '../ContentLayout/ContentLayout';

import { AllData } from '../../data/AllData';

/**
 * COMPONENT: ItemPage
 * Takes an object (i = items['object-nam']) and returns the ItemPage.
 * Valid items include weapons, armour, and shields.
 * 
 * @param {object} i an object in items.js (no longer a param but grabbed from the link)
 * @returns corresponding ItemPage
 */
function ItemPage() {
    const { itemID } = useParams();
    const i = AllData[itemID];

    return (
        <div className='item-page'>
            <NavigationBar />
            <ContentLayout i={i} />
        </div>
    );
}


export { ItemPage };