import './ItemPage.css'

import { NavigationBar } from '../NavigationBar/NavigationBar';
import { ContentLayout } from '../ContentLayout/ContentLayout';

function ItemPage({ item }) {

    return (
        <div className='item-page'>
            <NavigationBar />
            <ContentLayout item={item} />
        </div>
    );
}


export { ItemPage };