import './ContentLayout.css'

import { InfoBox } from '../InfoBox/InfoBox';

/**
 * COMPONENT: ContentLayout
 * Takes a an object from items (i = items['object-nam']) and creates layout of the content on the item page.
 * 
 * @param {object} i an object in items.js 
 * @returns the layout of content on an item page
 */
function ContentLayout({ i }) {

    /* Figure out how to display use. */
    return (
        <div className="content-parent">
            <a href="/items" className="back-link">&lt; Back</a>
            <h1 className="item-title">{i.name}</h1>
            
            <div className="content-child">
                <div className="information">
                    <p className='item-description item'>"{i.description}"</p>
                    <p className="item">{i.use}</p>

                    <div className="information-section">
                        <h2 className="subtitle">Crafting</h2>
                        <ul className="item">
                            {Object.entries(i.crafting).map( ([key, value]) => (<li key={key}>{value} {key}</li>))}
                        </ul>
                    </div>

                    <div className="information-section">
                        <h2 className="subtitle">Obtained</h2>
                        <ul className="item">
                            {i.obtained.map( (p,idx) => (<li key={idx}>{p}</li>) )}
                        </ul>
                    </div>
                </div>

                <InfoBox i={i} />
            </div>
        </div>
    );
}

export { ContentLayout };